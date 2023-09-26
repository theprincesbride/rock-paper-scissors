const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    return(choices[(Math.floor(Math.random() * choices.length))])
};

let playerSelection = prompt("Please choose rock, paper or scissors.", "").toLowerCase();
let computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'scissors') 
    {return 'Congratulations, your opponent chose scissors.  You win!';}
    else if (playerSelection == 'rock' && computerSelection == 'paper')
    {return 'I\'m sorry, your opponent chose paper. You lose!';}
    else if (playerSelection == 'rock' && computerSelection == 'rock')
    {return 'Your opponent also chose rock. It\'s a tie!';}
    else if (playerSelection == 'scissors' && computerSelection == 'paper')
    {return 'Congratulations, your opponent chose paper.  You win!';}
    else if (playerSelection == 'scissors' && computerSelection == 'rock')
    {return 'I\'m sorry, your opponent chose rock. You lose!';}
    else if (playerSelection == 'scissors' && computerSelection == 'scissors')
    {return 'Your opponet also chose scissors. It\'s a tie!'}
    else if (playerSelection == 'paper' && computerSelection == 'rock')
    {return 'Congratulations, your opponent chose paper. You win!';}
    else if (playerSelection == 'paper' && computerSelection == 'scissors')
    {return 'I\'m sorry, your opponent chose scissors. You lose!';}
    else {return 'Your opponent also chose paper. It\'s a tie!'} 
}