// alert("Hello, world!");
// document.body.style.background = "lightblue";
// const username = "Ankit";
// console.log(username);
// let name = "Ankit";
// let age = 17;
// console.log(7 + 10);
// console.log("7" + 10);
// let isLoggedIn = true;
// console.log(age > 18);

// let age = 22;
// let firstName = "Ankit";
// console.log(`I'm ${age} years old.`);
// console.log(`In 5 years, I'll be ${age + 5} years old.`);
// console.log(`My first name is ${firstName}.`);
// console.log(typeof age);
// console.log(typeof firstName);

// let fullName = "Ankit Kumar Sah";
// let age= 17;
// let isStudent= true;
// document.getElementById("p1").textContent = fullName;
// document.getElementById("p1").style.color="blue";
// document.getElementById("p1").style.fontSize="30px";
// document.getElementById("p2").textContent = age;
// document.getElementById("p3").textContent = isStudent;

// let count = 1;
// count = count + 1;
// count = count - 1;
// count = count * 1;
// count = count / 1;
// console.log(count);

// let username= prompt("Enter your name:");
// console.log(username);

// document.getElementById("myButton").onclick = function(){
//     let username= document.getElementById("myUsername").value;
//     let age= document.getElementById("myAge").value;
//     document.getElementById("myH1").textContent= `Hello ${username}!`;
//     alert(`Hello ${username}!`);
//     alert(`I see you are ${age} years old.`);
//     console.log(username, typeof username);
//     console.log(age, typeof age);
// }

/* whatever input we take, it's always going to be in the form of a string.
so we must always use type conversion if we want to perform calculaions. 
let x= "pizza";
let y= "pizza";
let z= "pizza";
x= Number(x);
y= String(y);
z= Boolean(z);
console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z); */

//nextup is const which we already know about. It is used to declare variables that cannot be reassigned.
//next is Math object which provides various mathematical functions and constants. For example, Math.PI gives the value of pi, and Math.sqrt(16) gives the square root of 16. We can also use Math.random() to generate a random number between 0 and 1.
/*
console.log(Math.PI);
console.log(Math.E);

console.log(Math.round(-4.7653));
console.log(Math.round(-4.321));
console.log(Math.round(4.7653));
console.log(Math.round(4.321));

console.log(Math.floor(-4.7653));
console.log(Math.floor(-4.321));
console.log(Math.floor(4.7653));
console.log(Math.floor(4.321));

console.log(Math.ceil(-4.7653));
console.log(Math.ceil(-4.321));
console.log(Math.ceil(4.7653));
console.log(Math.ceil(4.321));

console.log(Math.trunc(-4.7653));
console.log(Math.trunc(-4.321));
console.log(Math.trunc(4.7653));
console.log(Math.trunc(4.321));

console.log(Math.pow(2, 3));
console.log(Math.sqrt(16));

console.log(Math.log(10));
console.log(Math.sin(45));
console.log(Math.cos(45));
console.log(Math.tan(45));

console.log(Math.abs(-5.55));
console.log(Math.abs(5.55));

console.log(Math.sign(-5.55));
console.log(Math.sign(5.55));
console.log(Math.sign(0));

console.log(Math.max(5, 10, 15, 20)); //we can do this n times
console.log(Math.min(5, 10, 15, 20)); //we can do this n times

console.log(Math.random()); //number between 0 and 1
console.log(Math.random() * 100); //number between 0 and 100
console.log(Math.floor(Math.random() * 100)); //integer between 0 and 99
console.log(Math.floor(Math.random() * 100) + 1); //integer between 1 and 100
console.log(Math.floor(Math.random() * (100 - 50)) + 50); //integer between 50 and 100
console.log(Math.floor(Math.random() * (100 - 50) + 1) + 50); //integer between 51 and 100
*/

/*
let age=25;
console.log(age>=18? `You are an adult.` : `You are a minor.`);
let purchaseAmount=150;
let discountAmount= purchaseAmount>100?10:0;
console.log(`Final price: ${purchaseAmount-discountAmount}`);
*/
/*
console.log((`Hello World!`).charAt(4));
console.log((`Hello World!`).charAt(12)); //out of bounds, returns empty string

console.log((`Hello World!`).indexOf("o")); //returns the index of the first occurrence of "o"
console.log((`Hello World!`).lastIndexOf(`o`));
console.log((`Hello World!`).length);
console.log((`     Hello World!`).trim());
let string = `Hello World!`;
console.log(string.toUpperCase());
console.log(string.toLowerCase());
console.log(string.repeat(3));
console.log(string.startsWith(`H`));
console.log(string.startsWith(` `));
console.log(string.endsWith(`!`));
console.log(string.includes(`!`)); //if there is ! in the string, true.
console.log(string.replaceAll(`!`, ``)); //replaces ! with no character.
console.log(string.replaceAll(/[^a-zA-Z0-9]/g , ``)); //keeps a-z, A-Z, 0-9 only
console.log(string.replaceAll(/[a-zA-Z0-9]/g , ``)); //removes a-z, A-Z, 0-9, keeps symbols only
console.log(string.replaceAll(/[^A,E,I,O,U]/)); //keeps these letters only.
console.log(string.replaceAll(/[A,E,I,O,U]/)); //remove these letters.
console.log(string.replaceAll(/Hello/g , `Hi`)); //replaces hello with Hi.
console.log(string.padStart(15, 0)); //makes the string 15 character-ed, with specified character.
console.log(string.padEnd(15, 0)); //makes the string 15 character-ed, with specified character.
console.log(string.slice(0 , 5)); //index from o for first. index from 1 for second.
console.log(string.slice(6 , 12)); 
console.log(string.slice(6)); 
console.log(string.slice(0,1)); //first char
console.log(string.slice(-1)); //last char
console.log(string.slice(-6));
let username= "Ankit Kumar Sah";
console.log(username.split(" "));
console.log(username.split(" ")[0]); //first name
console.log(username.split(" ")[1]); //middle name
console.log(username.split(" ")[2]); //last name
console.log(username.slice(0 , username.indexOf(` `))); //first name
console.log(username.slice(username.indexOf(' ') + 1, username.lastIndexOf(` `))); //middle name
console.log(username.slice(username.lastIndexOf(` `)+1)); //last name
*/