document.getElementById("myButton").onclick= function generate(){
    let min= Number(document.getElementById("myMin").value);
    let max= Number(document.getElementById("myMax").value);
    let random= Math.floor(Math.random()*(max-min)) + min;
    document.getElementById("box").textContent=random;
}