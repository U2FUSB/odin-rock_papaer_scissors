// function that returns rock, paper or scissors, randomly, after it received input (prob 1,2, or 3) from the user
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
function getHumanChoice() {
    return prompt(`
        Enter your choice. Options are:
        ------------------------------
        Rock
        Paper
        Scissors
        ------------------------------
        Other choices will be ignored!
        (Because they do nothing...)
    `);
}
function playGame(rounds) {
    let humanScore = 0;
    let computerScore = 0;
    function playRound(computerChoice, humanChoice) {
        const humanChoiceLower = (humanChoice ?? "invalid input").toLowerCase();
        const showChoices = `
        You chose:      ${humanChoiceLower}
        Computer chose: ${computerChoice}
        
        `;
        if (humanChoiceLower === computerChoice) {
            console.log(`${showChoices}Slatemate!`);
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
    alert(`
        Welcome to Rock, Paper, Scissors!
        Win a duel against the computer!!!
    `)
    for (let i=1; i <= rounds; i++) {
        let invalidInputCheck = playRound(getComputerChoice(), getHumanChoice());
        if (invalidInputCheck === 1) {i--}
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
    }
} 
playGame(5);

