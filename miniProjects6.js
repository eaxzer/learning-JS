// ? 1. Create a function that accepts a username and returns it after: trimming spaces, converting to lowercase, replacing every space with _.
/* const username = window.prompt(`Enter your username: `);
console.log(formatUsername(username));

function formatUsername(username) {
    return username.trim().toLowerCase().replaceAll(` `, `_`);
} */

// ? 2. Create maskPIN(pin). Input: 123456. Output: ****56. Only the last two digits remain visible.
/* const pin = Number(window.prompt(`Enter your PIN: `));
console.log(maskPIN(pin));

function maskPIN(pin) {
    let strPin = String(pin);
    return strPin.slice(0, strPin.length - 2).replaceAll(/\d/g, `*`) + strPin.slice(-2); // * saw a shortcut: return `*`.repeat(strPin.length -2) + strPin.slice(-2);
} */

// ? 3. Create: formatMoney(amount). Example: 500 -> Rs. 500.00. Always display exactly two decimals.
/* const amount = Number(window.prompt(`Enter the amount of Money: `));
console.log(formatMoney(amount));

function formatMoney(amount) {
    return `Rs. ${amount.toFixed(2)}.`;
} */

// ? 4. Create: isValidEmail(email). Return true only if: contains exactly one `@`. contains at least one `.`, length ≥ 6.
/* const email = window.prompt(`Enter your email: `);
console.log(isValidEmail(email));

function isValidEmail(email) {
    if (!email) return false;
    return (email.split(`@`).length - 1 === 1 && email.includes(`.`) && email.length >= 6) ? true : false;
} */

// ? 5. Create: greet(name, hour). Return: Good Morning, Good Afternoon, Good Evening. depending on the hour.
/* const name = window.prompt(`Enter your name: `);
const hour = Number(window.prompt(`What hour is it now?`));
console.log(greet(name, hour));

function greet(name, hour) {
    if (hour >= 4 && hour <= 12) {
        return `Good Morning, ${name}!`;
    } else if (hour >= 12 && hour <= 18) {
        return `Good Afternoon, ${name}!`;
    } else if (hour >= 18 && hour <= 20) {
        return `Good Evening, ${name}!`;
    } else {
        return `Good Night, ${name}!`;
    }
} */

// ? 6. Create a function that rolls two dice. Return which die won. If equal: Draw.
/* console.log(diceCompetition());

function diceCompetition() {
  const randomNumOne = Math.floor(Math.random() * 6) + 1;
  const randomNumTwo = Math.floor(Math.random() * 6) + 1;
  return randomNumOne == randomNumTwo ? `Draw.` : randomNumOne > randomNumTwo ? `Dice 1 won!` : `Dice 2 won!`;
} */

// ? 7. Create a function that flips a coin 100 times. Return: heads count, tails count.
/* console.log(coinFlipEvaluation());

function coinFlipEvaluation() {
    let headCounter = 0, tailCounter = 0, randomNum;
    for (let i = 0; i < 100; i++) {
        randomNum = Math.floor(Math.random() * 2) + 1;
        randomNum == 1 ? headCounter++ : tailCounter++;
    }
    return `Head Counts: ${headCounter}\nTail Counts: ${tailCounter}`;
} */

// ? 8. Create: clean(sentence). Replace every occurrence of: bad with *** without using replaceAll().
/* const sentence = window.prompt(`Enter a sentence: `);
console.log(clean(sentence));

function clean(sentence){
    let sentenceComponents = sentence.split(` `);
    for (let i=0; i<sentenceComponents.length; i++){
        if (sentenceComponents[i]===`bad`) sentenceComponents[i] = `***`;
    }
    return sentenceComponents.join(` `); // * saw a shortcut return sentence.split(`bad`).join(`***`);
} */

// ? 9. Input: javascript. Return: JaVaScRiPt.
/* const string = window.prompt(`Enter a string: `);
console.log(alternatingCase(string));

function alternatingCase(string) {
    let alternatedString = ``;
    for (let i = 0; i < string.length; i += 2) alternatedString += string.charAt(i).toUpperCase() + string.charAt(i + 1).toLowerCase();
    return alternatedString;
} */

// ? 10. Create: removeChar(sentence, target). Example: banana. a -> bnn.
/* const sentence = window.prompt(`Enter a sentence: `);
const target = window.prompt(`Enter the character you want to remove: `);
console.log(removeChar(sentence,target));

function removeChar(sentence,target){
    return sentence.split(target).join(``);
} */

