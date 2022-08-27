let opciones = ["Rock", "Paper", "Scissors"];




let randomChoice = Math.floor(Math.random() * opciones.length);



let getComputerChoice = ()  => {
    return opciones[randomChoice].toUpperCase();
}



let playerSelection = prompt().toUpperCase();

function playRound(playerSelection, computerChoice){

    console.log(playerSelection);
    console.log(computerChoice);
    if (playerSelection === computerChoice){
        console.log ("Tie");
    }

    else if (playerSelection === "ROCK" && computerChoice === "SCISSORS"){
        console.log ("You WIN! ROCK beats SCISSORS!");
    }
    else if (playerSelection === "ROCK" && computerChoice === "PAPER"){
        console.log ("You LOSE! PAPER beats ROCK!");
    }

    else if (playerSelection === "PAPER" && computerChoice === "ROCK"){
        console.log ("You WIN! PAPER beats ROCK!");
    }    
    else if (playerSelection === "PAPER" && computerChoice === "SCISSORS"){
        console.log ("You LOSE! SCISSORS beats PAPER!")
    }


    else if (playerSelection === "SCISSORS" && computerChoice === "PAPER"){
        console.log ("You WIN! SCISSORS beats PAPER!");
    }

    else if (playerSelection === "SCISSORS" && computerChoice === "ROCK"){
        console.log ("You LOSE! SCISSORS beats ROCK!");
    }



}

/*
playRound(playerSelection, getComputerChoice());
*/

function game(){

    


}