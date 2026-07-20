// Question-1 :   Input the distance in Kilometer and Convert into Meter and Centimeter.

const kilometer = 1;
const distanceCalculator = (distance) => {
    console.log(`Distance in meter ${distance * 1000}`)
    console.log(`Distance in centimetere ${distance * 100000}`)
}
distanceCalculator(kilometer);

console.log("------------------------------------")


// Question-2:    WAP to input radius of a circle and log the area of circle.

const circleArea = (r) => {
    let area = 3.14 * (r * r);
}
console.log(`Area of circle is : ${circleArea(10)}`);

console.log("------------------------------------")


// Question-3:    WAP to input two numbers and perform arithmetic operations on those numbers.

const arithmeticOperation = (num1, num2) => {
    console.log(`The sum is : ${num1 + num2}`);
    console.log(`The subtraction is : ${num1 - num2}`);
    console.log(`The multiplication is : ${num1 * num2}`);
    console.log(`The division is : ${num1 / num2}`);
    console.log(`The reminder is : ${num1 % num2}`);
}

arithmeticOperation(10, 5);

console.log("------------------------------------")

// Question-4:    WAP to calculate total marks in two subject and then calculate percentage

const percentageCalculator = (num1, num2, maxMark) => {
    const totalMarks = num1 + num2;

    const percentage = ((totalMarks) / maxMark) * 100;

    return percentage;
}


console.log(`The percentage is: ${percentageCalculator(50, 19, 100)}%`)

console.log("------------------------------------")


// Question-5:    WAP to input the length and breath of rectangle and calculate the area and parimeter of rectangle.
const calculateRectangle = (length, breath) => {
    console.log(`Area of rectangle is: ${length * breath}`);
    console.log(`Parimeter of rectangle is: ${2 * (length + breath)}`);
}

calculateRectangle(2, 3);

console.log("------------------------------------")

// Question-6:    WAP to input n numbers and log the average of those number.
const averageNumber = (...params) => {
    const numbers = params.length;

    let sumNumber = 0
    for (let i = 0; i < params.length; i++) {
        sumNumber += params[i];
    }

    const average = (sumNumber / numbers);

    return average;
}

console.log(`Average number is: ${averageNumber(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)}`)

console.log("------------------------------------")


// Question-7:    WAP to input the distance between two cities (in km) , convert and print this distance in meter, feet, inches, and centimeter.
const distanceBetweenTwoCities = (distance) => {
    console.log(`The distance in meter is: ${distance * 1000} m`)
    console.log(`The distance in feet is: ${distance * 3281} ft`)
    console.log(`The distance in inches is: ${distance * 39370} inch`)
    console.log(`The distance in centimeter is: ${distance * 100000} cm`)
}

distanceBetweenTwoCities(10);

console.log("------------------------------------")


// Question-8:    WAP to input the temperature in Fahrenheit and convert this temperature in Centigrade.
const convertToCelsius = (temperature) => {
    const celsius = (temperature - 32) * (5 / 9);

    return celsius;
}

console.log(convertToCelsius(32));

console.log("------------------------------------")

// Question-9:    Input the quantity and rate of a product then calculate the amount. A discount of 10 % after then calculate discount amount and amount after discount.
const amountCalculator = (quantity, rateOfProduct) => {
    let amount = quantity * rateOfProduct;
    let discountedAmount = (amount * 10) / 100;
    let finalAmount = amount - discountedAmount;

    console.log(`Total amount: ${amount}`);
    console.log(`Total discount given: ${discountedAmount}`);
    console.log(`Total final amount given after discount: ${finalAmount}`);
}

amountCalculator(10, 50);

console.log("------------------------------------")

// Question-10:    Input principal amount, input rate of interest, input number of years, Then Calculate simple interest.
const simpleInterestCalculator = (principalAmount, roi, years) => {
    const finalInterest = (principalAmount * (roi / 100) * years);

    return finalInterest;
}

console.log(`The simple interest is: ₹${(simpleInterestCalculator(10000, 5, 3))}`);