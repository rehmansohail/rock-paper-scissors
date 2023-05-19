let arr=['rock','paper','scissors'];




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
    else if(userInput=='scissors'){
        if(compInput=='rock')return -1
        else if(compInput=='paper')return 1
        else return 0;
    }
    else{
        return 2
    }
}

function random(array){
    let i = Math.floor(Math.random()*(array.length))
    if(i==arr.length){
        --i;
    }
    return arr[i]
}
let userScore=0,compScore=0;
while(1){
    if(userScore==5 || compScore==5){
        console.log('Thanks for playing')
        break
    }
    let userInput = prompt("Enter the input (rock,paper,scissors):")
    userInput=userInput.toLowerCase();
    let compInput = random(arr);
    let result = game(userInput,compInput)
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
    else if(result==0) {
        console.log(`match drawn`)
        console.log(`score: ${userScore}-${compScore}`)
    }
    else{
        console.log('Invalid input, Enter again')
    }

}

