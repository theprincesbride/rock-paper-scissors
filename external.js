const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

let playerWinRock = `Congratulations, your opponent chose scissors.  You score a point!`;
let playerWinScissors = `Congratulations, your opponent chose paper.  You score a point!`;
let playerWinPaper = `Congratulations, your opponent chose rock. You score a point!`;
let computerWinRock = `I'm sorry, your opponent chose rock. Your opponent scores a point!`;
let computerWinScissors = `I'm sorry, your opponent chose scissors. Your opponent scores a point!`;
let computerWinPaper = `I'm sorry, your opponent chose paper. Your opponent scores a point!`;
let tieRock = `Your opponent also chose rock. Nobody scores a point.`;
let tieScissors = `Your opponet also chose scissors. Nobody scores a point.`;
let tiePaper = `Your opponent also chose paper. Nobody scores a point.`;
let playerWin = [playerWinRock, playerWinScissors, playerWinPaper];
let computerWin = [computerWinRock, computerWinScissors, computerWinPaper];
let tie = [tieRock, tieScissors, tiePaper];
let playerWinGame = `Congratulations! You scored 5 points against your opponent!  You win!`;
let computerWinGame = `I'm sorry, your opponent scored 5 points.  You lost!`;

function getComputerChoice() {
  return(choices[(Math.floor(Math.random() * choices.length))])
};

function getPlayerChoice() {
  return prompt("Please choose rock, paper or scissors. Try to reach a score of 5 against the computer.").toLowerCase()
};


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



function playRound() {
let computerSelection = getComputerChoice();
console.log(computerSelection);
//let playerSelection;
let playerSelection = getPlayerChoice();
console.log(playerSelection);
  if (playerSelection === 'rock' && computerSelection === 'scissors')
  {alert(playerWinRock); playerScore++;}
  else if (playerSelection === 'rock' && computerSelection === 'paper')
  {alert(computerWinRock); computerScore++;}
  else if (playerSelection === 'rock' && computerSelection === 'rock')
  {alert(tieRock);}
  else if (playerSelection === 'scissors' && computerSelection === 'paper')
  {alert(playerWinScissors); playerScore++;}
  else if (playerSelection === 'scissors' && computerSelection === 'rock')
  {alert(computerWinRock); computerScore++;}
  else if (playerSelection === 'scissors' && computerSelection === 'scissors')
  {alert(tieScissors);}
  else if (playerSelection === 'paper' && computerSelection === 'rock')
  {alert(playerWinPaper); playerScore++;}
  else if (playerSelection === 'paper' && computerSelection === 'scissors')
  {alert(computerWinScissors); computerScore++;}
  else if (playerSelection === 'paper' && computerSelection === 'paper')
  {alert(tiePaper);}
};



function game() {
 for ( ; playerScore < 5 || computerScore < 5; ) {
  playRound();}
 if (playerScore === 5)
 {return playerWinGame;}
 else if (computerScore === 5)
 {return computerWinGame;}
}

//DOM

function playerChooseRock() {
  playerSelection = 'rock';
  console.log(playerSelection);
};

function playerChoosePaper() {
  playerSelection = 'paper';
  console.log(playerSelection);
};

function playerChooseScissors() {
  playerSelection = 'scissors';
  console.log(playerSelection);
};

const rockBtn = document.querySelector(".button-choice-rock");
const paperBtn = document.querySelector(".button-choice-paper");
const scissorsBtn = document.querySelector(".button-choice-scissors");

// rockBtn.addEventListener('click', game);
// rockBtn.addEventListener('click', playerChooseRock);

// paperBtn.addEventListener('click', game);
// paperBtn.addEventListener('click', playerChoosePaper);

// scissorsBtn.addEventListener('click', game);
// scissorsBtn.addEventListener('click', playerChooseScissors);
