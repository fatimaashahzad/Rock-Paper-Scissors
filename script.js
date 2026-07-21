const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const resultText = document.getElementById("result");
const playerScoreText = document.getElementById("playerScore");
const computerScoreText = document.getElementById("computerScore");
const computerChoiceText = document.getElementById("computerChoiceDisplay");
const startScreen=document.getElementById("startScreen");
const gameScreen=document.getElementById("gameScreen");
const bestOf3Button=document.getElementById("bestOf3button");
const bestOf5Button=document.getElementById("bestOf5button");

let winsNeeded = 0;
let playerScore = 0;
let computerScore = 0;

const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  return choices[choice];
}

function playRound(playerChoice) {
  let computerChoice = getComputerChoice();
  computerChoiceText.textContent = "Computer's choice: " + computerChoice;

  if (playerChoice === computerChoice) {
    resultText.textContent = "It's a tie!";
  } 
  else if ((playerChoice=="rock" && computerChoice=="scissors") ||
     (playerChoice=="paper" && computerChoice=="rock") ||
     (playerChoice=="scissors" && computerChoice=="paper")) {
        resultText.textContent = "Player Wins!";
        playerScore++;
        playerScoreText.textContent = playerScore;
  } 
  else {
    resultText.textContent = "Computer Wins!";
    computerScore++;
    computerScoreText.textContent = computerScore;
  }
}

rockButton.onclick = function() {
  playRound("rock");
};

paperButton.onclick = function() {
  playRound("paper");
};

scissorsButton.onclick = function() {
  playRound("scissors");
};

bestOf3Button.onclick = function() {
  winsNeeded = 2;
  startScreen.style.display = "none";
  gameScreen.style.display = "block";
};

bestOf5Button.onclick = function() {
  winsNeeded = 3;
  startScreen.style.display = "none";
  gameScreen.style.display = "block";
};