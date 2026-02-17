const input = { a: "x", b: "y", c: "z" }

let maxStudent = "";
let maxAverage = 0;

for(let student in input){
    let marks = input[student];

    //find sum of marks
    let sum = 0;
    for(let mark of marks){
        sum += mark;
    }

    // find average
    let avg = sum / marks.length;

    // check if highest average
    if(avg > maxAverage){
        maxAverage = avg;
        maxStudent = student;
    }
}

console.log(maxStudent);