//higher order function
function multipleGreet(func, n) {
    for (let i = 1; i <= n; i++) {
        func();
    }
}

let greet = function () {
    console.log("hello");
}
// multipleGreet(greet, 2);
// multipleGreet(function () {
//     console.log("namaste")
// }, 1000);


// Higher Order Function that returns a function
function oddEvenTest(request) {
    if (request == "odd") {
        return function (n) {
            console.log(!(n % 2 == 0));
        }
    } else if (request == "even") {
        return function (n) {
            console.log(n % 2 == 0);
        }
    } else {
        console.log("wrong request");
    }
}
// oddEvenTest("odd")(13);

// Methods
const calculator = {
    add: function (a, b) {
        return a + b;
    },
    sub: function (a, b) {
        return a - b;
    },
    mul: function (a, b) {
        return a * b;
    }
};