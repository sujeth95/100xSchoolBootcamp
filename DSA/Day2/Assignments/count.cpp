#include <iostream>
#define int long long
using namespace std;

signed main()
{
    int n, number;
    cin >> n;
    cin >> number;

    int countEven = 0;
    int countOdd = 0;
    int countPositive = 0;
    int countNegative = 0;

    int i = 1;
    while (i <= n)
    {   while(number!=0){

    
        if (number > 0)
        {
            ++countPositive;
        }
        else
        {
            ++countNegative;
        }
        if (number % 2 == 0 || number == 0)
        {
            ++countEven;
        }
        else
        {
            ++countOdd;
        }
        
        }
        i++;
    }

    cout << countPositive << endl;
    cout << countNegative << endl;
    cout << countEven << endl;
    cout << countOdd << endl;

    return 0;
}



// #include <iostream>
// using namespace std;

// int main() {
//     int N, val;
//     int even = 0, odd = 0, pos = 0, neg = 0;

//     // Read the total number of integers
//     if (!(cin >> N)) return 0;

//     for (int i = 0; i < N; i++) {
//         cin >> val;

//         // Even or Odd check
//         if (val % 2 == 0 || val == 0) even++;
//         else odd++;

//         // Positive or Negative check (Zero is neither)
//         if (val > 0) pos++;
//         else if (val < 0) neg++;
//     }

//     cout << "Even: " << even << "\n";
//     cout << "Odd: " << odd << "\n";
//     cout << "Positive: " << pos << "\n";
//     cout << "Negative: " << neg << endl;

//     return 0;
// }
