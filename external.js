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

function playRound() {
let computerSelection = getComputerChoice();
//let playerSelection = getPlayerChoice();
//console.log(playerSelection);
  if (playerSelection === 'rock' && computerSelection === 'scissors')
  {scoreMessageOutput.textContent = playerWinRock; playerScore++; userScoreOutput.textContent = playerScore;}
  else if (playerSelection === 'rock' && computerSelection === 'paper')
  {scoreMessageOutput.textContent = computerWinRock; computerScore++; opponentScoreOutput.textContent = computerScore;}
  else if (playerSelection === 'rock' && computerSelection === 'rock')
  {scoreMessageOutput.textContent = tieRock;}
  else if (playerSelection === 'scissors' && computerSelection === 'paper')
  {scoreMessageOutput.textContent = playerWinScissors; playerScore++; userScoreOutput.textContent = playerScore;}
  else if (playerSelection === 'scissors' && computerSelection === 'rock')
  {scoreMessageOutput.textContent = computerWinRock; computerScore++; opponentScoreOutput.textContent = computerScore;}
  else if (playerSelection === 'scissors' && computerSelection === 'scissors')
  {scoreMessageOutput.textContent = tieScissors;}
  else if (playerSelection === 'paper' && computerSelection === 'rock')
  {scoreMessageOutput.textContent = playerWinPaper; playerScore++; userScoreOutput.textContent = playerScore;}
  else if (playerSelection === 'paper' && computerSelection === 'scissors')
  {scoreMessageOutput.textContent = computerWinScissors; computerScore++; opponentScoreOutput.textContent = computerScore;}
  else if (playerSelection === 'paper' && computerSelection === 'paper')
  {scoreMessageOutput.textContent = tiePaper;}
};



function game() {
  playRound();
  if (playerScore === 5)
    {
      scoreMessageOutput.textContent = playerWinGame;
      //let playAgainMessage = document.createElement("h2");
      //playAgainMessage.setAttribute("class", "play-again");
      //resetContainer.appendChild(playAgainMessage);
      playAgainMessage.textContent = "Do you want to reset the game & play again?";
      let resetButton = document.createElement("button");
      resetButton.setAttribute("class", "reset");
      playAgainMessage.appendChild(resetButton);
      resetButton.textContent = "Reset the game";
      resetButton.addEventListener('click', resetGame);

    }

  else if (computerScore === 5)
    {
      scoreMessageOutput.textContent = computerWinGame;
      //let playAgainMessage = document.createElement("h2");
      //playAgainMessage.setAttribute("class", "play-again");
      //resetContainer.appendChild(playAgainMessage);
      playAgainMessage.textContent = "Do you want to reset the game & play again?";
      let resetButton = document.createElement("button");
      resetButton.setAttribute("class", "reset");
      playAgainMessage.appendChild(resetButton);
      resetButton.textContent = "Reset the game";
      resetButton.addEventListener('click', resetGame);
    }
  }


//DOM

function playerChooseRock() {
  return playerSelection = 'rock';
};

function playerChoosePaper() {
  return playerSelection = 'paper';
};

function playerChooseScissors() {
  return playerSelection = 'scissors';
};

const rockBtn = document.querySelector(".button-choice-rock");
const paperBtn = document.querySelector(".button-choice-paper");
const scissorsBtn = document.querySelector(".button-choice-scissors");

rockBtn.addEventListener('click', playerChooseRock);
rockBtn.addEventListener('click', game);

paperBtn.addEventListener('click', playerChoosePaper);
paperBtn.addEventListener('click', game);

scissorsBtn.addEventListener('click', playerChooseScissors);
scissorsBtn.addEventListener('click', game);

const userScoreOutput = document.querySelector('.user-score-output');
userScoreOutput.textContent = playerScore;

const opponentScoreOutput = document.querySelector('.opponent-score-output');
opponentScoreOutput.textContent = computerScore;

const scoreMessageOutput = document.querySelector('.score-message-output');
scoreMessageOutput.textContent = "First to score 5 points wins the game!";

const playAgainMessage = document.querySelector('.play-again');
const resetContainer = document.querySelector(".reset-container");

function resetGame() {
  computerScore = 0;
  playerScore = 0;
  userScoreOutput.textContent = playerScore;
  opponentScoreOutput.textContent = computerScore;
  scoreMessageOutput.textContent = "First to score 5 points wins the game!";
  playAgainMessage.textContent = '';
  playAgainMessage.removeChild(resetButton);
 // resetContainer.removeChild(playAgainMessage);
}
