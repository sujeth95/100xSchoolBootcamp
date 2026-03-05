#include <iostream>
using namespace std;

int main()
{
    int m;
    cin >> m;
    for (int k = 1; k <= m; k++){
    int n;
    cin >> n;

    int a[n];
    for (int i = 0; i < n; i++)
    {
        cin >> a[i];
    }

    int countZero = 0, countOne = 0;

    for (int i = 0; i < n; i++)
    {
        if (a[i] == 0)
        {
            countZero++;
        }
        else
        {
            countOne++;
        }
    }

    // Sorting zeros
    for (int i = 1; i <= countZero; i++)
    {
        cout << "0" << " ";
    }

    // Sorting Ones
    for (int i = 1; i <= countOne; i++)
    {
        cout << "1" << " ";
    }
    cout<<endl;
}
    return 0;
}