#include <iostream>
#define int long long
using namespace std;

int factorPrint(int n)
{   
    int i;
    for (i = n; i >= 1; i--)
    {
        if (n % i == 0)  //printing factors;
        {
            cout << i << " ";
        }
    }

    return i;
}

signed main()
{
    int n;
    cin >> n;

    factorPrint(n);

    return 0;
}