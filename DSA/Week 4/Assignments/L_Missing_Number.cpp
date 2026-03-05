#include <iostream>
using namespace std;

int main()
{
    int m;
    cin >> m;

    for (int k = 1; k <= m; k++)
    {
        int n;
        cin >> n;

        int a[n];
        for (int i = 0; i < n; i++)
        {
            cin >> a[i];
        }

        int ans;
        for (int i = 0; i < n; i++)
        {
            int count = 0;
            for (int j = 0; j < n; j++)
            {
                if (a[j] == a[i])
                {
                    count++;
                }
            }
            if(count == 1){
                ans = a[i];
                break;
            }
        }
        cout<<ans<<" ";

        cout<<endl;
    }

    return 0;
}