import pandas as pd
# pd.__version__
df = pd.DataFrame([11,22,33], columns=['Col_Name'])

data = {
    'Name' : ['Madhav', 'Vishakha', 'Lalita', 'Rishabh'],
    'Age': [16, 17, 18, 19],
    'Salary': [90000, 70000,50000,30000]
}

df = pd.DataFrame(data)
print(df)
print('-------------------------------')
# print(type(df))
# print(df.head(1))
print(df.tail(1))
print('-------------------------------')
print(df.shape)
print('-------------------------------')
print(df.columns)
df.rename(columns={'Salary': 'Monthly_Salary'})