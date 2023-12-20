document.querySelector(".container").appendChild(document.createElement("div"));

var rollUp = document.createElement("button")
document.querySelector(".container").appendChild(rollUp);

document.querySelector("button").textContent = "Roll up!";
document.querySelector(".container div").classList.add("btnContainer");
document.querySelector("button").classList.add("btn");



function rollDice(){

var randomNumberFirst = Math.floor(Math.random()*6)+1;
var randomNumberSecond = Math.floor(Math.random()*6)+1;

if (randomNumberFirst > randomNumberSecond){
    document.querySelector("h1").textContent = "🏆 Player 1 wins!";
}
else if (randomNumberFirst < randomNumberSecond){
    document.querySelector("h1").textContent = "Player 2 wins! 🏆";
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

rollUp.addEventListener("click", rollDice);

