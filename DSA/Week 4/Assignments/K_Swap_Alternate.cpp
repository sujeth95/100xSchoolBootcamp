#include <iostream>
using namespace std;

int main()
{
    int m;
    cin >> m;

    for (int k = 1; k <= m; k++)
    {
        int n;
        cin >> n;

        int a[n];

        for (int i = 0; i < n; i++)
        {
            cin >> a[i];
        }

        for (int i = 1; i < n; i += 2)
        {
            swap(a[i], a[i - 1]);
        }

        for (int i = 0; i < n; i++)
        {
            cout << a[i] << " ";
        }

        cout << endl;
    }

    return 0;
}