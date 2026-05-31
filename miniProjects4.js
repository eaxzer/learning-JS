// 1. Take a full name input. Display: original name, uppercase version, lowercase version, total character count (excluding spaces).
/* const fullName = window.prompt(`Enter your full name:`);
console.log(`Original Name: ${fullName}`);
console.log(`Uppercase Version: ${fullName.toUpperCase()}`);
console.log(`Lowercase Version: ${fullName.toLowerCase()}`);
console.log(`Total no. of Characters: ${(fullName.replaceAll(` `,``)).length}`); */

// 2. Take a sentence input. Count: total vowels, total consonants.
/*const sentence = window.prompt(`Enter a sentence: `).toUpperCase();
const cleanSentence = sentence.replaceAll(/[^a-zA-Z0-9]/g , ``); //after search. this was not in the tutorial.
let vowelCounter = 0, consonantCounter = 0;
for (let i=0 ; i < cleanSentence.length ; i++) {
    if (cleanSentence.charAt(i)==`A` || cleanSentence.charAt(i)==`E` || cleanSentence.charAt(i)==`I` || cleanSentence.charAt(i)==`O` || cleanSentence.charAt(i)==`U`) {
        vowelCounter++;
        //searching how to remove all the symbols from string for consonant letters.
    } else {
        consonantCounter++; 
    }
}
console.log(`Total Vowel Characters: ${vowelCounter}`);
console.log(`Total Consonant Characters: ${consonantCounter}`); */

// 3. Take a word. Reverse the word manually. (No .reverse() tricks.) //actually, .reverse() wasn't taught in the tutorial.
/*const word = window.prompt(`Enter a word:`);
let reverseWord = ``;
for (i = word.length ; i >= 0 ; i--) {
    reverseWord = reverseWord + word.charAt(i);
}
console.log(`Reverse of the word: ${reverseWord}`); */

// 4. Take a sentence. Replace every occurrence of: bad with: good.
/*const sentence = window.prompt(`Enter a sentence:`);
console.log(sentence.replaceAll(/bad/g,`good`)); */

// 5. Take a sentence. Check whether it includes: “javascript”. Ignore uppercase/lowercase differences.
/* const sentence = window.prompt(`Enter a sentence:`);
console.log(sentence.includes(`javascript`)); */

// 6. Take an email address. Extract: username, domain name.
/* const email = window.prompt(`Enter your email:`);
console.log(`Username: ${email.slice(0,email.indexOf(`@`))}`);
console.log(`Domain: ${email.slice(email.indexOf(`@`)+1)}`); */

// 7. Take a filename. Extract: file name, extension.
/* const fileName = window.prompt(`Enter your file name:`);
console.log(`File Name: ${fileName.slice(0,fileName.indexOf(`.`))}`);
console.log(`Externsion: ${fileName.slice(fileName.indexOf(`.`)+1)}`); */

// 8. Take a phone number. Display ONLY the last 4 digits.
/* const phoneNumber = window.prompt(`Enter your phone number:`); //would it be possible to get the last 4 digits IF we take it in Number form?
console.log(phoneNumber.slice(-4)); */

// 9. Take a sentence. Display: first word, last word.
/* const sentence = window.prompt(`Enter a sentence:`).replaceAll(/[^a-zA-Z0-9 ]/g , ``);
console.log(sentence)
console.log(`First Word: ${sentence.slice(0,sentence.indexOf(` `))}`);
console.log(`Last Word: ${sentence.slice(sentence.lastIndexOf(` `) + 1)}`); */

// 10. Take a full name. Convert it into initials.
/* const fullName = window.prompt(`Enter a full name:`);
let initials=``;
let counter=0;
for (i=0 ; i<=fullName.length ; i++) {
    if (fullName.charAt(i)==` `){
        counter++;
    }
}
//words = fullName.split(` `).length; I got to know this after did this program, after i searched for a shortcut to find the no. of whitespaces.
words = counter + 1;
for (i=0 ; i < words ; i++){
    initials += (fullName.split(` `)[i]).charAt(0) + `.`;
}
console.log(initials); */

