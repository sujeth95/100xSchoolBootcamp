#include <iostream>
using namespace std;

int main()
{
    int n, m;
    cin >> n >> m;

    int arr[n][m];
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < m; j++)
        {
            cin >> arr[i][j];
        }
    }

    int sr = 0, er = n - 1;
    int sc = 0, ec = m - 1;

    while (sr <= er and sc <= ec)
    {
        // boundary traversal for this layer

        // sr (sc => ec)
        for (int j = sc; j <= ec; j++)
        {
            cout << arr[sr][j] << " ";
        }

        // ec (sr + 1 => er)
        for (int i = sr + 1; i <= er; i++)
        {
            cout << arr[i][ec] << " ";
        }

        if (sr != er)
        {
            // er (ec - 1 => sc)
            for (int j = ec - 1; j >= sc; j--)
            {
                cout << arr[er][j] << " ";
            }
        }

        if (sc != ec)
        {
            // sc (er - 1 => sr + 1)
            for (int i = er - 1; i >= sr + 1; i--)
            {
                cout << arr[i][sc] << " ";
            }
        }

        sr++;
        er--;

        sc++;
        ec--;
    }
}