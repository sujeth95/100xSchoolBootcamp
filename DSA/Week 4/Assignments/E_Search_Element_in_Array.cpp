#include <iostream>
using namespace std;

int main()
{
    int n;
    cin >> n;

    int target;
    cin >> target;

    int a[n];
    for (int i = 0; i < n; i++)
    {
        cin >> a[i];
    }

    bool isFound = false;

    for (int i = 0; i < n; i++)
    {
        if (a[i] == target)
        {
            isFound = true;
        }
    }

    if (isFound)
    {
        cout << "YES" << endl;
    }
    else
    {
        cout << "NO" << endl;
    }

    return 0;
}