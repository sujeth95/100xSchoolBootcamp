// function isLegal(user) {
//     if (user.age >= 18) {
//         console.log(user.name + " you can vote.");
//     } else {
//         console.log(user.name + " you cannot vote.");
//     }
// }

// var user1 = {
//     name: "sujeet",
//     age: 18,
//     password: "983fhsado"
// }

// var user2 = {
//     name: "Oraon",
//     age: 21,
//     password: "3223tnai"
// }

// isLegal(user1);
// isLegal(user2);


// ---------Array of objects:-------

// var users = ["harkirat", "raman", "kirat", "rttrrr", "htghtg", "Sujeet"];

// for(let i=0;i<users.length;i++){
//     console.log(users[i]);
// }

function isLegal(user) {
    if (user.age >= 18) {
        console.log(user.name + " you are allowed to vote.");
    } else {
        console.log(user.name + " you are not allowed to vote.")
    }
}

var users = [{
    name: "sujeet",
    age: 22,
    password: "21random",
    addresses: [{
        city: "chd",
        building: 60,
        pincode: 12989128
    },{
        city: "delhi",
        building: 12,
        pincode: 238923
    }]
}, {
    name: "Oraon",
    age: 12,
    password: "12random",
    addresses: []
}, {
    name: "tigga",
    age: 100,
    password: "100random",
    addresses: []
}, {
    name: "harkirat",
    age: 5,
    password: "5random",
    addresses: []
}];

for (let i = 0; i < users.length; i++) {
    isLegal(users[i]);
    console.log(users[0].addresses[0].city);
}