function isLegal(users) {
    let legalUser = [];
    for (let i = 0; i < users.length; i++) {
        if (users[i].age >= 18 && users[i].sex == "Male") {
            legalUser.push(users[i]);
        }
    }
    return legalUser;
}

const users = [{
    name: "Sujeet",
    age: 22,
    sex: "Male"
}, {
    name: "Oraon",
    age: 12,
    sex: "Male"
}, {
    name: "Neha",
    age: 22,
    sex: "Female"
}, {
    name: "Rekha",
    age: 10,
    sex: "Female"
}];

console.log(isLegal(users));