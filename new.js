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