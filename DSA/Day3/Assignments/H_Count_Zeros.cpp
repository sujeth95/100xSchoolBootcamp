#include <iostream>
#define int long long
using namespace std;

int countZero(int n)
{
    int count = 0;
    if(n==0){
        count++;
    }
    while (n != 0)
    {   
        if (n % 10 == 0)
        {
            count++;
        }
        n = n / 10;
    }
    return count;
}

signed main()
{
    int n;
    cin >> n;

    cout<<countZero(n)<<endl;

    return 0;
}