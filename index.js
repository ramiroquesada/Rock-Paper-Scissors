let opciones = ["ROCK", "PAPER", "SCISSORS"];

let playerScore = 0;

let computerScore = 0;

let playedRounds = 0;

let getComputerChoice = (randomNumber) => {
  return opciones[randomNumber];
};

let newGameButton = document.querySelector(".newGameButton");
let choicesButton = document.querySelectorAll(".choiceButton");
let chooseWeapon = document.querySelector(".chooseWeapon");
let gameMessage = document.querySelector(".message");
let computerPlays = document.querySelector(".computerPlays");
let score = document.querySelector(".score");
let winner = document.querySelector(".winner");
let gameTop = document.querySelector(".game-top");
let playedRoundsCounter = document.querySelector(".playedRounds");

let currentSelection;

function playRound(playerSelection) {
  playedRounds++;
  let randomNumber = Math.floor(Math.random() * opciones.length);

  let computerChoice = getComputerChoice(randomNumber);

  /* let playerSelection = prompt("Choose your weapon: (Rock, Paper or Scissors)").toUpperCase();

  while ( !opciones.includes(playerSelection)  )
  {

    playerSelection = prompt("Choose your weapon: (Rock, Paper or Scissors)").toUpperCase();
  }
   */

  gameMessage.innerHTML = ``;

  computerPlays.innerHTML = `Computer plays ${computerChoice}`;

  if (playerSelection === computerChoice) {
    gameMessage.innerHTML = `<span class="tiemsg">TIE!</span>`;
  } else if (playerSelection === "ROCK" && computerChoice === "SCISSORS") {
    gameMessage.innerHTML = `You <span class="winmsg">WIN!</span> ROCK beats SCISSORS!`;
    playerScore++;
  } else if (playerSelection === "ROCK" && computerChoice === "PAPER") {
    gameMessage.innerHTML = `You <span class="losemsg">LOSE!</span> PAPER beats ROCK!`;
    computerScore++;
  } else if (playerSelection === "PAPER" && computerChoice === "ROCK") {
    gameMessage.innerHTML = `You <span class="winmsg">WIN!</span> PAPER beats ROCK!`;
    playerScore++;
  } else if (playerSelection === "PAPER" && computerChoice === "SCISSORS") {
    gameMessage.innerHTML = `You <span class="losemsg">LOSE!</span> SCISSORS beats PAPER!`;
    computerScore++;
  } else if (playerSelection === "SCISSORS" && computerChoice === "PAPER") {
    gameMessage.innerHTML = `You <span class="winmsg">WIN!</span> SCISSORS beats PAPER!`;
    playerScore++;
  } else if (playerSelection === "SCISSORS" && computerChoice === "ROCK") {
    gameMessage.innerHTML = `You <span class="losemsg">LOSE!</span> SCISSORS beats ROCK!`;
    computerScore++;
  }

  if (playerScore === 5 || computerScore === 5) {
    choicesButton.forEach((choiceButton) => {
      choiceButton.classList.add("hidden");

      chooseWeapon.classList.add("hidden");
    });

    gameTop.classList.add("hidden");

    winner.classList.remove("hidden");

    newGameButton.classList.remove("hidden");
    newGameButton.innerHTML = `Play Again?`;

    if (playerScore === 5) {
      winner.innerHTML = `CONGRATULATIONS, YOU DESTROYED THE IA`;
      winner.classList.add("win");
    } else {
      winner.innerHTML = `NICE TRY HUMAN, ALGORITHMS WON THIS BATTLE`;
      winner.classList.add("lose");
    }

    return;
  }
}

function startNewGame() {
  playedRounds = 0;
  if (playedRounds === 0) {
    playedRoundsCounter.innerHTML = ``;
  }
  playerScore = 0;
  computerScore = 0;

  winner.classList.remove("lose");
  winner.classList.remove("win");

  gameTop.classList.remove("hidden");
  winner.innerHTML = ``;
  score.innerHTML = ``;
  gameMessage.innerHTML = ``;
  computerPlays.innerHTML = ``;

  newGameButton.classList.add("hidden");

  choicesButton.forEach((choiceButton) => {
    choiceButton.classList.remove("hidden");

    chooseWeapon.classList.remove("hidden");
  });
}

choicesButton.forEach((choiceButton) => {
  choiceButton.addEventListener("click", (e) => {
    let playerSelection = e.currentTarget.dataset.value.toUpperCase();

    playRound(playerSelection);

    playedRoundsCounter.innerHTML = `Rounds played: ${playedRounds}`;

    score.innerHTML = `Player ${playerScore} - ${computerScore} Computer`;
  });
});
newGameButton.addEventListener("click", startNewGame);
