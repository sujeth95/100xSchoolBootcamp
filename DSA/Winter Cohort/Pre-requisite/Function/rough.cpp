#include <iostream>
using namespace std;

string findFactorial(int n)
{
    string s;
    for (int i = 0; i < n; i++)
    {
        s = to_string(i);
        s = " ";
    }
    return s;
}

int main()
{
    int n;
    cin >> n;

    cout << findFactorial(n);
}