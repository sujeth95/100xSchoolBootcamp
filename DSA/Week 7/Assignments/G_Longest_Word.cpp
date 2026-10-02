#include <iostream>
using namespace std;

int main()
{
    string s;
    getline(cin, s);

    int n = s.size();

    int ans = 0;
    int i = 0;
    while (i < n)
    {
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
        i = j + 1;

        // ALSO A METHOD TO SOLVE THIS PROBLEM...
        // if (s[i] == ' ')
        // {
        //     i++;
        //     continue;
        // }

        // int j = i;
        // int cnt = 0;

        // while (j < n and s[j] != ' ')
        // {
        //     cnt++;
        //     j++;
        // }

        // if(cnt > ans){
        //     ans = cnt;
        // }
        // i = j;
    }
    cout << ans << endl;
}