// ? 11. Create: encode(text). Every letter becomes the next one. Example: abc -> bcd.
/* const text = window.prompt(`Enter a text: `);
console.log(encode(text));

function encode(text) {
  let string = ``;
  for (let i = 0; i < text.length; i++) {
    let textChar = text.charAt(i);
    if (textChar == `z` || textChar == `Z`) {
      string += String.fromCharCode(text.charCodeAt(i) - 25);
    } else if ((textChar >= `a` && textChar < `z`) || (textChar >= `A` && textChar < `Z`)) {
      string += String.fromCharCode(text.charCodeAt(i) + 1);
    } else {
      string += textChar;
    }
  }
  return string;
} */

// ? 12. Shift every character by 2. abc -> cde.
/* const sentence = window.prompt(`Enter a sentence: `);
console.log(encode(sentence));

function encode(sentence) {
  let string = ``;
  for (let i = 0; i < sentence.length; i++) string += String.fromCharCode(sentence.charCodeAt(i) + 2);
  return string;
} */

// ? 13. Create a function that prints(vertically): 1 12 123 1234 12345
/* console.log(numberPyramid());

function numberPyramid() {
  let result = ``;
  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
      result += j;
    }
    result += `\n`;
  }
  return result;
} */

// ? 14. 12345 1234 123 12 1 (vertically)
/* console.log(reverseNumberPyramid());

function reverseNumberPyramid() {
  let result = ``;
  for (let i = 5; i >= 1; i--) {
    for (let j = 1; j <= i; j++) result += j;
    result += `\n`;
  }
  return result;
} */

// ? 15. Multiplication Square: Input: 5. Output: 1 2 3 4 5     2 4 6 8 10     3 6 9 12 15     ...
/* const number = Number(window.prompt(`Enter a num: `));
console.log(multiplicationSquare(number));

function multiplicationSquare(num) {
  let result = ``;
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num; j++) {
        result += `${i * j} `;
    }
    result = result.trim();
    result += `\n`;
  }
  return result;
} */

// ? 16. Create: isPrime(number). Return true or false.
/* const num = Number(window.prompt(`Enter a number: `));
console.log(isPrime(num));

function isPrime(number) {
  let isAllowed = false;
  if (num < 2) {
    isAllowed = true;
  } else {
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        isAllowed = true;
        break;
      }
    }
  }
  return !isAllowed ? true : false;
} */

// ? 17. Count Prime Numbers: Given n, count how many primes exist between 1 and n.
/* const num = Number(window.prompt(`Enter a number: `));
console.log(primeNumbers(num));

function primeNumbers(num) {
  let counter = 0;
  for (let i = 1; i <= num; i++) {
    let isAllowed = false;
    if (i < 2) {
      isAllowed = true;
    } else {
      for (let j = 2; j < i; j++) {
        if (i % j == 0) {
          isAllowed = true;
          break;
        }
      }
    }
    if (!isAllowed) counter++;
  }
  return `Total Prime Numbers: ${counter}`;
} */

// ? 18. A number is lucky if the sum of its digits equals 7. Create: isLucky(number)
/* const number = Number(window.prompt(`Enter a number: `));
console.log(isLucky(number));

function isLucky(number) {
  let remainder,
    sum = 0;
  while (number != 0) {
    remainder = number % 10;
    sum += remainder;
    number = Math.floor(number / 10);
  }
  return sum == 7 ? `That's a Lucky Number!` : `That's not a lucky number.`;
} */

// ? 19. Create: digitSum(number). Example: 4832 -> 17. (Same logic as above. last statement replaced by return sum;)

// ? 20. Digit Product: 4832 -> 192.
/* const num = Number(window.prompt(`Enter a number: `));
console.log(digitProduct(num));

function digitProduct(num) {
  let remainder,
    product = 1;
  while (num != 0) {
    remainder = num % 10;
    product *= remainder;
    num = Math.floor(num / 10);
  }
  return `Product of the digits: ${product}`;
} */

