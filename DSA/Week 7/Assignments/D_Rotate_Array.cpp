#include <iostream>
using namespace std;

void arrRotate()
{
    int n;
    cin >> n;

    int arr[n];
    for (int i = 0; i < n; i++)
    {
        cin >> arr[i];
    }

    int x;
    cin >> x;

    for (int i = x; i < n; i++)
    {
        cout << arr[i] << " ";
    }

    for (int i = 0; i < x; i++)
    {
        cout << arr[i] << " ";
    }
    cout << endl;
}

int main()
{
    int n;
    cin >> n;

    for (int i = 0; i < n; i++)
    {
        arrRotate();
    }
}