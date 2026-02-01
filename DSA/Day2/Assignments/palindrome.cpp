#include <iostream>
using namespace std;
#define int long long

signed main()
{
    int rev = 0;

    int n;
    cin >> n;

    int temp = n;

    while (n != 0)
    {
        rev = (rev * 10) + n % 10;
        n = n / 10;
    }
    if (rev == temp)
    {
        cout << "YES"<<endl;
    }
    else
    {
        cout << "NO"<<endl;
    }

    return 0;
}