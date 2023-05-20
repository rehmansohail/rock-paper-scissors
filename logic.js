let arr=['rock','paper','scissors'];

let userScore=0,compScore=0;
var gameResult = "";
var resultText = document.getElementById("result-text");

var gameButton = document.getElementsByClassName("btn");

function handleButtonClick(button) {
    var buttonText = button.innerText;
    buttonText=buttonText.toLowerCase();
    let userInput = buttonText;
    let compInput = random(arr);
    // Call your function and pass the buttonText as input
    let result = game(userInput,compInput);

    if (userScore === 5 || compScore===5) {
        // Display a message
        alert("Game over! Click ok for a new game.");
        gameButton.disabled = true; // Disable the button
        userScore=0;
        compScore=0;
      }

    if(result==1){
                userScore++;
                console.log(`you won ${userInput} beats ${compInput}`)
                console.log(`score: ${userScore}-${compScore}`)
            }
            else if(result==-1){
                compScore++;
                console.log(`you lost ${compInput} beats ${userInput}`)
                console.log(`score: ${userScore}-${compScore}`)
            }
            else{
                console.log(`match drawn`)
                console.log(`score: ${userScore}-${compScore}`)
            }
            gameResult = `${userScore}-${compScore}`;
            let res1=`you won ${userInput} beats ${compInput}`;
            let res2=`you lost ${compInput} beats ${userInput}`;
            if(result==1){
                resultText.textContent= res1+" : "+gameResult;
            }
            else if(result==0){
                resultText.textContent="Match Drawn : "+gameResult;
            }
            else{
            resultText.textContent = res2+" : " + gameResult;
        }

  }
  
//   function yourFunction(buttonText) {
//     // Do something with the buttonText
//     console.log("Button text:", buttonText);
//   }
  




function game(userInput,compInput){
    if(userInput=='rock'){
        if(compInput=='rock')return 0
        else if(compInput=='paper')return -1
        else return 1
    }
    else if(userInput=='paper'){
        if(compInput=='rock')return 1
        else if(compInput=='paper')return 0
        else return -1
    }
    else{
        if(compInput=='rock')return -1
        else if(compInput=='paper')return 1
        else return 0;
    }
}

function random(array){
    let i = Math.floor(Math.random()*(array.length))
    if(i==arr.length){
        --i;
    }
    return arr[i]
}




// while(1){
//     if(userScore==5 || compScore==5){
//         console.log('Thanks for playing')
//         break
//     }
//     let userInput = prompt("Enter the input (rock,paper,scissors):")
//     userInput=userInput.toLowerCase();
//     let compInput = random(arr);
//     let result = game(userInput,compInput)
//     if(result==1){
//         userScore++;
//         console.log(`you won ${userInput} beats ${compInput}`)
//         console.log(`score: ${userScore}-${compScore}`)
//     }
//     else if(result==-1){
//         compScore++;
//         console.log(`you lost ${compInput} beats ${userInput}`)
//         console.log(`score: ${userScore}-${compScore}`)
//     }
//     else if(result==0) {
//         console.log(`match drawn`)
//         console.log(`score: ${userScore}-${compScore}`)
//     }
//     else{
//         console.log('Invalid input, Enter again')
//     }

// }

