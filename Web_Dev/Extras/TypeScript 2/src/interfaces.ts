// interfaces vs types
// create two types called User and Admin.
// create a function that takes either a user or an admin as an input, and returns a string saying "Welcome, [name]".

interface Admin {
    name: string;
    permission: string;
}

interface User {
    name: string;
    age: number;
}

type UserOrAdmin = User | Admin;

function greet(user: UserOrAdmin) {
    console.log(user.name)
}


//NOTE: You can use intersection and union inside interface but cannot use at the top level of interface. You need to use type
// interface User {
//     age: number | string
// }