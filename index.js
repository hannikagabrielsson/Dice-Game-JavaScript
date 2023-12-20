var name1;
var name2;
function askNameOne() {
    name1 = prompt("What is your name?");
    while (name1 === "") {
        name1 = prompt("What is your name?");
        if (name1 != "") {
            break;
        }
    }
   
    var firstName = document.createElement("p");
    firstName.textContent = name1;
    document.querySelector(".dice1").prepend(firstName);
    document.querySelector(".btn1").style.display = "none";
    
}
function askNameTwo() {
    name2 = prompt("What is your name?");
    while (name2 === "") {
        name2 = prompt("What is your name?");
        if (name2 != "") {
            break;
        }
    }
   
    var secondName = document.createElement("p");
    secondName.textContent = name2;
    document.querySelector(".dice2").prepend(secondName);
    document.querySelector(".btn2").style.display = "none";
}


document.querySelector(".btn1").addEventListener("click", askNameOne);
document.querySelector(".btn2").addEventListener("click", askNameTwo);


document.querySelector(".container").appendChild(document.createElement("div"));

var rollUp = document.createElement("button")
document.querySelector(".container").appendChild(rollUp);

rollUp.textContent = "Roll up!";
document.querySelector(".container div").classList.add("btnContainer");
rollUp.classList.add("btn");



function rollDice(){

    if (name1 === undefined && name2 === undefined){
        alert("Insert player name!")
    }
    else {

  

var randomNumberFirst = Math.floor(Math.random()*6)+1;
var randomNumberSecond = Math.floor(Math.random()*6)+1;

if (randomNumberFirst > randomNumberSecond){
    document.querySelector("h1").textContent = "🏆 " + name1 + " wins!";
}
else if (randomNumberFirst < randomNumberSecond){
    document.querySelector("h1").textContent = name2 + " wins! 🏆";
}
else {
    document.querySelector("h1").textContent = "Draw!";
}

switch (randomNumberFirst) {
    case 1: 
        document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
        break;
    case 2:
        document.querySelector(".img1").setAttribute("src", "./images/dice2.png");
        break;
    case 3:
        document.querySelector(".img1").setAttribute("src", "./images/dice3.png");
        break;
    case 4:
        document.querySelector(".img1").setAttribute("src", "./images/dice4.png");
        break;
    case 5:
        document.querySelector(".img1").setAttribute("src", "./images/dice5.png");
        break;
    case 6:
        document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
        break;
}
switch (randomNumberSecond) {
    case 1: 
        document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
        break;
    case 2:
        document.querySelector(".img2").setAttribute("src", "./images/dice2.png");
        break;
    case 3:
        document.querySelector(".img2").setAttribute("src", "./images/dice3.png");
        break;
    case 4:
        document.querySelector(".img2").setAttribute("src", "./images/dice4.png");
        break;
    case 5:
        document.querySelector(".img2").setAttribute("src", "./images/dice5.png");
        break;
    case 6:
        document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
        break;
}
}
}
rollUp.addEventListener("click", rollDice);

