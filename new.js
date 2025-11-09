function getComputerChoice() {
    let choice = Math.floor(Math.random() * (3 - 0)) + 0;
    return choiceFromIntToString(choice)
}

function choiceFromIntToString(num) {
    if (num == 0) {
        return "rock"
    }
    else if (num == 1) {
        return "paper"
    }
    return "scissors"
}





function playRound(humanChoice) {
    let resultOfRound = document.querySelector(".defineResult")
    let computerChoice = getComputerChoice()
    if (computerChoice == humanChoice) {
        resultOfRound.textContent = "Tie"
        return -1
    }
    else if ((computerChoice == "paper" && humanChoice == "rock") || (computerChoice == "rock" && humanChoice == "scissors") || (computerChoice == "scissors" && humanChoice == "paper")) {
        resultOfRound.textContent = `Computer Wins You Choosed ${humanChoice} while computer ${computerChoice}`
        return 0
    }
    else {
        resultOfRound.textContent = `You Won. You Choosed ${humanChoice} while computer ${computerChoice}`
        return 1
    }
}

function playGame(humanChoice) {
    let human = document.querySelector(".humanScore")
    let computer = document.querySelector(".computerScore")
    let rounds = document.querySelector(".rounds")



    let humanScore = Number(human.textContent)
    let computerScore = Number(computer.textContent)
    let round = Number(rounds.textContent)

    let rst = playRound(humanChoice)
    if (rst == 0) {
        computerScore += 1
    }
    else if (rst == 1) {
        humanScore += 1
    }
    round++

    if (round > 5) {
        declareWinner(humanScore, computerScore)
        rounds.textContent = 1
        human.textContent = 0
        computer.textContent = 0
    }
    else {
        rounds.textContent = round
        human.textContent = humanScore
        computer.textContent = computerScore
    }
}

document.addEventListener("click", (e) => {
    const cards = document.querySelectorAll(".card")
    if (e.target.matches(".card") || e.target.matches(".cardImg")) {
        cards.forEach((card) => {
            if (card === e.target || card === e.target.parentNode) {
                card.style.backgroundColor = "gray"
            }
            else {
                card.style.backgroundColor = "white"
            }

        })
    }
    else if (e.target.matches(".Play")) {
        cards.forEach((card) => {
            if (card.style.backgroundColor == "gray") {
                playGame(card.querySelector("p").id)
            }
        })
    }
})


function declareWinner(humanScore, computerScore) {
    if (humanScore > computerScore) {
        alert("You won")
    }
    else if (computerScore > humanScore) {
        alert("You Lost")
    }
    else {
        alert("Tie")
    }
}