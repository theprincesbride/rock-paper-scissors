const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    return(choices[(Math.floor(Math.random() * choices.length))])
};

let playerSelection = prompt("Please choose rock, paper or scissors.", "").toLowerCase();
let computerSelection = getComputerChoice();

