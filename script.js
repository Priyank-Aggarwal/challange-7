
let answer;
let attemptsLeft = 5;

function startGuessingGame(){
startGame();


}

var index=0;

function changeColors(){
    var colors = ["rgb(38, 111, 145)", "rgb(117, 201, 226)", "rgb(6, 214, 241)", "rgb(6, 233, 241)","rgb(6, 241, 202)","rgb(10, 245, 127)"];
    
    document.getElementsByTagName("body")[0].
    style.background = colors[index++];
    
    if(index>colors.length-1)
    index = 0;
    
    }

function startGame() {

const userInput = document.getElementById("userInput").value;


if (userInput < 1 || userInput > 100) {
document.getElementById("result").innerHTML = `Incorrect Input! Please enter a number between 1 and 100.<br>`;
return;
}


answer = userInput;


attemptsLeft = 5;


guessNumber();
}

function guessNumber() {
const guess = Math.floor(Math.random() * 100) + 1;
changeColors();

attemptsLeft--;

document.getElementById("result").innerHTML += `Guess ${5-attemptsLeft}: Computer guessed ${guess}.<br>`;

if (guess == answer) {
document.getElementById("result").innerHTML += "Computer guessed the number correctly. Computer wins! You lose!";
return;
}

if (attemptsLeft <= 0) {
document.getElementById("result").innerHTML += `Computer failed to guess. Yay, You win! The answer was ${answer}.`;
return;
}

setTimeout(guessNumber, 1000);
}