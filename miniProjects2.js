// 1. Take two numbers from the user. Display their: sum, difference, product, division result.
/*
let num1 = Number(window.prompt("Enter num1:"));
let num2 = Number(window.prompt("Enter num2:"));
let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let division = (num1 / num2).toFixed(2);
console.log(`Sum: ${sum}\nDifference: ${difference}\nProduct: ${product}\nDivision: ${division}`);
*/

// 2. Take a single input number. Check whether it is: positive, negative, zero.
/*
document.getElementById("myButton").onclick= function(){
    let num= Number(document.getElementById("num").value);
    console.log(num, typeof num);
    if (num>0){
        console.log(`${num} is positive.`);
    } else if (num<0){
        console.log(`${num} is negative.`);
    } else {
        console.log(`${num} is zero.`);
    }
}
*/

// 3. Take user input for a name and age. Display a sentence combining both.
/*
let name= window.prompt(`Enter your Name:`);
let age= Number(window.prompt(`Enter your Age:`));
console.log(`Hello, ${name}! Your age is ${age}.`);
*/

// 4. Take a number as input (as string). Convert it and calculate its square.
/*
document.getElementById("myButton").onclick= function(){
    let num= document.getElementById("num").value;
    num= Number(num);
    console.log(`Square of the Number: ${num**2}`);
}
*/

// 5. Take two decimal numbers as input. Find their average.
/*
let num1= Number(window.prompt(`Enter num1:`));
let num2= Number(window.prompt(`Enter num2:`));
console.log(`Average of given numbers: ${(num1+num2)/2}`);
*/

// 6. Take input of a number stored as text. Convert and check: is it even or odd?
/*
document.getElementById("myButton").onclick= function(){
    let num= document.getElementById("num").value;
    num= Number(num);
    if (num%2 == 0){
        console.log(`It is even.`);
    } else {
        console.log(`It is odd.`);
    }
}
*/

// 7. Take a number input. Convert it and check if it is divisible by 5.
/*
let num= Number(window.prompt(`Enter a number:`));
if (num%5 == 0){
    console.log(`Yes, it is divisible by 5.`);
} else {
    console.log(`No, it is not divisible by 5.`);
}
*/

// 8. Take two inputs as strings representing numbers. Add them correctly as numbers (not text concatenation).
/*
console.log(`Sum of given numbers: ${Number(window.prompt(`Enter num1:`)) + Number(window.prompt(`Enter num2:`))}`);
*/

// 8. Take two inputs as strings representing numbers. Add them correctly as numbers (not text concatenation).
/*
document.getElementById("myButton").onclick= function(){
    console.log(`Sum of given numbers: ${Number(document.getElementById("number1").value) + Number(document.getElementById("number2").value)}`);
}
*/

// 9. Take a mixed input scenario: number entered as text, multiply it by 10. Display result correctly.
/*
let num= Number(window.prompt(`Enter a number:`));
num= num*10;
console.log(`Result: ${num}`);
*/

// 10. Take user input of a price. Convert and increase it by 18% tax.
/*
document.getElementById("myButton").onclick=function(){
    let num= document.getElementById("num").value;
    num=Number(num);
    console.log(`Increased price after tax: ${(num + (18/100)*num).toFixed(2)}`);
}
*/

// 11./12./20. Take: two numbers, an operator (+, -, *, /). Perform the correct operation based on the operator.
/*
document.getElementById("myButton").onclick= function(){
    let num1= Number(document.getElementById("number1").value);
    let num2= Number(document.getElementById("number2").value);
    let operator= document.getElementById("myOperator").value;
    let result;
    if (operator==`+`){
        result= num1+num2;
    } else if (operator==`-`){
        result= num1-num2;
    } else if (operator==`*`){
        result= num1*num2;
    } else if (operator==`/`){
        result= (num1/num2).toFixed(2);
    } else {
        result= `Invalid operator. Please use +, -, *, or /.`;
    }
    console.log(`Result: ${result}`);
}
*/

// 13. Take two numbers. If first number is greater, subtract second from first. Otherwise, add them.
/*
let num1= Number(window.prompt(`Enter num1:`));
let num2= Number(window.prompt(`Enter num2:`));
if (num1>num2){
    console.log(num1 - num2);
} else {
    console.log(num1 + num2);
}
*/

// 14. Take two numbers. Return: larger number, smaller number.
/*
document.getElementById("myButton").onclick= function(){
let num1= Number(document.getElementById("number1").value);
let num2= Number(document.getElementById("number2").value);
if (num1>num2){
    console.log(`Larger number: ${num1}\nSmaller number: ${num2}`);
} else if (num1<num2){
    console.log(`Larger number: ${num2}\nSmaller number: ${num1}`);
} else {
    console.log(`Both are equal.`);
}
}
*/

