// 1. Take three numbers. Display: largest number, smallest number. (using conditions only).
/*
let num1 = Number(window.prompt(`Enter num1:`));
let num2 = Number(window.prompt(`Enter num2:`));
let num3 = Number(window.prompt(`Enter num3:`));
if (num1 == num2 && num2 == num3) {
    console.log(`All are equal.`);
} else if (num1 > num2 && num1 > num3) {
    console.log(`${num1} is the greatest.`);
    if (num2 > num3 && num2 != num3) {
        console.log(`${num3} is the smallest.`);
    } else if (num2 < num3) {
        console.log(`${num2} is the smallest.`);
    } else {
        console.log(`The other two numbers are equal.`);
    }
} else if (num2 > num1 && num2 > num3) {
    console.log(`${num2} is the greatest.`);
    if (num1 > num3 && num1 != num3) {
        console.log(`${num3} is the smallest.`);
    } else if (num1 < num3) {
        console.log(`${num1} is the smallest.`);
    } else {
        console.log(`The other two numbers are equal.`);
    }
} else {
    console.log(`${num3} is the greatest.`);
    if (num1 > num2 && num1 != num2) {
        console.log(`${num2} is the smallest.`);
    } else if (num1 < num2) {
        console.log(`${num1} is the smallest.`);
    } else {
        console.log(`The other two numbers are equal.`);
    }
}
*/

// 2. Take temperature input. Display weather advice: below 0 → “Freezing”, 0–15 → “Cold”, 16–25 → “Pleasant”, 26–35 → “Warm”, above 35 → “Very Hot”.
/*
let temperature= Number(window.prompt(`Enter current temperature:`));
switch (true) {
    case temperature < 0:
        console.log(`Freezing.`);
        break;
    case temperature <= 15:
        console.log(`Cold.`);
        break;
    case temperature <= 25:
        console.log(`Pleasant.`);
        break;
    case temperature <= 35:
        console.log(`Warm.`);
        break;
    case temperature > 35:
        console.log(`Very Hot.`);
        break;
    default:
        console.log(`${temperature} is not a temperature.`);
}
*/

// 3. Take: movie ticket price, user's age. Apply rules: children get discount, seniors get discount, others pay full price. Display final ticket price.
/*
let ticketPrice= Number(window.prompt(`Enter the Movie's Ticket Price:`));
let age= Number(window.prompt(`Enter your age:`));
let discount= age<18? 10 : age<=40? 10: 0;
let finalPrice= ticketPrice - (discount/100)*ticketPrice;
console.log(`Final Price of the Ticket is: ${finalPrice}`);
*/

// 4./7. Take: username, password, age. Allow login ONLY IF: username matches, password matches, age is 18 or above.
// doesn't this question depend entirely on backend system like node.js, idk? cuz we are going to take data from sign in, store it in database, use node.js to match the username and password from the database to the data entered at the time of log in. idk how to do that yet. so, annyways:
/*
const actualUsername = `admin`;
const actualPassword = `MZl@pq83`;
let myUsername = document.getElementById("myUsername");
let myPassword = document.getElementById("myPassword");
let myAge = document.getElementById("myAge");
let myButton = document.getElementById("myButton");
let givenUsername;
let givenPassword;
let givenAge;

myButton.onclick = function (event) {
    event.preventDefault();
    givenUsername = myUsername.value;
    givenPassword = myPassword.value;
    givenAge = myAge.value;
    if (givenAge >= 18 && givenPassword == actualPassword && givenUsername == actualUsername) {
        console.log(`You can Log In!`);
    }
    else {
        console.log(`Incorrect data. You can't log in.`)
    } 
}
*/

// 5./18. Create a mini calculator using: two number inputs, operator input, using switch. Handle: invalid operators, division by zero.
/*
let num1= Number(window.prompt(`Enter num1:`));
let num2= Number(window.prompt(`Enter num2:`));
let operator= window.prompt(`Enter your Operator: + or - or * or /`);
let result;
switch (operator){
    case `+`:
        console.log(num1+num2);
        break;
    case `-`:
        console.log(num1-num2);
        break;
    case `*`:
        console.log(num1*num2);
        break;
    case `/`:
        switch (num2){
            case 0:
                console.log(`No division by 0, you moron.`);
                break;
            default:
            console.log(num1/num2);
        }
        break;
    default:
        console.log(`Type correct operator, you moron.`);
}
*/

// 6. Take a number. Check whether it is: divisible by 3, divisible by 5, divisible by both, divisible by neither.
/*
let num = Number(window.prompt(`Enter a number:`));
switch (true){
    case num%3 == 0 && num%5 == 0:
        console.log(`It's divisible by both 3 and 5.`);
        break;
    case num%3 == 0:
        console.log(`It's divisible by 3.`);
        break;
    case num%5 == 0:
        console.log(`It's divisible by 5.`);
        break;
    default:
        console.log(`It's divisible by neither.`);
}
*/

// 8. Take two numbers. Display: larger number, or equal message.
/*
let num1= Number(window.prompt(`Enter num1:`));
let num2= Number(window.prompt(`Enter num2:`));
num1>num2? console.log(`${num1} is greater.`) : num1==num2? console.log(`They are equal.`) : console.log(`${num2} is greater.`);
*/

// 9. Take a year. Check whether it is: leap year, not leap year.
/*
let year= Number(window.prompt(`ENter a year`));
year%4==0? console.log(`It's a leap year.`) : console.log(`It's not a leap year.`);
*/

// 10. Take a traffic light color. Display action: red → stop, yellow → wait, green → go (using switch).
/*
let trafficColor= window.prompt(`Enter the traffic light color: red or yellow or green`);
switch (trafficColor.toUpperCase()){
    case `RED`:
        console.log(`Stop.`);
        break;
    case `YELLOW`:
        console.log(`Wait.`);
        break;
    case `GREEN`:
        console.log(`Go.`);
        break;
    default:
        console.log(`That's not a traffic light color, you moron.`);
}
*/

