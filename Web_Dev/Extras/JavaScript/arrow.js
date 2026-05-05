const user = {
    username: "sujeet",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`);
        // NOTE: this gives current context.
    }
}

user.welcomeMessage();
// NOTE: this keyword is only used in object and not in function.
// NOTE: arrow function also uses implicit return. i.e., const addTwo = (num1,num2) => (num1 + num2)
// NOTE: To return an object in a function, use ().