// Using interface

// THE PROBLEM OF NOT USING INTERFACES,IN FUNCTIONS AND OBJECTS WE HAVE TO ADD THE TYPES OF ARGUMENT IN AN OBJECT WHICH MAKES IT LESS READABLE.
// function greet(user: {
//     name: string,
//     age: number
// }) {
//     console.log("hello " + user.name + ", your age is " + user.age);
// }

// greet({
//     name: "Sujeet",
//     age: 21
// });


// USING INTERFACES IN FUNCTIONS.
// INTERFACES => custom types that you have created.
interface UserType {
    firstname : string,
    lastname : string,
    age: number 
}

function greet(user: UserType) {

}

let user: UserType = {
    firstname: "sujeet",
    age: 21,
    lastname: "oraon"
}



// TYPES......
type SumInput = string | number;

function sum(a: SumInput, b: SumInput) {

}
// Resonable use of Types...
type Employee = {
    name: string,
    startDate: Date
};

type Manager = {
    name: string,
    department: string
};

type TeamLead = Employee & Manager;

const teamLead: TeamLead = {
    name: "sujeet",
    startDate: new Date(),
    department: "Software developer"
}