// ? 21. Build a menu-driven calculator. Keep asking: 1 Add, 2 Subtract, 3 Multiply, 4 Divide, 5 Exit. Everything must be split into functions.
/* let isAllowed = false,
  num,
  numRest;
num = Number(window.prompt(`Enter a number: `));
while (!isAllowed) {
  const choice = Number(window.prompt(`Choose an operation (1-5):\n1: Addition\n2: Subtraction\n3: Multiplication\n4: Division\n5: Exit the operation`));
  switch (choice) {
    case 1:
      console.log(addition());
      break;
    case 2:
      console.log(subtraction());
      break;
    case 3:
      console.log(multiplication());
      break;
    case 4:
      console.log(division());
      break;
    case 5:
      exitOperation();
      break;
    default:
      window.alert(`Input numbers from 1 to 5, dude.`);
  }
}
function addition() {
  numRest = Number(window.prompt(`Enter another number: `));
  return num += numRest;
}
function subtraction() {
  numRest = Number(window.prompt(`Enter another number: `));
  return num -= numRest;
}
function multiplication() {
  numRest = Number(window.prompt(`Enter another number: `));
  return num *= numRest;
}
function division() {
  numRest = Number(window.prompt(`Enter another number: `));
  return num /= numRest;
}
function exitOperation() {
  isAllowed = true;
  window.alert(`Result: ${num}`);
} */

// ? 22. Create a password generator. User chooses: length. Generate a random password using letters and digits only. Use helper functions.
/* const length = Number(window.prompt(`Enter the length of the password: `));
console.log(passwordGenerator(length));

function passwordGenerator(length) {
  let password = ``;
  for (let i = 1; i <= length; i++) {
    let letterOrDigit = Math.floor(Math.random() * 2) + 1;
    password += letterOrDigit == 1 ? randomLetters() : randomDigits();
  }
  return password;
}

function randomLetters() {
  let upOrLow = Math.floor(Math.random() * 2) + 1;
  let letter = upOrLow == 1 ? String.fromCharCode(Math.floor(Math.random() * 26) + 65) : String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  return letter;
}

function randomDigits() {
  let digit = String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  return digit;
} */

//Below was my 1st attempt until i thought of shuffling.
/* const length = Number(window.prompt(`Enter the length of the password: `));
console.log(passwordGenerator(length));

function passwordGenerator(length) {
  const letterLength = Math.floor(Math.random() * (length - Math.floor(length / 3) + 1)) + Math.floor(length / 3);
  const digitLength = length - letterLength;
  return randomLetters(letterLength) + randomDigits(digitLength);
}

function randomLetters(count) {
  let letters = ``;
  for (let i = 1; i <= count; i++) {
    let upOrLow = Math.floor(Math.random() * 2) + 1;
    letters += upOrLow == 1 ? String.fromCharCode(Math.floor(Math.random() * 26) + 65) : String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
  return letters;
}

function randomDigits(count) {
  let digits = ``;
  for (let i = 1; i <= count; i++) digits += String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  return digits;
} */

// ? 23. Build a tiny banking simulator. Functions: deposit, withdraw, check balance. Use one global balance variable. Everything else should stay local.
/* let amount = 0;

while (true) {
  const choice = Number(window.prompt(`Welcome to Banking Similator! What would you like to do? (Type 1-4)\n1: Deposit Money\n2: Withdraw Money\n3: Check Balance\n4: Exit Banking Simulator`));
  if (choice == 4) break;
  switch (choice) {
    case 1:
      deposit();
      break;
    case 2:
      withdraw();
      break;
    case 3:
      checkBalance();
      break;
    default:
      window.alert(`Input numbers from 1 to 4.`);
  }
}

function deposit() {
  let depositAmount = Number(window.prompt(`Enter how much you want to deposit: `));
  if (!depositAmount || depositAmount <= 0) return window.alert(`Invalid Amount! Enter positive number.`);
  amount += depositAmount;
}
function withdraw() {
  let withdrawAmount = Number(window.prompt(`Enter how much you want to withdraw: `));
  if (!withdrawAmount || withdrawAmount <= 0) return window.alert(`Invalid Amount! Enter positive number.`);
  if (withdrawAmount > amount) return window.alert(`Transaction denied! You only have Rs. ${amount}.`);
  amount -= withdrawAmount;
}
function checkBalance() {
  window.alert(`You have Rs. ${amount} right now.`);
} */

