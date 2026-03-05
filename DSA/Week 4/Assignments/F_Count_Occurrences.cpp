#include <iostream>
#define int long long
using namespace std;

signed main()
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

    int count = 0;

    for (int i = 0; i < n; i++)
    {
        if(a[i] == target){
            count += 1;
        }
    }

    cout<<count<<endl;

    return 0;
}