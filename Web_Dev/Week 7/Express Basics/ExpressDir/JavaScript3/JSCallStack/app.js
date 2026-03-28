h1 = document.querySelector("h1");

const changeColor = (color, delay, nextColorChange) => {
    setTimeout(() => {
        h1.style.color = color;
        if (nextColorChange) {
            nextColorChange();
        }
    }, delay)
}

//EFFICIENT WAY OF USING CALLBACK....
changeColor("red", 1000, () => {
    changeColor("orange", 1000, () => {
        changeColor("blue", 1000, () => {
            changeColor("purple", 1000);
        });
    });
})

//NOT A GOOD METHOD......
// changeColor("red", 1000);
// changeColor("orange", 2000);
// changeColor("blue", 3000);

// setTimeout(() => {
//     h1.style.color = "red";
// }, 2000);

// setTimeout(() => {
//     h1.style.color = "orange";
// }, 3000);