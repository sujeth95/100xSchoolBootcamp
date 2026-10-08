#include <iostream>
using namespace std;

bool primeOrNot(int n)
{
    int cnt = 0;
    for (int i = 1; i <= n; i++)
    {
        if (n % i == 0)
        {
            cnt++;
        }
    }
    return cnt == 2;
}

int main()
{
    int n;
    cin >> n;
    
    if (primeOrNot(n))
    {
        cout << "Prime";
    }
    else
    {
        cout << "Not Prime";
    }
}