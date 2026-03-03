#include <iostream>
using namespace std;

int main()
{

    int n;
    cin >> n;

    int a[n];
    for (int i = 0; i < n; i++)
    {
        cin >> a[i];
    }
    long long ans = a[0];
    int locus = 1;

    for (int i = 0; i < n; i++)
    {
        if (a[i] > ans)
        {
            ans = a[i];
            locus = i + 1;
        }
    }
    cout << ans << " " << locus;

    return 0;
}