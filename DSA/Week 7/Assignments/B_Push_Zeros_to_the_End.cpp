#include <iostream>
using namespace std;

int main()
{
    int x;
    cin >> x;

    for (int i = 0; i < x; i++)
    {
        int n;
        cin >> n;

        int a[n];
        for (int i = 0; i < n; i++)
        {
            cin >> a[i];
        }

        int zeroCnt = 0;
        for (int i = 0; i < n; i++)
        {
            if (a[i] == 0)
            {
                zeroCnt++;
            }
            else
            {
                cout << a[i] << " ";
            }
        }

        for (int i = 1; i <= zeroCnt; i++)
        {
            cout << 0 << " ";
        }
        cout << endl;
    }
}