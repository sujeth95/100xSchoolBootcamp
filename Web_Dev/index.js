//-------- Variable Assignment 1: --------
let color = "Red";
const height = "173 cm";
var likePizza = true;

console.log(color);
console.log(height);
console.log(likePizza);

//--------- Functions Assignment 1: ---------------
function sum(n, m){
    let sumAns = n + m;

    return sumAns;
}

let ans = sum(1,2);
// let ans = sum("1","2"); // Passing string instead of number.
console.log(ans);

// ---------- Functions Assignment 2: ---------------
function canVote(n) {

    if (n >= 18) {
        console.log("Can Vote");
    } else {
        console.log("You are still a child");
    }

    return;
}

let vote = canVote(100);

// ------------ If/Else Assignment -----------------------
let n = 26;

if (n % 2 == 0) {
    console.log("The number is even.");
} else {
    console.log("The number is odd.");
}

// -------------- Loops Assignment ------------------------
function sum(n){
    let sumAns = 0;
    for (let i=1;i<=n;i++){
        sumAns += i;
    }

    return sumAns;
}

let ans = sum(50);
console.log(ans);