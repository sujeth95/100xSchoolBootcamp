// BINARY SEARCH

#include <bits/stdc++.h>
using namespace std;

int main()
{
    int target = 0;
    int bool flag = false;
    for (int i = 0; i < N; i++)
    {
        if (A[i] == target)
        {
            flag = true;
            break;
        }
    }

    if(A[i] > target){
        break;
    }

    if(flag){
        cout<<"Yes";
    } else {
        cout<<"No";
    }
}