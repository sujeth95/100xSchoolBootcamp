#include <iostream>
#define int long long
using namespace std;

int factorialNumber(int n)
{
    int factor = 1;
    if (n == 0)
    {
        factor;
    } else {
    for (int i = 1; i <= n; i++)
    {
        factor = i * factor;
    }
}

    return factor;
}

signed main()
{
    int m;
    cin >> m;

    int ans = factorialNumber(m);
    cout << ans << endl;

    return 0;
}