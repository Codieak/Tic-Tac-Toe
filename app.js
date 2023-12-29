let boxes = document.querySelectorAll(".btn-box");
let resetBtn = document.querySelector(".btn-reset");
let newGameBtn = document.querySelector("#btn-new");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn = true; // Player 1 & Player 2

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    turn ? (box.innerText = "O") : (box.innerText = "X");
    turn = !turn;
    box.disabled = true;
    checkWinner();
  });
});

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (pattern of winPatterns) {
    let val1 = boxes[pattern[0]].innerText;
    let val2 = boxes[pattern[1]].innerText;
    let val3 = boxes[pattern[2]].innerText;
    if (val1 != "" && (val2 != "") & (val3 != "")) {
      if (val1 === val2 && val2 === val3) {
        showWinner(val1);
        break;
      }
    }
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = null;
  }
};

const resetGame = () => {
  turn = true;
  enableBoxes();
  msgContainer.classList.add("hide");
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
