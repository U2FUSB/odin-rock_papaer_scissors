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
    console.log(humanChoiceLower)
    console.log(computerChoice)
    if (humanChoiceLower === computerChoice) {
        console.log(`${showChoices}Stalemate!`);
    } else if (
        (humanChoiceLower === "rock" && computerChoice === "scissors") ||
        (humanChoiceLower === "paper" && computerChoice === "rock") ||
        (humanChoiceLower === "scissors" && computerChoice === "paper")
    ) {
        console.log(`${showChoices}You win!`);
        humanScore++;
    } else if (
        (humanChoiceLower === "rock" && computerChoice === "paper") ||
        (humanChoiceLower === "paper" && computerChoice === "scissorsk") ||
        (humanChoiceLower === "scissors" && computerChoice === "rock")
    ) {
        console.log(`${showChoices}You lose...`);
        computerScore++;
    } else {
        console.log("Please enter valid input.");
        return 1;
    }
}

let humanScore = 0;
let computerScore = 0;
let humanChoiceButtons = Array.from(document.querySelectorAll(".selection-button"));
humanChoiceButtons.forEach(humanChoiceButton => {
    humanChoiceButton.addEventListener("click", playRound)
});
// ELEM create div
// change clg's to something that shows as DOM text on the div
// SHOW results of EVLIST on div. =>
    // SHOW running score
    // SHOW Winner (the one who wins 5 rounds / gets 5 points)
