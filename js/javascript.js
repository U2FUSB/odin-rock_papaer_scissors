function getComputerChoice() {
    let computerChoiceInt = Math.ceil(Math.random() * 3);
    switch (computerChoiceInt) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
        default:
    }
}
function playRound(humanChoiceButton) {
    const computerChoice = getComputerChoice();
    const humanChoice = (
        humanChoiceButton.target.textContent ?? "invalid input"
    ).toLowerCase();
    const showChoices = `
    You chose:      ${humanChoice}
    Computer chose: ${computerChoice}
    
    `;
    if (humanChoice === computerChoice) {
        outputField.textContent = `${showChoices}Stalemate!`;
        outputField.textContent += `human Score: ${humanScore}, computer Score: ${computerScore}`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        outputField.textContent = `${showChoices}You win!`;
        humanScore++;
        outputField.textContent += `human Score: ${humanScore}, computer Score: ${computerScore}`;
    } else if (
        (humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "rock")
    ) {
        outputField.textContent = `${showChoices}You lose...`;
        computerScore++;
        outputField.textContent += `human Score: ${humanScore}, computer Score: ${computerScore}`;
    } else {
        outputField.textContent = "Please enter valid input.";
        return 1;
    }
}
function playGame(humanChoiceButton) {
    playRound(humanChoiceButton);
    if (humanScore >= 5) {
        outputField.textContent = "You win the game!!!";
        humanScore = 0;
        computerScore = 0;
    }
    if (computerScore >= 5) {
        outputField.textContent = "You lose the game...";
        humanScore = 0;
        computerScore = 0;
    }
}

let humanScore = 0;
let computerScore = 0;
let humanChoiceButtons = Array.from(
    document.querySelectorAll(".selection-button")
);
let outputField = document.querySelector(".output");

humanChoiceButtons.forEach((humanChoiceButton) => {
    humanChoiceButton.addEventListener("click", playGame);
});