// 15. Take a number input. If it is: divisible by 3 → show special message, divisible by 5 → different message, divisible by both → combined message.
/*
document.getElementById("myButton").onclick= function(){
    let num= Number(document.getElementById("num").value);
    if (num%3 == 0 && num%5 == 0){
        window.alert(`THIS NUMBER IS DIVISIBLE BY BOTH 3 AND 5!`);
    } else if (num%5 == 0){
        window.alert(`This number is divisible by 5!`);
    } else if (num%3 == 0){
        window.alert(`This number is divisible by 3!`);
    }
}
*/

// 16. Take user input: hours worked, hourly wage. Calculate total salary.
/*
let hoursWorked= Number(window.prompt(`How many hours did you work?`));
let hourlyWage= Number(window.prompt(`What's the hourly wage?`));
console.log(`Total Salary: ${hourlyWage*hoursWorked}$`);
*/

// 17. Take input: marks obtained, total marks. Convert into percentage and classify: pass / fail logic (your own threshold).
/*
let obtainedMark= Number(window.prompt(`What marks did you obtain in total?`));
let totalMark= Number(window.prompt(`Enter total Mark:`));
let percentage= (obtainedMark/totalMark)*100;
if (percentage>=40){
    console.log(`Pass!`);
} else {
    console.log(`Fail!`);
}
*/

// 18. Take input: item price, quantity. Apply discount: if total > threshold → discount applies, else no discount.
/*
let itemPrice= Number(window.prompt(`Enter the price of item:`));
let quantity= Number(window.prompt(`How many same item?`));
let totalPrice= itemPrice*quantity;
if (totalPrice>50){
    let discountedPrice= totalPrice - (10/100)*totalPrice;
} else {
    window.alert(`No Discount!`);
    discountedPrice = totalPrice;
}
console.log(`Final Price: ${discountedPrice}`);
*/

//19. Take input: temperature. Classify: hot / warm / cold (define your own ranges).
/*
let temperature= Number(window.prompt(`Enter temperature in Celsius:`));
if (temperature>45){
    console.log(`HOT!!`);
} else if (temperature>15){
    console.log(`Warm.`);
} else {
    console.log(`COLD!!`);
}
*/

// 21. Take a user's first name and last name as input. Display: full name in one sentence.
/*
document.getElementById("myButton").onclick= function() {
    let firstName= document.getElementById("firstName").value;
    let lastName= document.getElementById("lastName").value;
    console.log(`Hello, ${firstName} ${lastName}! How's your day going?`);
}
*/

// 22. Take a word from the user. Display: total number of characters.
/*
document.getElementById("myButton").onclick= function(){
    let word= document.getElementById("word").value;
    let wordLength= word.length;
    console.log(`Total no. of characters: ${wordLength}`);
}
*/

// 23. Take a sentence input. Display: the sentence in uppercase, the sentence in lowercase.
/*
document.getElementById("myButton").onclick= function(){
    let sentenceUpper= (document.getElementById("sentence").value).toUpperCase();
    let sentenceLower= (document.getElementById("sentence").value).toLowerCase();
    console.log(`Sentence in Uppercase: ${sentenceUpper}\nSentence in Lowercase: ${sentenceLower}`);
}
*/

// 24. Take a user's favorite fruit as input. Check whether the input matches: "apple", "mango", "banana". Display different messages for each.
/*
let favoriteFruit= window.prompt(`What's your favorite fruit?`);
if (favoriteFruit.toUpperCase() == "APPLE") {
    console.log(`${favoriteFruit} is always recommended by doctors for maintaining healthy life.`);
} else if (favoriteFruit.toUpperCase() == "MANGO") {
    console.log(`${favoriteFruit} is a juicy fruit. Fun fact: ${favoriteFruit} is India's national fruit!`);
} else if (favoriteFruit.toUpperCase() == "BANANA") {
    console.log(`${favoriteFruit} is long, thick, juicy fruit, often fitted inside the vagina.`);
} else {
    console.log(`Enter valid fruit name!`);
}
*/

// 25. Take a password input. Check: whether its length is greater than a minimum requirement. Display: valid / too short.
/*
document.getElementById("myButton").onclick= function(){
    let password= document.getElementById("myPassword").value;
    if (password.length < 8) {
        console.log(`Too Short! Must be of 8 characters.`);
    } else {
        console.log(`Valid.`);
    }
}
*/