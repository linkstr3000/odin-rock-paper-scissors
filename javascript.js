console.log("Welcome to Rock Paper Scissors");

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
        if (computerChoice === "rock") {result = "tie";}
        else if (computerChoice === "paper") {result = "lose";}
        else if (computerChoice === "scissors") {result = "win";}
    }
    else if (playerChoice === "paper")
    {
        if (computerChoice === "rock") {result = "win";}
        else if (computerChoice === "paper") {result = "tie";}
        else if (computerChoice === "scissors") {result = "lose";}
    }
    else if (playerChoice === "scissors")
    {
        if (computerChoice === "rock") {result = "lose";}
        else if (computerChoice === "paper") {result = "win";}
        else if (computerChoice === "scissors") {result = "tie";}
    }
    return result;
}

console.log(playRound(getPlayerInput(), getComputerChoice()));