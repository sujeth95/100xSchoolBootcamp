#include <iostream>
using namespace std;

int factorial(int n)
{
    int ans = 1;
    for (int i = 1; i <= n; i++)
    {
        ans *= i;
    }
    return ans;
}

int main()
{
    int n, r;
    cin >> n >> r;

    // n!
    int nFactorial = factorial(n);

    // r!
    int rFactorial = factorial(r);

    // (n-r)!
    int nrFactorial = factorial(n - r);

    cout << nFactorial / (rFactorial * nrFactorial) << endl;
}