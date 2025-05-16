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

console.log(getPlayerInput());
console.log(getPlayerInput());
console.log(getPlayerInput());