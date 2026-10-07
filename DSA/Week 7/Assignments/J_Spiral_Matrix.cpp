#include <iostream>
using namespace std;

int main()
{
    int n, m;
    cin >> n >> m;

    // Taking input from user.
    int arr[n][m];
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < m; j++)
        {
            cin >> arr[i][j];
        }
    }

    // Spiral Traversal
    int sr = 0, er = n - 1;
    int sc = 0, ec = m - 1;

    while (sr <= er and sc <= ec)
    {
        // boundary traversal for this layer

        // sr (sc -> ec)
        for (int j = sc; j <= ec; j++)
        {
            cout << arr[sr][j] << " ";
        }

        // ec (sr + 1 -> er)

        // er (ec - 1 -> sc)

        // sc (er - 1 -> sr + 1)

        sr++;
        er--;
        sc++;
        ec--;
    }
}