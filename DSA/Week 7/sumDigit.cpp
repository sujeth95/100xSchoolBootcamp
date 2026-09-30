#include <iostream>
// #define int long longs
using namespace std;

//  int => 10^9
// long long => 10^18

int main()
{
    // USING INT WITH LIMITED NUMBERS...

    // int n;
    // cin >> n;

    // int sum = 0;
    // while (n != 0)
    // {
    //     sum += n % 10;
    //     n /= 10;
    // }
    // cout << sum << endl;

    // USING STRING TO STORE AND OUTPUT LARGER NUMBERS
    string s;
    cin >> s;

    int n = s.size(), sum = 0;

    for (int i = 0; i < n; i++)
    {
        sum += s[i] - 48;
        // // sum += s[i] - '0';
    }
    cout << sum << endl;
}