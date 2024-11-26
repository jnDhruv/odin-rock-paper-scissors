function getComputerChoice() {
    let ch = Math.floor(Math.random()*3);
    switch (ch) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
}

function getHumanChoice() {
    let ch = prompt("Rock, paper or scissors?");
    if (ch.toLowerCase() == 'rock' || ch.toLowerCase() == 'paper' || ch.toLowerCase() == 'scissors') {
        return ch.toLowerCase();
    }
    else {
        alert("Wrong Choice!");
        return getHumanChoice();
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log(`No one wins! Both chose ${humanChoice}.`);
    }
    else if ((humanChoice == "rock" && computerChoice == "paper")
        || (humanChoice == "paper" && computerChoice == "scissors")
        || (humanChoice == "scissors" && computerChoice == "rock")
    ) {
        console.log(`Computer won! ${computerChoice} beats ${humanChoice}.`);
        computerScore++;
    } else {
        console.log(`You won! ${humanChoice} beats ${computerChoice}.`);
        humanScore++;
    }
}

let humanScore = 0, computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);