function getComputerChoice(){
    let choice = Math.floor(Math.random() * (3 - 0)) + 0;
    return choiceFromIntToString(choice)
}

function choiceFromIntToString(num){
    if (num==0){
        return "rock"
    }
    else if (num==1){
        return "paper"
    }
    return "scissors"
}



function getHumanChoice(){
    let humanChoice = undefined
    let num = undefined
    do{
        humanChoice = prompt("Enter 0 for rock, 1 for paper and 2 for scissors: ")
        num = +humanChoice
    }while(num != 0 && num != 1 && num != 2)
    return choiceFromIntToString(num)
}

function playRound(){
    let humanChoice = getHumanChoice()
    let computerChoice = getComputerChoice()
    if (computerChoice == humanChoice){
        alert("Tie")
        return -1
    }
    else if((computerChoice == "paper" && humanChoice == "rock") || (computerChoice == "rock" && humanChoice == "scissors") || (computerChoice == "scissors" && humanChoice == "paper")){
        alert(`You losed computer choose ${computerChoice} and you ${humanChoice}`)
        return 0
    }
    else {
        alert(`You won computer choose ${computerChoice} and you ${humanChoice}`)
        return 1
    }
}

function playGame(){
    let result = undefined
    let computerScore = 0
    let humanScore = 0
    for (let i = 0;i<5;i++){
        result = playRound()
        if (result == 1){
            humanScore++
        }
        else if(result == 0){
            computerScore++
        }
        alert(`Score \nhuman : ${humanScore}\ncomputer : ${computerScore}`)
    }
    if (humanScore>computerScore){
        alert("You Won The Game")
    }
    else if(computerScore>humanScore){
        alert("You Lost The Game")
    }
    else{
        alert("There was a tie")
    }

}

function startGame(){
    playGame()
}