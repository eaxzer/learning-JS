// 1. Count from 1 to 100 using a for loop.
/* for (let i=1; i<=100; i++){
    console.log(i);
} */

// 2. Count backwards from 50 to 1 using a while loop.
/* let i=50;
while (i>0){
    console.log(i);
    i--;
} */

// 3. Print all even numbers between 1 and 100.
/* for (let i= 2; i<=100; i+=2){
    console.log(i);
} */

// 4. Print all odd numbers between 1 and 75.
/* for(let i=1;i<=75;i+=2){
    console.log(i);
} */

// 5. Ask the user for a number and print its multiplication table up to 10.
/* let num= Number(window.prompt(`Enter a Number:`));
for (let i=1; i<=10; i++){
    console.log(`${num} * ${i} = ${num*i}`);
} */

// 6. Ask the user for a positive integer and calculate the sum from 1 to that number.
/* let num = Number(window.prompt(`Enter a positive number: `));
let sum = 0;
if (num >= 0) {
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
} else {
    window.alert(`That's not a positive number.`);
}
console.log(sum); */

// 7. Ask the user for a number and calculate its factorial.
/* let num = Number(window.prompt(`Enter a number:`));
let factorial = 1;
if (num >= 0) {
    for (let i = 1; i <= num; i++) {
        factorial = factorial * i;
    }
} else {
    factorial= undefined;
}
console.log(`Factorial: ${factorial}`); */

// 8. Print every multiple of 7 from 7 to 700.
/* for (let i = 7; i <= 700; i+=7) console.log(i); */

// 9. Count how many numbers between 1 and 100 are divisible by both 3 and 5.
/* let counter=0;
for (let i=1; i<=100; i++) if (i%3==0 && i%5==0) counter++;
console.log(`Total number of numbers divisible by both 3 and 5: ${counter}`); */

// 10. Ask the user for a password repeatedly until they enter the correct one. Use a while loop.
/* const actualPassword = `MZl@pq83`;
let isMatched = false;
let givenPassword;
while (!isMatched) {
    givenPassword = window.prompt(`Enter your password: `);
    if (actualPassword === givenPassword) {
        isMatched = true;
        console.log(`Matched.`);
    } else{
        console.log(`Not Matched. Try Again.`);
        window.alert(`Not Matched. Try Again.`);
    }
} */

// 11. Ask the user for numbers continuously until they enter 0. Display the total sum afterwards.
/* let num, sum = 0;
isMatched = false;
while (!isMatched) {
    num= Number(window.prompt(`Enter a number: `));
    num != 0 ? sum += num : isMatched = true;
}
console.log(`Sum of all the numbers you entered: ${sum}`); */

// 12. Ask the user for five numbers. Display: largest, smallest using loops.
/* let i = 1, largeNum, smallNum;
let num1 = Number(window.prompt(`Enter number:`)); // i saw a shortcut and i can just declare min=infinity and max=-infinity then check in for loop.
largeNum = num1;
smallNum = num1;
while (i < 5) {
    numRest = Number(window.prompt(`Enter number:`));
    if (largeNum < numRest) largeNum = numRest;
    if (smallNum > numRest) smallNum = numRest;
    i++;
}
console.log(`Largest Number: ${largeNum}\nSmallest Number: ${smallNum}`); */

// 13. Print the first 20 square numbers.
/* for (let i=1; i<=20; i++) console.log(i*i); */

// 14. Count how many vowels exist inside a string entered by the user. Do not use regex. Use loops.
/* const string = window.prompt(`Enter a string: `).toUpperCase();
let counter = 0;
for (let i=0; i<string.length; i++){
    if (string.charAt(i) == `A` || string.charAt(i) == `E` || string.charAt(i) == `I` || string.charAt(i) == `O` || string.charAt(i) == `U`) counter++;
}
console.log(`Total number of vowels: ${counter}`); */ //i saw i can just define helper strings like const vowelList = `aeiouAEIOU"; then check every char with includes() and for loop.

// 15. Count how many uppercase letters exist inside a sentence.
/* const sentence = window.prompt(`Enter a sentence: `);
let counter = 0;
for (let i=0; i<sentence.length; i++) if (/[A-Z]/.test(sentence.charAt(i))) counter++;
console.log(`Total number of Uppercase letters: ${counter}`); */

// 16. Reverse a string manually using a loop.
/* const string = window.prompt(`Enter a string: `);
let reverse = ``;
for (i=string.length - 1; i>=0; i--) reverse = reverse + string.charAt(i);
console.log(`Reverse of the string: ${reverse}`); */

// 17. Check whether a string is a palindrome.
/* const string = window.prompt(`Enter a string: `);
let reverse = ``;
for (i=string.length - 1; i>=0; i--) reverse = reverse + string.charAt(i);
reverse == string? console.log(`It is palindrone.`) : console.log(`It is not palindrone.`); */

// 18. Count how many times a specific character appears inside a sentence. //let it be a.
/* const sentence= window.prompt(`Enter a sentence: `);
let counter = 0;
const specificCharacter = `a`;
for (let i=0; i<sentence.length; i++) if (sentence.charAt(i)==specificCharacter) counter++;
console.log(`Number of times '${specificCharacter}' is repeated: ${counter}`); */

