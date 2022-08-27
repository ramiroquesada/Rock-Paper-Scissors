let opciones = ["Rock", "Paper", "Scissors"];




let randomChoice = Math.floor(Math.random() * opciones.length);



let getComputerChoice = ()  => {
    return opciones[randomChoice];
}




