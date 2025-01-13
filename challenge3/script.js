"use strict";

function playGame(choice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById("result").innerHTML = `
    You choose: ${choice} <br>
    Computer choose: ${computerChoice} <br>
  `;

  if (choice === computerChoice) {
    document.getElementById("result").innerHTML += "It is a draw!";
  } else if (
    (choice === "rock" && computerChoice === "scissors") ||
    (choice === "paper" && computerChoice === "rock") ||
    (choice === "scissors" && computerChoice === "paper")
  ) {
    document.getElementById("result").innerHTML += "You win!";
  } else {
    document.getElementById("result").innerHTML += "You lost!";
  }
}
