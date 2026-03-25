const student = {
    name: "Sujeet",
    marks: 95,
    prop: this, //global scope
    getName: function () {
        console.log(this);
        return this.name;
    },
    getMarks: () => {       // value of parent's scope
        console.log(this);
        return this.marks;
    },
    getInfo1: function () {
        setTimeout(() => {
            console.log(this);
        }, 2000);
    },
    getInfo2: function () {
        setTimeout(function () {
            console.log(this);
        }, 2000);
    }
}

// console.log(student.getInfo1());

// Array Methods-----
// forEach
let arr = [1, 2, 3, 4, 5];

function print(el) {
    console.log(el);
}

arr.forEach(print);
// OR
arr.forEach(function (el) {
    console.log(el);
});

// Maps..........
let num = [1, 2, 3, 4];
let double = num.map((el) => {
    return el * el;
});

//Reduce Method........
let nums = [1, 2, 3, 4, 5];
let finalVal = nums.reduce((res, el) => res + el);
console.log(finalVal);