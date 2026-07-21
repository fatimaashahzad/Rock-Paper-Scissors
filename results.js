const winnerText=document.getElementById("winnerText");
const playAgainButton=document.getElementById("playAgain");

let winner = localStorage.getItem("winner");

winnerText.textContent=winner+" Wins the Match!";

playAgainButton.onclick=function(){
    window.location.href = "index.html";
}