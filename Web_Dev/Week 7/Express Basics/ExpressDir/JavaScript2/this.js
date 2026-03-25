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