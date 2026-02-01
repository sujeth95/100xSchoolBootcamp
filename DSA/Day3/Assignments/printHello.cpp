#include <iostream>
using namespace std;
#define int long long

void printHello(int num)
{
    for (int i = 1; i <= num; i++)
    {
        cout << "I am learning functions" << endl;
    }
    return;
}

signed main()
{
    int n;
    cin >> n;

    printHello(n);

    return 0;
}