// 11./14. Take a number. Use ternary to display: “Positive", “Not Positive”.
/*
let num= Number(window.prompt(`Enter a number:`));
num>0? console.log(`${num} is positive.`) : num==0? console.log(`It's zero.`) : console.log(`${num} is negative.`);
*/

// 12. Take age input. Use ternary: eligible to vote, not eligible.
/*
let age= Number(window.prompt(`Enter your age:`));
age>=18? console.log(`You are eligible to vote!`) : console.log(`You are NOT eligible to vote!`);
*/

// 13. Take a password. Use ternary: strong, weak. based on length.
/*
let password= Number(window.prompt(`Enter the password:`));
password.length>=8? console.log(`Strong.`) : console.log(`Weak.`);
*/

// 15. Take total purchase amount. Use ternary: discount applies, no discount.
/*
let purchaseAmount= Number(window.prompt(`Enter the total purchase amount:`));
purchaseAmount>=50? console.log(`10% discount applies.`) : console.log(`Discount is not applied.`);
*/

// 16. Take a day number (1–7). Display weekday name.
/*
let day= Number(window.prompt(`Enter the day: 1-7`));
switch (day){
    case 1:
        console.log(`It is Monday!`);
        break;
    case 2:
        console.log(`It is Tuesday!`);
        break;
    case 3:
        console.log(`It is Wednesday!`);
        break;
    case 4:
        console.log(`It is Thursday!`);
        break;
    case 5:
        console.log(`It is Friday!`);
        break;
    default:
        console.log(`It is Weekend!`);
}
*/

// 17. Take a month number. Display month name.
/*
let monthNumber= Number(window.prompt(`Enter the month number: 1-12`));
switch (monthNumber){
    case 1:
        console.log(`It is January.`);
        break;
    case 2:
        console.log(`It is February.`);
        break;
    case 3:
        console.log(`It is March.`);
        break;
    case 4:
        console.log(`It is April.`);
        break;
    case 5:
        console.log(`It is May.`);
        break;
    case 6:
        console.log(`It is June.`);
        break;
    case 7:
        console.log(`It is July.`);
        break;
    case 8:
        console.log(`It is August.`);
        break;
    case 9:
        console.log(`It is September.`);
        break;
    case 10:
        console.log(`It is October.`);
        break;
    case 11:
        console.log(`It is November.`);
        break;
    case 12:
        console.log(`It is December.`);
        break;
    default:
        console.log(`That's not a month number. Suck my dick, you moron.`)
}
*/

// 19. Take favorite fruit input. Display different messages for: apple, mango, banana, default case.
/*
let favoriteFruit= window.prompt(`Enter your favorite Fruit: `);
switch (favoriteFruit.toUpperCase()){
    case `APPLE`:
        console.log(`Apple is indeed a nice pick, my friend. Doctors always recommend to eat, suck, and lick it daily.`);
        break;
    case `MANGO`:
        console.log(`Mango is one juicy fruit. Girls often show their licking skills to men with the help of mango.`);
        break;
    case `BANANA`:
        console.log(`Good Job picking Banana. Have a free long, thick and juicy thing inside you, it'll impregnate you goo, trust.`);
        break;
    default:
        console.log(`That's not in the listed fruit, brother.`);
}
*/

// 20. Take grade letter: A, B, C, D, F. Display corresponding message.
/*
let grade= window.prompt(`Enter your grade (A, B, C, D, F): `).toUpperCase();
switch (grade) {
    case `A`:
        console.log(`Excellent!`);
        break;
    case `B`:
        console.log(`Good job!`);
        break;
    case `C`:
        console.log(`Average.`);
        break;
    case `D`:
        console.log(`Below average.`);
        break;
    case `F`:
        console.log(`Failed.`);
        break;
    default:
        console.log(`Invalid grade. Please enter A, B, C, D, or F.`);
}
*/

// 21. Generate a random number between 1–10. Take user guess. Display: correct, incorrect.
// 22. Extend previous: Display: “Too high”, “Too low”, “Correct”.
// 23. Add attempt counter. Display how many attempts user used.
// 24. Limit attempts to a fixed number.
// 25. After limit: game over.
/*
const min = 1, max = 10;
const forRandomNum = document.getElementById("forRandomNum");
const myNumber = document.getElementById("myNumber");
const myButton = document.getElementById("myButton");
const myText = document.getElementById("myText");
let randomNumber;
let userNumber;
let counter = 0;
let isAllowed = false;

forRandomNum.onclick = function () {
    counter = 0;
    randomNumber = Math.floor(Math.random() * (max - min) + 1) + min;
    myText.textContent = `A random number between ${min} and ${max} has been generated. Start guessing!`;
    isAllowed = true;
}

myButton.onclick = function () {
    if (!isAllowed) {
        myText.textContent = `Please generate a random number first.`;
        return;
    } else if (counter > 2) {
        myText.textContent = `Game Over. You have used all your attempts. The correct number was ${randomNumber}. Generate a new number to play again.`;
        isAllowed = false;
        return;
    } else {
        userNumber = myNumber.value;
        counter++;
        if (userNumber > randomNumber) {
            myText.textContent = `Too High. You have ${4 - counter} more attempts.`;
        } else if (userNumber < randomNumber) {
            myText.textContent = `Too Low. You have ${4 - counter} more attempts.`;
        } else {
            myText.textContent = `Correct! You guessed it in ${counter} attempt. Generate a new number to play again.`;
            isAllowed = false;
            return;
        }
    }
}
*/
