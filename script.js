//scores
let showPlayerScore = document.querySelector(".player-score span");
let showComputerScore = document.querySelector(".computer-score span");

//choices
let choicesContainer = document.querySelector(".choices");
let rock = document.querySelector(".choice:first-child");
let paper = document.querySelector(".choice:nth-child(2)");
let scissors = document.querySelector(".choice:nth-child(3)");

//result
let result = document.querySelector(".result p");

/*===========LOGIC HERE==========*/
let gampePlayChoices = ["Rock", "Paper", "Scissors"];
let randomNum; //random number
let computerChoice; //computer's random play

choicesContainer.addEventListener("click", StartGame);

//computer's gameplay func
function computersPlay() {
  randomNum = Math.floor(Math.random() * gampePlayChoices.length);
  computerChoice = gampePlayChoices[randomNum].toLowerCase();
  console.log(computerChoice);
}

function StartGame(e) {
  let playerChoice = e.target.textContent.toLowerCase();
  console.log(playerChoice);

  if (playerChoice === "paper" && computerChoice === "rock") {
    console.log("player wins");
  }

  computersPlay();
}
