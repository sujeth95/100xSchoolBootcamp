import pandas as pd
import json

# Configuratibg
INPUT_FILE = 'ais-2025-01-01'  
OUTPUT_CSV = 'ais_sample.csv'
OUTPUT_GEOJSON = 'tracks.geojson'

# Geographic bounding box
MIN_LAT, MAX_LAT = 40.4, 40.9
MIN_LON, MAX_LON = -74.3, -73.7

# Time window
START_TIME = pd.to_datetime('2025-01-01 00:00:00', utc=True)
END_TIME = pd.to_datetime('2025-01-01 02:00:00', utc=True)

# Column names
COLUMNS = ['mmsi', 'base_date_time', 'latitude', 'longitude', 'sog', 'cog']

chunk_size = 100000
filtered_chunks = []

print("Processing CSV in chunks...")
# Read the CSV in chunks and keep the specified columns
for chunk in pd.read_csv(INPUT_FILE, usecols=COLUMNS, chunksize=chunk_size):
    
    # Keeping a small geographic area and filtering out invalid coordinates
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

# Saving the small cleaned sample
df.to_csv(OUTPUT_CSV, index=False)
print(f"Saved cleaned data to {OUTPUT_CSV}")

# Generat a GeoJSON routes and split at large time gaps
print("Generating GeoJSON routes...")
features = []
GAP_THRESHOLD = pd.Timedelta(hours=1) # Threshold to prevent misleading connections

for mmsi, group in df.groupby('mmsi'):
    # Calculate the time difference between consecutive points
    time_diffs = group['base_date_time'].diff()
    
    # Create new segment of ID every time the time gap exceeds the threshold
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