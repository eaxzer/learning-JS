const myText = document.getElementById("myText");
const myWordCount = document.getElementById("myWordCount");
const myCharacterCount = document.getElementById("myCharacterCount");
const myVowelCount = document.getElementById("myVowelCount");
const myConsonantCount = document.getElementById("myConsonantCount");
const myLongestWord = document.getElementById("myLongestWord");
const myShortestWord = document.getElementById("myShortestWord");
const myUppercaseVersion = document.getElementById("myUppercaseVersion");
const myLowercaseVersion = document.getElementById("myLowercaseVersion");
const submitButton = document.getElementById("submitButton");
const myTime = document.getElementById("myTime");
const wpmButton = document.getElementById("wpmButton");
const clearButton = document.getElementById("clearButton");
let text;
let counter = 0;
let isAllowed = true;
let actualTime;
let time;

submitButton.onclick = function () {
  text = myText.value;
  workLoad();
}
function workLoad() {
  submitCheck();
  if (isAllowed) {
    wordCount();
    characterCount();
    vowelCount();
    consonantCount();
    longestWord_shortestWord();
    uppercaseVersion();
    lowercaseVersion();
  }
}
function wordCount() {
  text.trim() === `` ? myWordCount.textContent = 0 : myWordCount.textContent = text.split(` `).length;
}
function characterCount() {
  myCharacterCount.textContent = text.split(``).length;
}
function vowelCount() {
  for (let i = 0; i < text.length; i++) {
    /[A,E,I,O,U]/g.test(text.toUpperCase().charAt(i)) ? counter++ : (counter = counter);
  }
  myVowelCount.textContent = counter;
  counter = 0;
}
function consonantCount() {
  for (let i = 0; i < text.length; i++) {
    /[^A,E,I,O,U]/g.test(text.replaceAll(/[^a-zA-Z0-9]/g, ``).toUpperCase().charAt(i)) ? counter++ : (counter = counter);
  }
  myConsonantCount.textContent = counter;
  counter = 0;
}
function longestWord_shortestWord() {
  let longWord = text.split(` `)[0];
  let shortWord = text.split(` `)[0];
  for (let i = 0; i < text.split(` `).length; i++) {
    if (longWord.length < text.split(` `)[i].length) {
      longWord = text.split(` `)[i];
    } else if (shortWord.length > text.split(` `)[i].length) {
      shortWord = text.split(` `)[i];
    }
  }
  myLongestWord.textContent = longWord;
  myShortestWord.textContent = shortWord;
}
function uppercaseVersion() {
  myUppercaseVersion.textContent = text.toUpperCase();
}
function lowercaseVersion() {
  myLowercaseVersion.textContent = text.toLowerCase();
}
function submitCheck() {
  if (text == ``) {
    window.alert(`Enter the text first!`);
    isAllowed = false;
  }
}
clearButton.onclick = function () {
  reloadPage();
}
function reloadPage() {
  window.location.reload();
}
wpmButton.onclick = function () {
  setTime();
}

function setTime() {
  actualTime = Number(window.prompt(`Enter the time in seconds:`));
  time = actualTime;
  myTime.textContent = time + `s`;
  if (time > 0) {
    setTimeout(timeUp, time * 1000);
    setInterval(runTime, 1000);
  } else {
    window.alert(`Invalid time.`);
  }
}

function timeUp() {
  time = 0;
  myTime.textContent = `Time`;
  window.alert(`Time's Up, bro!`);
  wpmCheck();
}

function runTime() {
  if (time > 0) {
    time--;
    myTime.textContent = time + `s`;
  }
}

function wpmCheck(){
  text = myText.value;
  workLoad();
  window.alert(`Your WPM: ${Math.round((myCharacterCount.textContent/5)/(actualTime/60))}`);
}