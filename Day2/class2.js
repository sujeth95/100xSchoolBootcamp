function isLegal(users) {
    let legalUser = [];

    for (let i = 0; i < users.length; i++){
        if(users[i].age >= 18)
        legalUser.push(users[i]);
    }
    return legalUser;
}

const users = [{
    name: "harkirat",
    age: 22
}, {
    name: "raman",
    age: 23
}, {
    name: "kirat",
    age: 12
}]

console.log(isLegal(users));