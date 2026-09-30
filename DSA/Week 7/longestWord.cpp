#include <iostream>
using namespace std;

int main()
{
    string s;
    getline(cin, s);

    int n = s.size();
    int i = 0;
    int ans = 0;
    while (i < n)
    {
        if (s[i] == ' ')
        {
            i++;
            continue;
        }

        int j = i;
        int cnt = 0;

        while (j < n and s[j] != ' ')
        {
            cnt++;
            j++;
        }

        if (cnt > ans)
        {
            ans = cnt;
        }

        i = j;
    }
    cout << ans;
}