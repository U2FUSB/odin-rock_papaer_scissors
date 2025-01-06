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
            return "something went wrong";
    }
}
function playRound(humanChoiceButton) {
    const computerChoice = getComputerChoice();
    const humanChoice = (
        humanChoiceButton.target.textContent ?? "invalid input"
    ).toLowerCase();
    const showChoices = `
    Round ${currentRound}


    You chose:      ${humanChoice}
    Computer chose: ${computerChoice}
    
    `;
    if (humanChoice === computerChoice) {
        outputField.textContent = `${showChoices}Stalemate!\n\n`;
        outputField.textContent += `human Score: ${humanScore}\n computer Score: ${computerScore}`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        outputField.textContent = `${showChoices}You win!\n\n`;
        humanScore++;
        outputField.textContent += `human Score: ${humanScore}\n computer Score: ${computerScore}`;
    } else {
        outputField.textContent = `${showChoices}You lose...\n\n`;
        computerScore++;
        outputField.textContent += `human Score: ${humanScore}\n computer Score: ${computerScore}`;
    }
}
function playGame(humanChoiceButton) {
    playRound(humanChoiceButton);
    if (currentRound++ >= lastRound) {
        outputField.textContent = `
        Round ${currentRound-1}

        
        human Score: ${humanScore}\n computer Score: ${computerScore}\n\n`;
        if (humanScore > computerScore) {
            outputField.textContent += "You win the game!!!";
        } else if (computerScore > humanScore) {
            outputField.textContent += "You lose the game...";
        } else if (computerScore === humanScore) {
            outputField.textContent += "Game ends in Stalemate";
        }
        humanScore = 0;
        computerScore = 0;
        currentRound = 1;
    }
}

let humanScore = 0;
let computerScore = 0;
let currentRound = 1;
const lastRound = 5;

let humanChoiceButtons = Array.from(
    document.querySelectorAll(".selection-button")
);
let outputField = document.querySelector(".output");

humanChoiceButtons.forEach((humanChoiceButton) => {
    humanChoiceButton.addEventListener("click", playGame);
});
