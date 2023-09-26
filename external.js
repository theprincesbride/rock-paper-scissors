const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    return(choices[(Math.floor(Math.random() * choices.length))])
};
function getPlayerChoice() {
    return prompt("Please choose rock, paper or scissors.").toLowerCase()
}


let playerSelection = getPlayerChoice()
let computerSelection = getComputerChoice();
let computerScore = 0;
let playerScore = 0;

//function game(playerScore, computerScore) {
  //  for (let playerScore = 0, let computerScore = 0; 
    //    playerScore < 5 && computerScore < 5; 
      //  playerScore++ || computerScore++) {}
//}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'scissors') 
    {(playerScore++); return 'Congratulations, your opponent chose scissors.  You win!';}
    else if (playerSelection == 'rock' && computerSelection == 'paper')
    {(computerScore++); return 'I\'m sorry, your opponent chose paper. You lose!';}
    else if (playerSelection == 'rock' && computerSelection == 'rock')
    {return 'Your opponent also chose rock. It\'s a tie!';}
    else if (playerSelection == 'scissors' && computerSelection == 'paper')
    {(playerScore++); return 'Congratulations, your opponent chose paper.  You win!';}
    else if (playerSelection == 'scissors' && computerSelection == 'rock')
    {(computerScore++); return 'I\'m sorry, your opponent chose rock. You lose!';}
    else if (playerSelection == 'scissors' && computerSelection == 'scissors')
    {return 'Your opponet also chose scissors. It\'s a tie!'}
    else if (playerSelection == 'paper' && computerSelection == 'rock')
    {(playerScore++); return 'Congratulations, your opponent chose paper. You win!';}
    else if (playerSelection == 'paper' && computerSelection == 'scissors')
    {(computerScore++); return 'I\'m sorry, your opponent chose scissors. You lose!';}
    else {return 'Your opponent also chose paper. It\'s a tie!'} 
}

