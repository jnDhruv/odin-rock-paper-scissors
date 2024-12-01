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
    } 
    
    else {
        result.textContent = `You won! ${humanChoice} beats ${computerChoice}.`;
        result.style.color = 'var(--win-green-color)';
        humanScore++;
    }
    updateScores();
}

function updateScores() {
    humanScoreRef.textContent = humanScore;
    computerScoreRef.textContent = computerScore;
}

function driver(choice) {
    let someoneAlreadyWon = humanScore === 5 || computerScore === 5;
    if (someoneAlreadyWon) {
        return;
    }

    playRound(choice,getComputerChoice());

    let someoneWon = humanScore === 5 || computerScore === 5;
    if (someoneWon) {
        let finalResult = document.createElement("h2");

        if (humanScore == 5) {
            finalResult.textContent = `Congrats! You won!`;
            finalResult.style.color = 'var(--win-green-color)';

        } else {
            finalResult.textContent = `Oh no! You lost!`;
            finalResult.style.color = 'var(--lose-red-color)';
        }
        document.querySelector(".scoreboard").appendChild(finalResult);
    }
}

let humanScore = 0;
let computerScore = 0;

let humanScoreRef = document.querySelector(".human-score h1");
let computerScoreRef = document.querySelector(".computer-score h1");

let result = document.querySelector(".result");

let btnContainer = document.querySelector(".choices");
let rockBtn = document.querySelector("#rock");
let paperBtn = document.querySelector("#paper");
let scissorsBtn = document.querySelector("#scissors");

btnContainer.addEventListener("click", (e) => {
    let btnClicked = e.target;
    driver(btnClicked.id);
});