// Question-1 :   WAP that checks if a variable x is greater than 10. If it is, log "x is greater than 10," otherwise, log "x is not greater than 10."

const checkGreater = (x) => {
    if (x > 10) {
        console.log("x is greater than 10");
    } else if (x <= 10) {
        console.log("x is not greater than 10")
    } else {
        console.log("Not a number")
    }
}

checkGreater(1);

console.log("----------------------------------------------------------------");

// Question-2 :   WAP that check that if an user is illegible for drive a car or not ( take user age as input).

const eligibleOrNot = (age) => {
    if (age >= 18) {
        console.log("You are eligible to drive a car.")
    } else if (age < 18) {
        console.log("You are not eligible to drive a car.")
    } else {
        console.log("User invalid.");
    }
}

eligibleOrNot("Sujeet");

console.log("----------------------------------------------------------------");

// Question-3:    WAP to assign grade for a student For example, if the score is between 90 and 100, assign the grade "A.", (take score of every subject as input).

const gradeStudents = (grade) => {
    if (grade > 90 && grade <= 100) {
        console.log("Grade 'A'");
    } else if (grade <= 90 && grade > 80) {
        console.log("Grade 'B'");
    } else if (grade > 70 && grade <= 80) {
        console.log("Grade 'C'");
    } else if (grade > 60 && grade <= 70) {
        console.log("Grade 'D'");
    } else if (grade > 50 && grade <= 60) {
        console.log("Grade 'E'");
    } else if (grade > 40 && grade <= 50) {
        console.log("Grade 'F'");
    } else {
        console.log("Invalid Grade");
    }
}

gradeStudents(100);

console.log("----------------------------------------------------------------");


// Question-4:   WAP to check  time of day based on the current hour. For example, if it's before noon, log "Good morning.". (take time as an input).
const checkTime = (hour) => {
    if (hour < 12) {
        console.log("Good Morning");
    } else if (hour < 17) {
        console.log("Good Afternoon");
    } else if (hour < 24) {
        console.log("Good Night")
    }
}

checkTime(0);


console.log("----------------------------------------------------------------");

// Question-5:   WAP using Switch-case to display day name according to number, for eg: 1 => Sunday. (take a number as input).
const Days = 2;

switch (Days) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Not a valid day.");
        break;
}

console.log("----------------------------------------------------------------");

//Question-6:   WAP using Switch-case to display month name according to number, for eg: 1 => January. (take a number as input).
const months = 8;

switch (months) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Not a valid month");
}


console.log("----------------------------------------------------------------");


// Question-7:   Implement a switch case statement to determine the type of fruit based on a variable. Handle at least three different fruit options.
const fruits = 10;
switch (fruits) {
    case 1:
        console.log("Mango");
        break;
    case 2:
        console.log("Apple");
        break;
    case 3:
        console.log("Pineapple");
        break;
    default:
        console.log("Your fruit is not listed.")
}

console.log("----------------------------------------------------------------");

// Question-8:   WAP to categorize a given temperature into "low," "medium," or "high" ranges.

const categorizeTemp = (temperature) => {
    // temperatue in celsius
    if (temperature < 15) {
        console.log("Temperature low");
    } else if (temperature < 30) {
        console.log("Temperature medium");
    } else if (temperature >= 30) {
        console.log("Temperature high");
    } else {
        console.log("Invalid input");
    }
}
categorizeTemp(20);

console.log("----------------------------------------------------------------");

// Question-9:   WAP that classifies a number as positive, negative, even, or odd.
const classNumber = (number) => {
    if (number > 0) {
        if (number % 2 == 0) {
            console.log("The number is positive and even");
        } else {
            console.log("The number is positive but odd")
        }
    } else {
        if (number % 2 == 0) {
            console.log("The number is negative and even");
        } else {
            console.log("The number is negative but odd")
        }
    }
}

classNumber(3);

console.log("----------------------------------------------------------------");


// Question-10:  WAP to validate a username. If the username is less than 6 characters, log "Username too short"; if it's more than 15 characters, log "Username too long"; otherwise, log "Username accepted."
const validUsername = (promps) => {
    const username = promps.length;
    if(username < 6) {
        console.log("Username too short");
    } else if (username > 15) {
        console.log("Username too long");
    } else {
        console.log("Username accepted")
    }
}

validUsername("PowerRangers");