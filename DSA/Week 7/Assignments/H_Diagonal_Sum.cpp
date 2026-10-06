#include <iostream>
using namespace std;

int main()
{
    int n;
    cin >> n;

    int a[n][n];

    // Taking input from the user.
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            cin >> a[i][j];
        }
    }

    // Writing logic.
    int ans = 0;
    int i = 0, j = 0;
    while (i < n and j < n)
    {
        ans += a[i][j];
        i++;
        j++;
    }

    cout << ans << endl;
}