// 11. Take username input. Remove: extra spaces. convert to lowercase.
/* const username = window.prompt(`Enter your username:`).replaceAll(` `, ``);
console.log(username.toLowerCase()); */

// 12. Take a sentence. Capitalize ONLY the first letter.
/* const sentence = window.prompt(`Enter a sentence:`);
let chars = sentence.length;
let letters=``;
let isAllowed= false;
for (i=0;i<sentence.length;i++){
    if (sentence.charAt(i)==` `){
        letters+=sentence.charAt(i);
        isAllowed= true;
        continue;
    }
    if (i==0){
        letters+=sentence.charAt(i).toUpperCase();
        continue;
    }
    if (isAllowed){
        letters+=sentence.charAt(i).toUpperCase();
        isAllowed=false;
    } else {
        letters+=sentence.charAt(i);
    }
}
console.log(letters); */
//i struggled with this. realized i only need to capitalize the first letter of the sentence, not the first letter of every word. so, i could have just done: console.log(sentence.charAt(0).toUpperCase() + sentence.slice(1));

// 13. Take a sentence. Count how many times a specific character appears. (User chooses character.)
/* const sentence = window.prompt(`Enter a sentence:`).replaceAll(` `, ``).toUpperCase();
let counter=0;
for (let i=0; i<=sentence.length ; i++){
    if (sentence.charAt(i) == `E`){
        counter++;
    }
}
console.log(`Total no. of e: ${counter}`); */  //i saw a shortcut after this and realized i can just do this: console.log(sentence.split(`E`).length -1); also, there's another one function called match() and the regex method which i didn't know about.

// 14. Take a password. Check whether it contains: uppercase letter, lowercase letter, number.
/* const sentence = window.prompt(`Enter a sentence:`);
console.log(/[a-z]/.test(sentence) , /[A-Z]/.test(sentence) , /[0-9]/.test(sentence)); */

// 15. Take a sentence. Censor all vowels with: *
/* const sentence = window.prompt(`Enter a sentence:`);
console.log(sentence.replaceAll(/[A,E,I,O,U]|[a,e,i,o,u]/g , `*`)); */

// 16. Take a palindrome word. Check whether it reads same forward/backward.
/* const palindrome = window.prompt(`Enter a palindrome word:`);
palindrome == palindrome.split(``).reverse().join(``)? console.log(`True.`) : console.log(`False.`); */

// 17. Take a sentence. Find the longest word.
/* const sentence = window.prompt(`Enter a sentence:`);
let longitivity = 0;
let lengths;
let longWord = ``;
for (let i = 0; i <= sentence.split(` `).length - 1; i++) {
    lengths = sentence.split(` `)[i].length;
    if (longitivity < lengths) {
        longWord = sentence.split(` `)[i];
    }
}
console.log(`The Longest Word char: ${longWord.length}`);
console.log(`The Longest Word: ${longWord}`); */ //i saw the shortcut, but to be able to do that, i need to be able to know the arrow function (which i'll skip for now)

// 18. Generate a username automatically using: first 3 letters of first name, last 3 letters of last name, random number.
/* const fullName = window.prompt(`Enter youe full name:`).toLowerCase();
const firstThree = fullName.slice(0, 3);
const lastThree = fullName.slice(-3);
const randomNumber = Math.floor(Math.random()*10);
const userName = firstThree + lastThree + randomNumber;
console.log(`Username: ${userName}`); */

// 19. Take a sentence. Count: words, characters, spaces.
/* const sentence = window.prompt(`Enter a sentence:`);
console.log(`Words: ${sentence.split(` `).length}\nCharacters: ${sentence.split(``).length}\nSpaces: ${sentence.split(` `).length - 1}`); */

// 20. Take a paragraph. Display: shortest word, longest word.
/* const paragraph = window.prompt(`Enter a paragraph: `);
let shortWord = paragraph.split(` `)[0];
let longWord = paragraph.split(` `)[0];
for (i = 0; i <= paragraph.split(` `).length - 1; i++) {
    if (shortWord.length > paragraph.split(` `)[i].length) {
        shortWord = paragraph.split(` `)[i];
    } else if (longWord.length < paragraph.split(` `)[i].length) {
        longWord = paragraph.split(` `)[i];
    }
}
console.log(`Shortest word: ${shortWord}\nLongest word: ${longWord}`); */

