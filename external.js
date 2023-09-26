const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    return(choices[(Math.floor(Math.random() * choices.length))])
};
function getPlayerChoice() {
    return prompt("Please choose rock, paper or scissors. Try to reach a score of 5 against the computer.").toLowerCase()
};


let playerSelection = getPlayerChoice()
let computerSelection = getComputerChoice();
let playerWinRock = 'Congratulations, your opponent chose scissors.  You win!';
let playerWinScissors = 'Congratulations, your opponent chose paper.  You win!';
let playerWinPaper = 'Congratulations, your opponent chose paper. You win!';
let computerWinRock = 'I\'m sorry, your opponent chose rock. You lose!';
let computerWinScissors = 'I\'m sorry, your opponent chose scissors. You lose!';
let computerWinPaper = 'I\'m sorry, your opponent chose paper. You lose!';
let tieRock = 'Your opponent also chose rock. It\'s a tie!';
let tieScissors = 'Your opponet also chose scissors. It\'s a tie!';
let tiePaper = 'Your opponent also chose paper. It\'s a tie!';
let playerWin = [playerWinRock, playerWinScissors, playerWinPaper];
let computerWin = [computerWinRock, computerWinScissors, computerWinPaper];
let tie = [tieRock, tieScissors, tiePaper];



//this is for my plain if...else game format
//function playRound(playerSelection, computerSelection) {
    //if (playerSelection == 'rock' && computerSelection == 'scissors') 
    //{(playerScore++); return 'Congratulations, your opponent chose scissors.  You win!';}
    //else if (playerSelection == 'rock' && computerSelection == 'paper')
    //{(computerScore++); return 'I\'m sorry, your opponent chose paper. You lose!';}
    //else if (playerSelection == 'rock' && computerSelection == 'rock')
    //{return 'Your opponent also chose rock. It\'s a tie!';}
    //else if (playerSelection == 'scissors' && computerSelection == 'paper')
    //{(playerScore++); return 'Congratulations, your opponent chose paper.  You win!';}
    //else if (playerSelection == 'scissors' && computerSelection == 'rock')
    //{(computerScore++); return 'I\'m sorry, your opponent chose rock. You lose!';}
    //else if (playerSelection == 'scissors' && computerSelection == 'scissors')
    //{return 'Your opponet also chose scissors. It\'s a tie!'}
    //else if (playerSelection == 'paper' && computerSelection == 'rock')
    //{(playerScore++); return 'Congratulations, your opponent chose paper. You win!';}
    //else if (playerSelection == 'paper' && computerSelection == 'scissors')
    //{(computerScore++); return 'I\'m sorry, your opponent chose scissors. You lose!';}
    //else {return 'Your opponent also chose paper. It\'s a tie!'} 
//}

//this is my plain if...else game format
//function game(playerScore, computerScore) {
  //if (playerScore < 5 || computerScore < 5)
  //{getPlayerChoice(); getComputerChoice(); 
    //playRound(playerSelection, computerSelection);}
    //else if (playerScore == 5)
    //{alert('Congratulations! You win!')}
    //else {alert('I\'m sorry, you lost!')}
//}


function playRound(playerSelection, computerSelection) {
  if (playerSelection == 'rock' && computerSelection == 'scissors') 
  {return playerWinRock;}
  else if (playerSelection == 'rock' && computerSelection == 'paper')
  {return computerWinPaper;}
  else if (playerSelection == 'rock' && computerSelection == 'rock')
  {return tieRock;}
  else if (playerSelection == 'scissors' && computerSelection == 'paper')
  {return playerWinScissors;}
  else if (playerSelection == 'scissors' && computerSelection == 'rock')
  {return computerWinRock;}
  else if (playerSelection == 'scissors' && computerSelection == 'scissors')
  {return tieScissors;}
  else if (playerSelection == 'paper' && computerSelection == 'rock')
  {return playerWinPaper;}
  else if (playerSelection == 'paper' && computerSelection == 'scissors')
  {return computerWinScissors;}
  else {return tiePaper} 
};

function game() {
  for (let playerScore = 0, computerScore = 0; 
       playerScore < 5 || computerScore < 5;) {
      alert(`The score is ${playerScore} to ${computerScore}`); 
      getComputerChoice();
      getPlayerChoice();
      playRound(playerSelection, computerSelection);
      if (computerScore == 5) {alert(`I'm sorry, you lost. The final score was ${playerScore} to ${computerScore}.`) 
      break;}
    else if (playerScore == 5) {alert(`Congratulations, you won! The final score was ${playerScore} to ${computerScore}.`);
      break;}
      else {continue;}
    }
      
   };