// 19. Ask the user for two strings. Check whether they are exactly equal using strict equality.
/* const stringOne = window.prompt(`Enter string 1: `);
const stringTwo = window.prompt(`Enter string 2: `);
stringOne === stringTwo ? console.log(`They are EXACTLY equal.`) : console.log(`They are NOT exactly equal.`); */

// 20. Ask the user for username and password. Only log in if: username matches, password matches, neither field is empty. Use logical operators.
/* const actualUsername = `theEaxzer`, actualPassword = `MZl@pq83`;
let givenUsername, givenPassword;
isAllowed = false;
while (!isAllowed){
    givenUsername = window.prompt(`Enter your Username: `);
    givenPassword = window.prompt(`Enter your Password: `);
    if (givenUsername === actualUsername && givenPassword === actualPassword) {
        window.alert(`Logged in.`);
        isAllowed = true;
    } else if (givenUsername == `` || givenUsername.trim() == `` || givenPassword == `` || givenPassword.trim() == ``) {
        window.alert(`Your credentials can't be empty.`);
    } else {
        window.alert(`Wrong inputs. Try again.`);
    }
} */

// 21. Generate a random number between 1 and 100. Keep asking until the player guesses correctly. At the end, display the number of attempts used.
/* const min = 1, max = 100;
let randomNum = Math.floor(Math.random() * (max - min) + 1) + min;
let givenNum, attempt = 0, isMatched = false;
window.alert(`A random Number is generated between ${min} and ${max}.`);
while (!isMatched) {
    attempt++;
    givenNum = Number(window.prompt(`Attempt: ${attempt}\nTry your guess:`));
    if (givenNum === randomNum) {
        window.alert(`Congratulations! You won. Attempts taken: ${attempt}`);
        isMatched = true;
    } else if (givenNum == `` || givenNum == null || String(givenNum).trim() == ``) {
        attempt--;
        window.alert(`Enter a number, you fool.`);
    } else if (givenNum > randomNum) {
        window.alert(`TOO HIGH. TRY AGAIN.`);
    } else if (givenNum < randomNum) {
        window.alert(`TOO LOW. TRY AGAIN.`);
    }
} */

// 22. Generate five random integers between 1 and 50. After generation, print: largest, smallest, average.
/* const min = 1, max = 50;
let i = 1, randomNum, largeNum = -Infinity, smallNum = Infinity, sum = 0;
while (i <= 5) {
    randomNum = Math.floor(Math.random() * (max - min) + 1) + min;
    console.log(randomNum);
    if (largeNum < randomNum) largeNum = randomNum;
    if (smallNum > randomNum) smallNum = randomNum;
    sum += randomNum;
    i++;
}
console.log(`Largest Number: ${largeNum}\nSmallest Number: ${smallNum}\nAverage: ${(sum/5).toFixed(2)}`); */

// 23. Ask the user for a sentence. Display: total vowels, total consonants, total digits, total spaces, total special characters using only loops and conditions.
/* const sentence = window.prompt(`Enter a sentence: `);
const vowelList = `aeiouAEIOU`;
let vowelCount=0, consonantCount=0, digitCount=0, spaceCount=0, specialCharacterCount=0;
for (let i=0; i<sentence.length; i++){
    const char = sentence.charAt(i);
    if (char==` `){
        spaceCount++;
    } else if (Number(char)>=0 && Number(char)<=9){
        digitCount++;
    }  else if ((char>=`a`&& char<=`z`) || (char>=`A`&& char<=`Z`)) {
        `aeiouAEIOU`.includes(char)? vowelCount++ : consonantCount++;
    } else {
        specialCharacterCount++;
    }
}
console.log(`Total vowels: ${vowelCount}\nTotal consonants: ${consonantCount}\nTotal digits: ${digitCount}\nTotal spaces: ${spaceCount}\nTotal special characters: ${specialCharacterCount}`); */

// 24. Create a mini PIN verification system. The user gets exactly 3 attempts. If they fail three times, display: Account Locked. If they succeed, display: Access Granted.
/* const PIN = Math.floor(Math.random()*(999999 - 100000)+1)+100000;
window.alert(`PIN has been generated. Check your emails and verify here. ${PIN}`);
let attempt=0, givenPIN, isMatched= false;
while (attempt<3){
    attempt++;
    givenPIN = Number(window.prompt(`Enter the PIN: `));
    if (givenPIN === PIN) {
        window.alert(`Access Granted.`);
        isMatched=true;
        break;
    } else {
        window.alert(`Try again. Remaining Attempts: ${3-attempt}`);
    }
}
if (!isMatched) window.alert(`Account Locked.`); */

// 25. Create a mini text analyzer that repeatedly asks the user for lines of text. Stop only when they enter: STOP. Then display: total lines entered (excluding STOP), total words, total characters, longest line entered using loops and the string methods you've learned so far.
/* let linesOfText, totalLines = 0, totalWords = 0, totalCharacters = 0, longLine = ``, isRunning = false;
while (!isRunning) {
    linesOfText = window.prompt(`Enter a line of text:\n(This will continue repeatedly until you type STOP)`);
    if (linesOfText != `STOP`) {
        totalLines++;
        totalWords += linesOfText.split(` `).length;
        totalCharacters += linesOfText.length;
        if (longLine.length < linesOfText.length) longLine = linesOfText;
    } else {
        isRunning=true;
    }
}
console.log(`Total Lines: ${totalLines}\nTotal Words: ${totalWords}\nTotal Characters: ${totalCharacters}\nLongest Line: ${longLine}`); */