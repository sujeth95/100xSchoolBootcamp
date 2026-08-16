// function getMax(nums: any) {
//     let maxValue = -10000000;


//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] > maxValue) {
//             maxValue = nums[i]
//         }
//     }
//     return maxValue;
// }

// getMax([1, 2, 3]);

// interface Address {
//     city: string;
//     pincode: string;
// }

// interface User {
//     name: string;
//     age: number;
//     address?: Address[];
// }

// let user: User = {
//     name: "Sujeet",
//     age: 21,
// }


// Write a function that takes an array of users as an input and returns the legal users.

interface User {
    firstName: string,
    lastName: string,
    age: number;
}

function legalAge(userAge: User[]) {
    let ans: User[] = [];
    for (let i = 0; i < userAge.length; i++) {
        const currentUser = userAge[i]
        if(currentUser && currentUser.age > 18){
            ans.push(currentUser)
        }
    }

    return ans;
}

const ans = legalAge([{
    firstName: "sujeet",
    lastName: "oraon",
    age: 21
}])

console.log(ans);