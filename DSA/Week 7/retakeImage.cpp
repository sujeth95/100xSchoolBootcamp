#include <iostream>
using namespace std;

int main()
{
    int n;
    cin >> n;

    int arr[n][n];
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            cin >> arr[i][j];
        }
    }

    // rotated by 90 degrees (clockwise)
    for (int j = 0; j < n; j++)
    {
        for (int i = n - 1; i >= 0; i--)
        {
            cout << arr[i][j] << " ";
        }
        cout << endl;
    }
}