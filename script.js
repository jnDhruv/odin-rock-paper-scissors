function getComputerChoice() {
    let ch = Math.floor(Math.random()*3);
    switch (ch) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
}

function getHumanChoice(event) {
    return event.id;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        result.textContent = `No one wins! Both chose ${humanChoice}.`;
        result.style.color = 'white';
    }
    else if ((humanChoice == "rock" && computerChoice == "paper")
        || (humanChoice == "paper" && computerChoice == "scissors")
        || (humanChoice == "scissors" && computerChoice == "rock")
    ) {
        result.textContent = `Computer won! ${computerChoice} beats ${humanChoice}.`;
        result.style.color = 'var(--lose-red-color)';
        computerScore++;
    } else {
        result.textContent = `You won! ${humanChoice} beats ${computerChoice}.`;
        result.style.color = 'var(--win-green-color)';
        humanScore++;
    }
}

function driver(choice) {
    playRound(choice,getComputerChoice());
}

let humanScore = document.querySelector(".human-score");
let computerScore = document.querySelector(".computer-score");

let result = document.querySelector(".result");

let btnContainer = document.querySelector(".choices");
let rockBtn = document.querySelector("#rock");
let paperBtn = document.querySelector("#paper");
let scissorsBtn = document.querySelector("#scissors");

btnContainer.addEventListener("click", (e) => {
    let btnClicked = e.target;
    driver(btnClicked.id);
});