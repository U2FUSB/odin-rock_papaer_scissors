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
function playGame(rounds) {
    console.log(`
        Welcome to Rock, Paper, Scissors!
        Win a duel against the computer!!!
    `);
    /*     for (let i=1; i <= rounds; i++) {
        let invalidInputCheck = playRound(getComputerChoice(), getHumanChoice());
        // if (invalidInputCheck === 1) {i--}
        console.log(`
            current state:
            
            You:        ${humanScore}
            Computer:   ${computerScore}

            ${5-i} rounds left
            `);
    } 
    if (humanScore > computerScore) {
        console.log("You win the game!!!");
    } else if (humanScore < computerScore) {
        console.log("You lose the game...");
    } else {
        console.log("The game ends in a tie.");
    } */
} // WHEN div exists, show output from here on div
// Up to this point, unused for now, because of refactoring

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
    const computerChoice = getComputerChoice()
    const humanChoice = humanChoiceButton.target.textContent
    const humanChoiceLower = (humanChoice ?? "invalid input").toLowerCase();
    const showChoices = `
    You chose:      ${humanChoiceLower}
    Computer chose: ${computerChoice}
    
    `;
    if (humanChoiceLower === computerChoice) {
        outputField.textContent=(`${showChoices}Stalemate!`);
        outputField.textContent += `human Score: ${humanScore}, computer Score: ${computerScore}`
    } else if (
        (humanChoiceLower === "rock" && computerChoice === "scissors") ||
        (humanChoiceLower === "paper" && computerChoice === "rock") ||
        (humanChoiceLower === "scissors" && computerChoice === "paper")
    ) {
        outputField.textContent=(`${showChoices}You win!`);
        humanScore++;
        outputField.textContent += `human Score: ${humanScore}, computer Score: ${computerScore}`
    } else if (
        (humanChoiceLower === "rock" && computerChoice === "paper") ||
        (humanChoiceLower === "paper" && computerChoice === "scissors") ||
        (humanChoiceLower === "scissors" && computerChoice === "rock")
    ) {
        outputField.textContent=(`${showChoices}You lose...`);
        computerScore++;
        outputField.textContent += `human Score: ${humanScore}, computer Score: ${computerScore}`
    } else {
        outputField.textContent=("Please enter valid input.");
        return 1;
    }
}

let humanScore = 0;
let computerScore = 0;
let humanChoiceButtons = Array.from(document.querySelectorAll(".selection-button"));
let outputField = document.querySelector(".output");

humanChoiceButtons.forEach(humanChoiceButton => {
    humanChoiceButton.addEventListener("click", playRound)
});
if (humanScore >= 5 || computerScore >= 5) outputField.textContent = "Game is over!" 
// SHOW results of EVLIST on div. =>
    // SHOW running score
    // SHOW Winner (the one who wins 5 rounds / gets 5 points)
