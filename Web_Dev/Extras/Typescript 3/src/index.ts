// interface User {
//     name: string;
//     age: number;
// };

// function sumOfAge(user1: User, user2: User) {
//     return user1.age + user2.age;
// }

// const age = sumOfAge({ name: "Taro", age: 20 }, { name: "Jiro", age: 30 });
// console.log(age);



// PICK.............. / Partial.............
// interface User {
//     id: string;
//     name: string;
//     age: number;
//     email: string;
//     password: string;
// }

// type UpdateProps = Pick<User, 'name' | 'age' | 'email'>

// type UpdatePropsOptional = Partial<UpdateProps>

// function updateUser(updatedProps: UpdatePropsOptional) {
//     // hit the database to update the user
// }



// Readonly.........
// type User = {
//     readonly name: string;
//     readonly age: number;
// }


type User = {
    name: string;
    age: number;
}

const user: Readonly<User> = {
    name: "sujeet",
    age: 21
}

// user.age = 19
