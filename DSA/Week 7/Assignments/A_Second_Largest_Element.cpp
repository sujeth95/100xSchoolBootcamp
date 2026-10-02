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

    int maxNumber = 0;
    int secondMax = 0;

    for (int i = 0; i < n; i++)
    {
        if (a[i] > maxNumber)
        {
            secondMax = maxNumber;
            maxNumber = a[i];
        }
        else if (a[i] > secondMax and a[i] < maxNumber)
        {
            secondMax = a[i];
        }
        else if (a[i] == maxNumber)
        {
            secondMax = -1;
        }
    }

    cout << secondMax;
}