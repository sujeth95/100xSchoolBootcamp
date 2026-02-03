#include<iostream>
using namespace std;
#define int long long

int HCF(int a,int b){
    int num1 = a; int num2 = b;

    while(a != b){
        if(a>b){
            a -= b;
        } else{
            b -= a;
        }
    }
    return a;
}

signed main(){
    int a,b;
    cin>>a>>b;
    cout<<HCF(a,b)<<endl;

    return 0;
}