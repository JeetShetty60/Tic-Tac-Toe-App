let box = document.querySelectorAll(".box");
let turnO = true;
let msg = document.querySelector("p");
let msgBox = document.querySelector(".message-container")
let newGame = document.querySelector(".new-game");

newGame.style.display = "none";

const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

box.forEach((box) => {
    box.addEventListener("click", function () {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.style.pointerEvents = "none";  // Disable further clicks
        checkWinner();
    });
});

const checkWinner = () => {
    for (const patterns of winningPatterns) {
        let pos1Val = box[patterns[0]].innerText;
        let pos2Val = box[patterns[1]].innerText;
        let pos3Val = box[patterns[2]].innerText;

        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                if (!turnO) {
                    msg.innerText = "Player O wins";
                } else {
                    msg.innerText = "Player X wins";
                }
                newGame.style.display = "grid";
                newGame.style.transition = "1s all";
                disableAllBoxes();  // Disable all boxes
                return;  // Exit the function
            }
        }
    }
};

const disableAllBoxes = () => {
    box.forEach((box) => {
        box.style.pointerEvents = "none";  // Prevent further clicks
    });
};

const enableAllBoxes = () => {
    box.forEach((box) => {
        box.innerText = "";  // Clear text
        box.style.pointerEvents = "auto";  // Enable clicks
    });
};

const resetGame = () => {
    enableAllBoxes();  // Reset and enable all boxes
    turnO = true;  // Reset turn to Player O
    msg.innerText = "";  // Clear any messages
    newGame.style.display = "none";  // Hide the "New Game" button
};

// Event listener for the "New Game" button
newGame.addEventListener('click', () => {
    resetGame();
});
const fadeInMessage = () => {
    msgBox.classList.add('show');  // Add the class to trigger fade-in
};

// Event listener for the "New Game" button
newGame.addEventListener('click', () => {
    resetGame();
});