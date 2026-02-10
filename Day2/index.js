function printAge(n) {
    if (n >= 18 && n != 100) {
        console.log("You can vote" + " " + n + ".");
    } else if (n == 100) {
        console.log("You died " + n + ".");
    }
    else {
        console.log("You cannot vote" + " " + n + ".");
    }
}

for (let i = 1; i <= 100; i++) {
    printAge(i);
}