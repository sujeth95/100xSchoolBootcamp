function isLegal(users) {
    let legalUsers = [];

    for (let i = 0; i < users.length; i++) {
        if (users[i].age >= 10) {
            legalUsers.push(users[i]);
        }
    }
    return legalUsers
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

let legalAllowedUsers = isLegal(users);
console.log(legalAllowedUsers);