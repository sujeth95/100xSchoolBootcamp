#include <iostream>
#define int long long
using namespace std;

signed main()
{
    int n;
    cin >> n;

    int a[n];
    for (int i = 0; i < n; i++)
    {
        cin >> a[i];
    }

    bool flag = false;

    for (int i = 1; i < n; i++)
    {
        if (a[i] >= a[i - 1])
        {
            // flag = false;
        }
        else
        {
            flag = true;
            // break;
        }
    }

    if (flag)
    {
        cout << "NO" << endl;
    }
    else
    {
        cout << "YES" << endl;
    }

    return 0;
}