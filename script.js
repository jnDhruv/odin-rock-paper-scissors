function getComputerChoice() {
    let ch = Math.floor(Math.random()*3);
    switch (ch) {
        case 0: return "Rock";
        case 1: return "Paper";
        case 2: return "Scissors";
    }
}