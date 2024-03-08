const agianBtn = document.querySelector(".again-btn");
const resultNum = document.querySelector(".agains .resultNum");
const theInputguess = document.querySelector(".guess-input");
const checkBtn = document.querySelector(".check-btn");
const message = document.querySelector(".message");
const scoreCount = document.querySelector(".score");
const highScore = document.querySelector(".highscore");
let secretNumber = Math.ceil(Math.random() * 20);
let score = scoreCount.textContent;
let scoreHigher = highScore.textContent;
checkBtn.addEventListener("click", () => {
    checkNumber();
    theInputguess.value = "";
});
const displayMessage = (msg) => {
    return message.textContent = msg;
}
function checkNumber() {
    const guess =  Number(theInputguess.value);
    if(!guess) {
        displayMessage("No Number!");
    } else if(guess === secretNumber) {
        resultNum.textContent = secretNumber;
        displayMessage("Correct number!");
        document.body.style.backgroundColor = "#60b347";
        resultNum.style.width = "10rem";
        if(score > scoreHigher) {
            scoreHigher = score;
            highScore.textContent = scoreHigher;
        }
    } else if(guess !== secretNumber ) {
        if(score > 1) {
            guess > secretNumber ? displayMessage("Too high!") : displayMessage("Too low!");
            score--
            scoreCount.textContent = score;
        } else {
            displayMessage("You lost the game!");
        }
    }
}
agianBtn.addEventListener("click", () => {
    restGuess();
})
function restGuess() {
    secretNumber = Math.ceil(Math.random() * 20);
    displayMessage("Start guessing...");
    document.body.style.backgroundColor = "#222";
    resultNum.textContent = "?";
    score = 20;
    highscore = 0;
    scoreCount.textContent = score;
    highScore.textContent = highscore;
    resultNum.style.width = "100px";
}




