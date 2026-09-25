import pandas as pd
import json

# Configuration
INPUT_FILE = 'ais-2025-01-01'  # Replace with the name of your decompressed CSV file
OUTPUT_CSV = 'ais_sample.csv'
OUTPUT_GEOJSON = 'tracks.geojson'

# Geographic bounding box (Example: New York Harbor area)
MIN_LAT, MAX_LAT = 40.4, 40.9
MIN_LON, MAX_LON = -74.3, -73.7

# Time window (Example: a 2-hour window on Jan 1, 2025)
START_TIME = pd.to_datetime('2025-01-01 00:00:00', utc=True)
END_TIME = pd.to_datetime('2025-01-01 02:00:00', utc=True)

# Exact column names required based on your CSV structure
COLUMNS = ['mmsi', 'base_date_time', 'latitude', 'longitude', 'sog', 'cog']

chunk_size = 100000
filtered_chunks = []

print("Processing CSV in chunks...")
# Read the CSV in chunks and keep the specified columns
for chunk in pd.read_csv(INPUT_FILE, usecols=COLUMNS, chunksize=chunk_size):
    
    # Keep a small geographic area and filter out invalid coordinates
    chunk = chunk[
        (chunk['latitude'] >= MIN_LAT) & (chunk['latitude'] <= MAX_LAT) &
        (chunk['longitude'] >= MIN_LON) & (chunk['longitude'] <= MAX_LON)
    ]
    
    # Use UTC timestamps
    chunk['base_date_time'] = pd.to_datetime(chunk['base_date_time'], utc=True)
    
    # Keep a small time window
    chunk = chunk[
        (chunk['base_date_time'] >= START_TIME) & 
        (chunk['base_date_time'] <= END_TIME)
    ]
    
    # Remove duplicates
    chunk = chunk.drop_duplicates()
    
    filtered_chunks.append(chunk)

# Combine all processed chunks into one DataFrame
df = pd.concat(filtered_chunks, ignore_index=True)

# Group positions by ship and sort them by time
df = df.sort_values(by=['mmsi', 'base_date_time']).reset_index(drop=True)

# Save the small cleaned sample
df.to_csv(OUTPUT_CSV, index=False)
print(f"Saved cleaned data to {OUTPUT_CSV}")

# Generate GeoJSON routes and split at large time gaps
print("Generating GeoJSON routes...")
features = []
GAP_THRESHOLD = pd.Timedelta(hours=1) # Threshold to prevent misleading connections

for mmsi, group in df.groupby('mmsi'):
    # Calculate time difference between consecutive points
    time_diffs = group['base_date_time'].diff()
    
    # Create a new segment ID every time the time gap exceeds the threshold
    group['segment'] = (time_diffs > GAP_THRESHOLD).cumsum()
    
    for segment_id, segment_group in group.groupby('segment'):
        # A line requires at least 2 coordinate points
        if len(segment_group) > 1: 
            coordinates = segment_group[['longitude', 'latitude']].values.tolist()
            
            feature = {
                "type": "Feature",
                "properties": {
                    "mmsi": int(mmsi),
                    "segment": int(segment_id)
                },
                "geometry": {
                    "type": "LineString",
                    "coordinates": coordinates
                }
            }
            features.append(feature)

geojson_data = {
    "type": "FeatureCollection",
    "features": features
}

with open(OUTPUT_GEOJSON, 'w') as f:
    json.dump(geojson_data, f)

print(f"Saved routes to {OUTPUT_GEOJSON}")