// 21. Create a mini word counter tool. Display: words, characters, spaces, average word length.
/* const paragraph = window.prompt(`Enter a paragraph: `);
let wordLength = 0;
for (let i=0 ; i< paragraph.split(` `).length ; i++){
    wordLength += paragraph.split(` `)[i].length;
}
let wordLengthAvg = wordLength/paragraph.split(` `).length;
// let wordLengthAvg = paragraph.split(` `).reduce((acc,word) => acc + word.length , 0)/paragraph.split(` `).length;
console.log(`Words: ${paragraph.split(` `).length}\nCharacters: ${paragraph.split(``).length}\nSpaces: ${paragraph.split(` `).length-1}\nAverage Word Length: ${wordLengthAvg.toFixed(2)}`); */

// 22. Create a “bad word detector”. If sentence contains certain banned words: display warning.
/* const sentence = window.prompt(`Enter a sentence: `).toLowerCase();
const bannedWords = [`ugly`, `fat`, `bitch`, `fuck`, `ass`, `mf`, `motherfucker`, `cum`, `vagina`, `pussy`, `butt`, `stupid`, `idiot`, `trans`, `nigger`, `faggot`, `retard`, `dick`, `cock`, `slut`, `whore`, `bastard`, `douchebag`, `cunt`, `dumb`, `dumbass`, `dickhead`, `asshole`, `bitchass`, `bitchy`, `bullshit`, `crap`, `damn`, `hell`, `piss`, `shit`, `twat`, `wanker`, `prick`, `arse`, `bollocks`, `bugger`, `choad`, `clit`, `coon`, `cocksucker`, `cumshot`, `dildo`, `dyke`, `fag`, `faggot`, `jizz`, `kunt`, `muff`, `nigga`, `paki`, `pussy`, `queer`, `shemale`, `slut`, `spic`, `tit`];
isWarned = false;
for (i = 0; i < bannedWords.length; i++) {
    if (sentence.includes(bannedWords[i])) {
        isWarned = true;
        break;
    }
}
!isWarned ? console.log(`Your sentence is good to go!`) : window.alert(`WARNING! Don't put banned Words!`);
 */

// 23. Create a password strength checker. Check: minimum length, uppercase, lowercase, numbers, symbols. Then classify: weak, medium, strong.
/* const password = window.prompt(`Enter your password: `);
let strength = 5;
switch (true) {
    case password.length < 8 || password.length > 16:
        strength--;
    case !/[A-Z]/.test(password):
        strength--;
    case !/[a-z]/.test(password):
        strength--;
    case !/[0-9]/.test(password):
        strength--;
    case !/[^a-zA-Z0-9\s]/.test(password):
        strength--;
}
switch (true) {
    case strength == 5:
        console.log(`Strong.`);
        break;
    case strength == 4:
        console.log(`Medium.`);
        break;
    default:
        console.log(`Weak.`);
} */

// 24. Create a mini text formatter. Options: uppercase, lowercase, capitalize, remove spaces. (using switch)
/* let text= window.prompt(`Enter a text:`);
let textComponents;
const options= window.prompt(`What do you want to do? Type:\nU = Uppercase\nL = Lowercase\nC = Capitalize each word\nS = Remove Spaces`).toUpperCase();
switch (options){
    case `U`:
        console.log(`Uppercased:\n${text.toUpperCase()}`);
        break;
    case `L`:
        console.log(`Lowercased:\n${text.toLowerCase()}`);
        break;
    case `C`:
        textComponents = text.split(` `);
        for (i=0 ; i<text.split(` `).length ; i++) {
            textComponents[i] = textComponents[i].charAt(0).toUpperCase() + textComponents[i].slice(1);
        }
        text = textComponents.join(` `);
        console.log(`Capitalized Each Letter: ${text}`);
        break;
    case `S`:
        console.log(`Spaces Removed:\n${text.replaceAll(` `, ``)}`);
        break;
} */


// 25. In textAnalyzer.js file.

        


