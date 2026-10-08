#include <iostream>
using namespace std;

string printFactors(int n)
{
    string cnt = "";
    for (int i = 1; i <= n; i++)
    {
        if (n % i == 0)
        {
            cnt += to_string(i) + " ";
        }
    }
    return cnt;
}

int main()
{
    int n;
    cin >> n;

    cout << printFactors(n);
}