let opciones = ["ROCK", "PAPER", "SCISSORS"];

let playerScore = 0;

let computerScore = 0;

let getComputerChoice = (randomNumber) => {
    return opciones[randomNumber];
  };

console.log("NEW GAME, BEST OF 5");

function playRound(playerSelection) {

  let randomNumber = Math.floor(Math.random() * opciones.length);

  let computerChoice = getComputerChoice(randomNumber);

  /* let playerSelection = prompt("Choose your weapon: (Rock, Paper or Scissors)").toUpperCase();

  while ( !opciones.includes(playerSelection)  )
  {

    playerSelection = prompt("Choose your weapon: (Rock, Paper or Scissors)").toUpperCase();
  }
   */

  
  console.log("Computer plays: " + computerChoice);

  if (playerSelection === computerChoice) {
    console.log("Tie");
  } else if (playerSelection === "rock" && computerChoice === "SCISSORS") {
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




let newGameButton = document.querySelector(".newGameButton");
let choicesButton = document.querySelectorAll(".choiceButton")

let currentSelection ;

function saveSelection(e){
  return  e.currentTarget.dataset.value;
}



function startNewGame(){
  newGameButton.classList.add("hidden")
  choicesButton.forEach(choiceButton => {
    choiceButton.classList.remove("hidden");
    
    choiceButton.addEventListener("click", (e) =>{

      let eleccion = e.currentTarget.dataset.value.toUpperCase();
      console.log(eleccion);
     
      playRound(eleccion);




    });
    
})
  
  
  

}

newGameButton.addEventListener("click", startNewGame);


