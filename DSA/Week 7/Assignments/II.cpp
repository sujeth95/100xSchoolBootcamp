#include <iostream>
#define int long long
using namespace std;

signed main()
{
    string s;
    cin >> s;

    int n = s.size(), sum = 0;

    for (int i = 0; i < n; i++)
    {
        sum += s[i] - 48;
    }

    cout << sum << endl;
}