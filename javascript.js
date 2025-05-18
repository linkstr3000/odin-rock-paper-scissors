let playerScore = 0;
let computerScore = 0;
let currentResult = "";

function getComputerChoice()
{
    let rng = Math.random();
    let choice = "null";
    if (rng <= 0.33) choice = "rock";
    else if (rng >0.33 && rng <= 0.66) choice = "paper";
    else choice = "scissors";
    return choice;
}

function getPlayerInput()
{
    return prompt("Please input Rock, Paper or Scissors").toLowerCase();
}

function playRound(playerChoice, computerChoice)
{
    let result = "error"
    if (playerChoice === "rock")
    {
        if (computerChoice === "rock") {result = "tied";}
        else if (computerChoice === "paper") {result = "lost";}
        else if (computerChoice === "scissors") {result = "won";}
    }
    else if (playerChoice === "paper")
    {
        if (computerChoice === "rock") {result = "won";}
        else if (computerChoice === "paper") {result = "tied";}
        else if (computerChoice === "scissors") {result = "lost";}
    }
    else if (playerChoice === "scissors")
    {
        if (computerChoice === "rock") {result = "lost";}
        else if (computerChoice === "paper") {result = "won";}
        else if (computerChoice === "scissors") {result = "tied";}
    }
    console.log("The Computer chose " + computerChoice + " You " + result + " this round!")
    if (result === "won") {playerScore ++;}
    else if (result === "lost") {computerScore ++;}
}

playRound(getPlayerInput(), getComputerChoice());
console.log("The score is now: Player: " + playerScore + " Computer: " +computerScore);
playRound(getPlayerInput(), getComputerChoice());
console.log("The score is now: Player: " + playerScore + " Computer: " +computerScore);
playRound(getPlayerInput(), getComputerChoice());
console.log("The score is now: Player: " + playerScore + " Computer: " +computerScore);
playRound(getPlayerInput(), getComputerChoice());
console.log("The score is now: Player: " + playerScore + " Computer: " +computerScore);
playRound(getPlayerInput(), getComputerChoice());
console.log("The score is now: Player: " + playerScore + " Computer: " +computerScore);

if (playerScore>computerScore) console.log("You Won the Game!"); 
else if (computerScore>playerScore) console.log("The Computer Won the Game");
else console.log("The game was a Tie!")