let arr = ["rock", "paper", "scissors"];

let userScore = 0,compScore = 0;
var gameResult = "";
var resultText = document.getElementById("result-text");

var gameButton = document.getElementsByClassName("btn");


function handleButtonClick(button) {
    
  if(button.style.background=='gold'){
    button.style.background='white'
  }
  else{
    button.style.background='gold'
  }
  if(userScore==5 || compScore==5){
    alert("Game Over. Starting a new game")
    location.reload()
  }
  var buttonText = button.innerText;
  buttonText = buttonText.toLowerCase();
  let userInput = buttonText;
  let compInput = random(arr);
  // Call your function and pass the buttonText as input
  let result = game(userInput, compInput,userScore,compScore);

  if (result == 1) {
    userScore++;
    console.log(`You won ${userInput} beats ${compInput}`);
    console.log(`Score: ${userScore}-${compScore}`);
  } else if (result == -1) {
    compScore++;
    console.log(`You lost ${compInput} beats ${userInput}`);
    console.log(`Score: ${userScore}-${compScore}`);
  } else {
    console.log(`Match drawn`);
    console.log(`Score: ${userScore}-${compScore}`);
  }
  gameResult = `${userScore}-${compScore}`;
  let res1 = `You won ${userInput} beats ${compInput}`;
  let res2 = `You lost ${compInput} beats ${userInput}`;
  if (result == 1) {
    resultText.textContent = res1 + " : " + gameResult;
  } else if (result == 0) {
    resultText.textContent = "Match Drawn : " + gameResult;
  } else {
    resultText.textContent = res2 + " : " + gameResult;
  }
}

function game(userInput, compInput) {

    if (userInput == "rock") {
    if (compInput == "rock") return 0;
    else if (compInput == "paper") return -1;
    else return 1;
  } else if (userInput == "paper") {
    if (compInput == "rock") return 1;
    else if (compInput == "paper") return 0;
    else return -1;
  } else {
    if (compInput == "rock") return -1;
    else if (compInput == "paper") return 1;
    else return 0;
  }
}

function random(array) {
  let i = Math.floor(Math.random() * array.length);
  if (i == arr.length) {
    --i;
  }
  return arr[i];
}
