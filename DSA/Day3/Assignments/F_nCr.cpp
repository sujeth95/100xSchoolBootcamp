#include <iostream>
using namespace std;
#define int long long

int nCr(int n, int r)
{
    int nfactor = 1;
    int rfactor = 1;
    int nrfactor = 1;
    for (int i = 1; i <= n; i++)
    {
        nfactor = i * nfactor;
    }
    
    for (int i = 1; i <= r; i++)
    {
        rfactor = i * rfactor;
    }
    for (int i = 1; i <= (n-r); i++)
    {
        nrfactor = i * nrfactor;
    }

    int ansFactorial = nfactor / (rfactor * nrfactor);

    return ansFactorial;
}

signed main()
{
    int n, r;
    cin >> n >> r;

    cout << nCr(n, r) << endl;

    return 0;
}