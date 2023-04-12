const header = document.getElementById("header");
const settingsBtn = document.getElementById("settings");
const difficultyValue = document.getElementById("difficulity");
const text = document.getElementById("text");
const word = document.querySelector(".word");
const timeElement = document.querySelector(".time");
const scoreElement = document.querySelector(".score");
const endgameElement = document.querySelector(".end__game");
const words = [
  "sigh",
  "tense",
  "airplane",
  "ball",
  "pies",
  "juice",
  "warlike",
  "bad",
  "north",
  "dependent",
  "steer",
  "silver",
  "highfalutin",
  "superficial",
  "quince",
  "eight",
  "feeble",
  "admit",
  "drag",
  "loving",
  "grumble",
  "anxious",
  "jet",
  "sphere",
  "pastries",
  "beverage",
  "aggressive",
  "poor",
  "south",
  "reliant",
  "navigate",
  "gold",
  "grandiose",
  "shallow",
  "apricot",
  "nine",
  "frail",
  "confess",
  "pull",
  "affectionate",
  "moan",
  "worried",
  "aircraft",
  "orb",
  "delicious",
  "drink",
  "combative",
  "negative",
  "east",
  "independent",
  "guide",
  "platinum",
  "ostentatious",
  "superficial",
  "pear",
  "ten",
  "fragile",
  "acknowledge",
  "tug",
  "fond",
  "mutter",
];

let difficulty = localStorage.getItem("difficulty") || "medium";
const timeInterval = setInterval(updateTime, 1000);

let randomWord;
let score = 0;
let time = 10;

settingsBtn.addEventListener("click", () => {
  header.classList.toggle("hide");
});

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function addWordToDom() {
  randomWord = getRandomWord();
  word.innerText = randomWord;
}

function updateScore() {
  score++;
  scoreElement.innerText = score;
}

function updateTime() {
  time--;
  timeElement.innerText = time + "s";
  if (time === 0) {
    clearInterval(timeInterval);
    gameOver();
  }
}

function gameOver() {
  endgameElement.innerHTML = `
    <h1>Time ran out</h1>
    <p>Your final score is ${score}</p>
    <button class="btn" onclick="history.go(0)">Play Again</button>
    `;
  endgameElement.style.display = "flex";
}

function addWordToDom() {
  randomWord = getRandomWord();
  word.innerText = randomWord;
}

text.addEventListener("input", (e) => {
  if (randomWord === e.target.value) {
    e.target.value = "";
    addWordToDom();
    updateScore();
    if (difficulty === "hard") time += 2;
    else if (difficulty === "medium") time += 3;
    else time += 5;
    updateTime();
  }
});

difficultyValue.addEventListener("change", (e) => {
  difficulty = e.target.value;
  localStorage.setItem("difficulty", difficulty);
});

// Init
difficultyValue.value = difficulty;
addWordToDom();
text.focus();
