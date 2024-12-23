const wordList = ["apple", "grape", "berry", "peach", "lemon"];  // Example word list
let targetWord = wordList[Math.floor(Math.random() * wordList.length)];
let attempts = 6;
const gameBoard = document.getElementById("game-board");

function createTiles() {
  for (let i = 0; i < attempts * 5; i++) {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    gameBoard.appendChild(tile);
  }
}
createTiles();

function submitGuess() {
  const input = document.getElementById("guess-input");
  const guess = input.value.toLowerCase();
  if (guess.length !== 5) {
    alert("Please enter a 5-letter word.");
    return;
  }
  
  const tiles = Array.from(document.querySelectorAll(".tile")).slice((6 - attempts) * 5);
  for (let i = 0; i < 5; i++) {
    tiles[i].textContent = guess[i];
    if (guess[i] === targetWord[i]) {
      tiles[i].classList.add("correct");
    } else if (targetWord.includes(guess[i])) {
      tiles[i].classList.add("present");
    } else {
      tiles[i].classList.add("absent");
    }
  }
  
  if (guess === targetWord) {
    document.getElementById("result").textContent = "Congratulations! You've guessed the word!";
    return;
  }
  
  attempts--;
  if (attempts === 0) {
    document.getElementById("result").textContent = `Game over! The word was: ${targetWord}`;
  }
  
  input.value = "";  // Clear the input for the next guess
}
