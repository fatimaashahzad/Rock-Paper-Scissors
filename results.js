const winnerText = document.getElementById("winnerText");
const tauntText = document.getElementById("tauntText");
const playAgainButton = document.getElementById("playAgain");

let winner = localStorage.getItem("winner");
let finalScore = localStorage.getItem("finalScore");

winnerText.textContent = winner + " Wins the Match! (" + finalScore + ")";

const playerLostTaunts = [
  "Rough one. The computer doesn't even have hands.",
  "Statistically embarrassing.",
  "Maybe try checkers next time.",
  "The computer generated a random number better than you."
];

const computerLostTaunts = [
  "The computer will remember this.",
  "A machine has been humbled.",
  "Somewhere, a CPU is questioning its choices.",
  "You beat pure randomness. Feel proud, briefly."
];

if (winner === "Player") {
  let randomIndex = Math.floor(Math.random() * computerLostTaunts.length);
  tauntText.textContent = computerLostTaunts[randomIndex];
} else {
  let randomIndex = Math.floor(Math.random() * playerLostTaunts.length);
  tauntText.textContent = playerLostTaunts[randomIndex];
}

playAgainButton.onclick = function() {
    window.location.href = "index.html";
}