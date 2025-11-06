function getComputerChoice(){
    let choice = Math.floor(Math.random() * (2 - 0)) + 0;
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

function playRound(){
    let humanChoice = getHumanChoice()
    let computerChoice = getComputerChoice()
    if ((computerChoice == "paper" && humanChoice == "rock") || (computerChoice == "rock" && humanChoice == "scissors") || (computerChoice == "scissors" && humanChoice == "paper")){
        return 0
    }
    else if(computerChoice == humanChoice){
        return -1
    }
    else {
        return 1
    }
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