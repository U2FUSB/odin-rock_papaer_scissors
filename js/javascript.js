function getHumanChoice() {
    return alert(`
        Enter your choice. Options are:
        ------------------------------
        Rock
        Paper
        Scissors
        ------------------------------
        Other choices will be ignored!
        (Because they do nothing...)
    `);
} // WHEN output works on div, change this to show on div
function playGame(humanChoiceButton) {
    outputField.textContent = `
        Welcome to Rock, Paper, Scissors!
        Win a duel against the computer!!!
    `;
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
    const humanChoice = humanChoiceButton.target.textContent;
    const humanChoiceLower = (humanChoice ?? "invalid input").toLowerCase();
    const showChoices = `
    You chose:      ${humanChoiceLower}
    Computer chose: ${computerChoice}
    
    `;
    if (humanChoiceLower === computerChoice) {
        outputField.textContent = `${showChoices}Stalemate!`;
        outputField.textContent += `human Score: ${humanScore}, computer Score: ${computerScore}`;
    } else if (
        (humanChoiceLower === "rock" && computerChoice === "scissors") ||
        (humanChoiceLower === "paper" && computerChoice === "rock") ||
        (humanChoiceLower === "scissors" && computerChoice === "paper")
    ) {
        outputField.textContent = `${showChoices}You win!`;
        humanScore++;
        outputField.textContent += `human Score: ${humanScore}, computer Score: ${computerScore}`;
    } else if (
        (humanChoiceLower === "rock" && computerChoice === "paper") ||
        (humanChoiceLower === "paper" && computerChoice === "scissors") ||
        (humanChoiceLower === "scissors" && computerChoice === "rock")
    ) {
        outputField.textContent = `${showChoices}You lose...`;
        computerScore++;
        outputField.textContent += `human Score: ${humanScore}, computer Score: ${computerScore}`;
    } else {
        outputField.textContent = "Please enter valid input.";
        return 1;
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

// SHOW Winner (the one who wins 5 rounds / gets 5 points)
