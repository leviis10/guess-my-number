"use strict";

// Element selector
const guessEl = document.querySelector(".guess");
const checkBtnEl = document.querySelector(".check");
const againBtnEl = document.querySelector(".again");
const messageEl = document.querySelector(".message");
const scoreEl = document.querySelector(".score");
const highScoreEl = document.querySelector(".highscore");
const secretNumberEl = document.querySelector(".number");

// Initial state
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
let isPlaying = true;

// Function
function displayMessage(message) {
  messageEl.textContent = message;
}

// Check button handler
checkBtnEl.addEventListener("click", function () {
  if (!isPlaying) {
    return;
  }

  const guessNumber = +guessEl.value;
  if (guessNumber === 0) {
    displayMessage("⛔ No number!");
  } else if (guessNumber === secretNumber) {
    displayMessage("🎉 Correct Number");
    isPlaying = false;
    document.body.style.backgroundColor = "#60b347";
    secretNumberEl.style.width = "30rem";
    secretNumberEl.textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      highScoreEl.textContent = highScore;
    }
  } else if (guessNumber !== secretNumber) {
    guessNumber > secretNumber
      ? displayMessage("📈 Too high!")
      : displayMessage("📉 Too low!");

    score--;
    if (score === 0) {
      isPlaying = false;
      displayMessage("💥 You lost the game!");
    }
  }

  scoreEl.textContent = score;
});

// Play again button handler
againBtnEl.addEventListener("click", function () {
  // Game state
  score = 20;
  isPlaying = true;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // Visual
  document.body.style.backgroundColor = "#222";
  secretNumberEl.style.width = "15rem";
  secretNumberEl.textContent = "?";
  guessEl.value = "";
  displayMessage("Start guessing...");
  scoreEl.textContent = score;
});
