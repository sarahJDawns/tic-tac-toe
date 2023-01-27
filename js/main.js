//* tic tac toe
const playerOne = "X";
const playerTwo = "O";
let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

const cells = document.querySelectorAll(".cell");
const turn = document.querySelector(".turn");
const endGame = document.querySelector(".endgame");

startGame();

function startGame() {
  cells.forEach((cell, index) => {
    cell.innerHTML = "";
    cell.addEventListener("click", handleClick.bind(null, cell, index));
  });
  endGame.style.display = "none";
  turn.innerHTML = "Player 1";
}

function handleClick(cell, index) {
  const cellValue = cell.innerHTML;
  if (cellValue === "") {
    if (turn.innerHTML === "Player 1") {
      cell.innerHTML = playerOne;
      turn.innerHTML = "Player 2";
      board[Math.floor(index / 3)][index % 3] = playerOne;
    } else {
      cell.innerHTML = playerTwo;
      turn.innerHTML = "Player 1";
      board[Math.floor(index / 3)][index % 3] = playerTwo;
    }
  }
  cell.removeEventListener("click", handleClick);
  checkWinner();
}

function checkWinner() {
  for (let i = 0; i < 3; i++) {
    if (
      board[i][0] === board[i][1] &&
      board[i][0] === board[i][2] &&
      board[i][0] !== ""
    ) {
      showResult(board[i][0]);
      return;
    }
  }
  for (let i = 0; i < 3; i++) {
    if (
      board[0][i] === board[1][i] &&
      board[0][i] === board[2][i] &&
      board[0][i] !== ""
    ) {
      showResult(board[0][i]);
      return;
    }
  }
  if (
    board[0][0] === board[1][1] &&
    board[0][0] === board[2][2] &&
    board[0][0] !== ""
  ) {
    showResult(board[0][0]);
    return;
  }
  if (
    board[0][2] === board[1][1] &&
    board[0][2] === board[2][0] &&
    board[0][2] !== ""
  ) {
    showResult(board[0][2]);
    return;
  }
  let count = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] != "") {
        count++;
      }
    }
  }
  if (count == 9) {
    showResult("Tie");
    return;
  }
}

function showResult(symbol) {
  if (symbol === playerOne) {
    endGame.innerHTML = "Player 1 Win!";
  } else if (symbol === playerTwo) {
    endGame.innerHTML = "Player 2 Win!";
  } else {
    endGame.innerHTML = "Tie!";
  }
  endGame.style.display = "flex";
  endGame.style.justifyContent = "center";
  endGame.style.alignItems = "center";
}

function restartGame() {
  endGame.style.display = "none";
  turn.innerHTML = "Player 1";

  board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  startGame();
}
