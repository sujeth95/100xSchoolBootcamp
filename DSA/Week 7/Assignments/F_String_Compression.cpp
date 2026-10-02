#include <iostream>
using namespace std;

void compressString() {
    string s;
        cin >> s;

        int n = s.size();
        int i = 0;
        while (i < n)
        {
            int j = i;
            int cnt = 0;

            while (j < n and s[i] == s[j])
            {
                cnt++;
                j++;
            }
            cout << s[i];
            if (cnt > 1)
            {
                cout << cnt;
            }
            i=j;
        }
        cout << endl;
}

int main()
{

    int n;
    cin >> n;

    for (int i = 0; i < n; i++)
    {
        compressString();
    }
}