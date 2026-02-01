#include <iostream>
using namespace std;
#define int long long

void primeOrNot(int n)
{
    if (n <= 1)
    {
        cout << "Not Prime" << endl;
        return;
    }
    if (n <= 3)
    {
        cout << "Prime" << endl;
        return;
    }
    if (n % 2 == 0 || n % 3 == 0)
    {
        cout << "Not Prime" << endl;
        return;
    }

    for (int i = 5; i * i <= n; i += 6)
    {
        if (n % i == 0 || n % (i + 2) == 0)
        {
            cout << "Not Prime" << endl;
            return;
        }
    }

    cout << "Prime" << endl;
    return;
}

signed main()
{
    int num;
    cin >> num;

    primeOrNot(num);

    return 0;
}