let counter = 0;
document.getElementById("clickMe").onclick = function clicked() {
    document.getElementById("counter").textContent = counter;
    counter++;
}
document.getElementById("mySVG1").onclick = function reset() {
    counter = 0;
    document.getElementById("counter").textContent = counter;
    clearTimeout(timerId);
    clearInterval(intervalId);
}
function timerClear() {
    counter = 0;
    document.getElementById("counter").textContent = counter;
    time = 0;
    document.getElementById("timer").textContent = time + `s`;
    window.alert(`Time's up, bro!`);
}
document.getElementById("mySVG2").onclick = function timerSet() {
    counter = 0;
    document.getElementById("counter").textContent = counter;
    let time = Number(window.prompt(`Enter your timer in seconds:`));
    let timerId = setTimeout(timerClear, time * 1000); //setTimeout(function () { timerClear(); }, time * 1000);
    let intervalId = setInterval(timerMove, 1000); //setInterval(function () { timerMove(); }, 1000);
    document.getElementById("timer").textContent = time + `s`;
    function timerMove() {
        if (time > 0) {
            time--;
            document.getElementById("timer").textContent = time + `s`;
        }
    }
}