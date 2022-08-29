let opciones = ["ROCK", "PAPER", "SCISSORS"];

let playerScore = 0;

let computerScore = 0;

let getComputerChoice = (randomNumber) => {
    return opciones[randomNumber];
  };

console.log("NEW GAME");

function playRound() {




  let randomNumber = Math.floor(Math.random() * opciones.length);

  let computerChoice = getComputerChoice(randomNumber);

  let playerSelection = prompt("Choose your weapon: (Rock, Paper or Scissors)").toUpperCase();

  while ( !opciones.includes(playerSelection)  )
  {

    playerSelection = prompt("Choose your weapon: (Rock, Paper or Scissors)").toUpperCase();
  }
  

  
  console.log("Computer plays: " + computerChoice);

  if (playerSelection === computerChoice) {
    console.log("Tie");
  } else if (playerSelection === "ROCK" && computerChoice === "SCISSORS") {
    console.log("You WIN! ROCK beats SCISSORS!");
    playerScore++;
  } else if (playerSelection === "ROCK" && computerChoice === "PAPER") {
    console.log("You LOSE! PAPER beats ROCK!");
    computerScore++;
  } else if (playerSelection === "PAPER" && computerChoice === "ROCK") {
    console.log("You WIN! PAPER beats ROCK!");
    playerScore++;
  } else if (playerSelection === "PAPER" && computerChoice === "SCISSORS") {
    console.log("You LOSE! SCISSORS beats PAPER!");
    computerScore++;
  } else if (playerSelection === "SCISSORS" && computerChoice === "PAPER") {
    console.log("You WIN! SCISSORS beats PAPER!");
    playerScore++;
  } else if (playerSelection === "SCISSORS" && computerChoice === "ROCK") {
    console.log("You LOSE! SCISSORS beats ROCK!");
    computerScore++;
  }
}

function game() {
  for (i = 0; i <= 4; i++) {
    playRound();
    console.log("You: " + playerScore + " Computer: " + computerScore);
  }

  if (playerScore > computerScore) {
    console.log("%cYou defeated the computer, congratulations", "color:green");
  } else if (computerScore > playerScore) {
    console.log("%cYou lose versus the computer, fail", "color:red");
  } else {
    console.log("%cIt's a tie game! boring...", "color:yellow");
  }


  let startOver = prompt("GAME OVER, press y to play again.").toUpperCase();

  

  while (startOver != "Y"){
    startOver = prompt("GAME OVER, press y to play again.").toUpperCase();
  }

  if (startOver === "Y"){
    location.reload();
  }


}

game();
