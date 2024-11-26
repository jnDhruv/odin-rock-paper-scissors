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
    }
}