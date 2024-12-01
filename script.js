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

function titleize(string) {
    return string[0].toUpperCase() + string.substr(1);
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
        result.textContent = `Computer won! ${titleize(computerChoice)} beats ${humanChoice}.`;
        result.style.color = 'var(--lose-red-color)';
        computerScore++;
    } 
    
    else {
        result.textContent = `You won! ${titleize(humanChoice)} beats ${computerChoice}.`;
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

        let containerDiv = document.querySelector(".scoreboard");
        containerDiv.appendChild(finalResult);
        
        let playAgainBtn = document.createElement("button");
        playAgainBtn.classList.add("playAgainBtn");
        playAgainBtn.textContent = "Play Again?";

        playAgainBtn.addEventListener("click", (e) => {

            containerDiv.removeChild(finalResult);
            containerDiv.removeChild(playAgainBtn);

            humanScore = 0;
            computerScore = 0;

            result.textContent = "Select your choice to start playing:";
            result.style.color = "white";
            updateScores();
        });
        containerDiv.appendChild(playAgainBtn);
    }
}

// On play again:
// - Reset the scores

let humanScore = 0;
let computerScore = 0;

let humanScoreRef = document.querySelector(".human-score h1");
let computerScoreRef = document.querySelector(".computer-score h1");

let result = document.querySelector(".result");

let btnContainer = document.querySelector(".choices");

btnContainer.addEventListener("click", (e) => {
    let btnClicked = e.target;
    driver(btnClicked.id);
});