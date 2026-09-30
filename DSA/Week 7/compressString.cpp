#include <iostream>
using namespace std;

int main()
{
    string s;
    cin >> s;

    int n = s.size();
    int i = 0;

    while (i < n)
    {
        int j = i;
        int cnt = 0;

        while (j < n & s[i] == s[j])
        {
            cnt++;
            j++;
        }
        
        cout << s[i];
        if (cnt > 1)
        {
            cout << cnt;
        }
        i = j;
    }
}