// ? 24. Create a statistics engine. User enters 10 numbers. Functions should calculate: largest, smallest, average, even count, odd count.
/* let i = 1,
  largeNum = -Infinity,
  smallNum = Infinity,
  sum = 0,
  evenCounter = 0,
  oddCounter = 0;

while (i <= 10) {
  let input = window.prompt(`Enter Number ${i}`);
  let num = Number(input);
  if (input === null || input.trim() === `` || isNaN(num)) {
    window.alert(`Input a number dude.`);
  } else {
    i++;
    largestNum(num);
    smallestNum(num);
    averageNum(num);
    evenCount(num);
    oddCount(num);
  }
}

function largestNum(num) {
  if (largeNum < num) largeNum = num;
}
function smallestNum(num) {
  if (smallNum > num) smallNum = num;
}
function averageNum(num) {
  sum += num;
}
function evenCount(num) {
  if (num % 2 == 0) evenCounter++;
}
function oddCount(num) {
  if (num % 2 != 0) oddCounter++;
}

window.alert(`---- STATISTICS ENGINE ----\nLargest Number: ${largeNum}\nSmallest Number: ${smallNum}\nAverage: ${(sum / 10).toFixed(2)}\nEven Count: ${evenCounter}\nOdd Count: ${oddCounter}`); */

// ? 25. Build a complete console quiz system. Requirements: 5 hardcoded questions. one function per question, one function to calculate score, one function to print result, final grade: A, B, C, D, F. No arrays allowed.
/* console.log(`Welcome to the Quiz Competition!\nYou will be asked to answer 5 questions.\n \n`);
let input,
  inputFirst,
  inputSecond,
  inputThird,
  inputFourth,
  inputFifth,
  score = 0;

quizOK();

function quizOK() {
  input = window.prompt(`Enter OK to start the Quiz: `);
  while (input === null || input.trim().toUpperCase() !== `OK`) {
    input = window.prompt(`ENTER OK DUDE: `);
  }
  firstQuestion();
}

function firstQuestion() {
  console.log(`1st Question:\n\nWhat is the only mammal capable of true, sustained flight? \nA) Flying Squirrel \nB) Fruit Bat \nC) Lemur \nD) Sugar Glider \n[You are required to type A/B/C/D]\n\n`);
  setTimeout(function () {
    inputFirst = askAnswer();
    secondQuestion();
  }, 5000);
}

function secondQuestion() {
  console.log(`2nd Question:\n\nWhich element has the atomic number 79? \nA) Silver \nB) Platinum \nC) Copper \nD) Gold \n[You are required to type A/B/C/D]\n\n`);
  setTimeout(function () {
    inputSecond = askAnswer();
    thirdQuestion();
  }, 5000);
}

function thirdQuestion() {
  console.log(`3rd Question:\n\nIn what year were the first modern Olympic Games held? \nA) 1896 \nB) 1904 \nC) 1920 \nD) 1924 \n[You are required to type A/B/C/D]\n\n`);
  setTimeout(function () {
    inputThird = askAnswer();
    fourthQuestion();
  }, 5000);
}

function fourthQuestion() {
  console.log(`4th Question:\n\nWhat is the study of fungi called? \nA) Mycology \nB) Botany \nC) Entomology \nD) Ichthyology \n[You are required to type A/B/C/D]\n\n`);
  setTimeout(function () {
    inputFourth = askAnswer();
    fifthQuestion();
  }, 5000);
}

function fifthQuestion() {
  console.log(`5th Question:\n\nWhich country is home to the ancient city of Petra? \nA) Egypt \nB) Jordan \nC) Greece \nD) Turkey \n[You are required to type A/B/C/D]\n\n`);
  setTimeout(function () {
    inputFifth = askAnswer();
    scoreCounter();
    console.log(result());
  }, 5000);
}

function askAnswer() {
  input = window.prompt(`Enter your answer: `);
  while (input === null || ![`A`,`B`,`C`,`D`].includes(input.trim().toUpperCase())) {
    input = window.prompt(`Type A/B/C/D: `);
  }
  return input.toUpperCase();
}

function scoreCounter() {
  if (inputFirst === `B`) score++;
  if (inputSecond === `D`) score++;
  if (inputThird === `A`) score++;
  if (inputFourth === `A`) score++;
  if (inputFifth === `B`) score++;
}

function result() {
  if (score === 5) return `You scored ${score} points. Your grade: A`;
  if (score === 4) return `You scored ${score} points. Your grade: B`;
  if (score === 3) return `You scored ${score} points. Your grade: C`;
  if (score === 2) return `You scored ${score} points. Your grade: D`;
  if (score <= 1) return `You scored ${score} points. Your grade: F`;
} */