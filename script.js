const squareContainer = document.querySelector("#square-container");
const squares = document.querySelectorAll(".square");

let player = "X";
let firstPlayerScore = 0;
let secondPlayerScore = 0;
let result = false

const Gameboard = {
  board: Array(9),

  addMarkToBoard(position) {
    if (result === true ) {
      firstPlayerScore = 0
      secondPlayerScore = 0
      console.log(Gameboard.board)
      return;
    }
    if (Gameboard.board[position] !== undefined) return;
    if (player === "O") {
      Gameboard.board[position] = "O";
      player = "X";
    } else if (player === "X") {
      Gameboard.board[position] = "X";
      player = "O";
    }
  },

  checkTheBoard() {
    let lenghtOfRow = Gameboard.board.length / 3;
    let firstRow = Gameboard.board.slice(0, lenghtOfRow);
    let secondRow = Gameboard.board.slice(lenghtOfRow, lenghtOfRow * 2);
    let thirdRow = Gameboard.board.slice(lenghtOfRow * 2, lenghtOfRow * 3);

    if (
      (firstRow[0] === "X" && firstRow[1] === "X" && firstRow[2] === "X") ||
      (firstRow[0] === "O" && firstRow[1] === "O" && firstRow[2] === "O")
    ) {
      firstRow[0] === "X" ? (firstPlayerScore += 1) : (secondPlayerScore += 1);
      console.log(`This is the first player score: ${firstPlayerScore}`);
      console.log(`This is the second player score: ${secondPlayerScore}`);
      result = true
    } else if (
      (secondRow[0] === "X" && secondRow[1] === "X" && secondRow[2] === "X") ||
      (secondRow[0] === "O" && secondRow[1] === "O" && secondRow[2] === "O")
    ) {
      secondRow[0] === "X" ? (firstPlayerScore += 1) : (secondPlayerScore += 1);
      console.log(`This is the first player score: ${firstPlayerScore}`);
      console.log(`This is the second player score: ${secondPlayerScore}`);
      result = true
    } else if (
      (thirdRow[0] === "X" && thirdRow[1] === "X" && thirdRow[2] === "X") ||
      (thirdRow[0] === "O" && thirdRow[1] === "O" && thirdRow[2] === "O")
    ) {
      thirdRow[0] === "X" ? (firstPlayerScore += 1) : (secondPlayerScore += 1);
      console.log(`This is the first player score: ${firstPlayerScore}`);
      console.log(`This is the second player score: ${secondPlayerScore}`);
      result = true
    } else if (
      (firstRow[0] === "X" && secondRow[1] === "X" && thirdRow[2] === "X") ||
      (firstRow[0] === "O" && secondRow[1] === "O" && thirdRow[2] === "O")
    ) {
      firstRow[0] === "X" ? (firstPlayerScore += 1) : (secondPlayerScore += 1);
      console.log(`This is the first player score: ${firstPlayerScore}`);
      console.log(`This is the second player score: ${secondPlayerScore}`);
      result = true
    } else if (
      (firstRow[2] === "X" && secondRow[1] === "X" && thirdRow[0] === "X") ||
      (firstRow[2] === "O" && secondRow[1] === "O" && thirdRow[0] === "O")
    ) {
      firstRow[2] === "X" ? (firstPlayerScore += 1) : (secondPlayerScore += 1);
      console.log(`This is the first player score: ${firstPlayerScore}`);
      console.log(`This is the second player score: ${secondPlayerScore}`);
      result = true
    } else if (
      (firstRow[1] === "X" && secondRow[1] === "X" && thirdRow[1] === "X") ||
      (firstRow[1] === "O" && secondRow[1] === "O" && thirdRow[1] === "O")
    ) {
      firstRow[1] === "X" ? (firstPlayerScore += 1) : (secondPlayerScore += 1);
      console.log(`This is the first player score: ${firstPlayerScore}`);
      console.log(`This is the second player score: ${secondPlayerScore}`);
      result = true
    } else if (
      (firstRow[0] === "X" && secondRow[0] === "X" && thirdRow[0] === "X") ||
      (firstRow[0] === "O" && secondRow[0] === "O" && thirdRow[0] === "O")
    ) {
      firstRow[0] === "X" ? (firstPlayerScore += 1) : (secondPlayerScore += 1);
      console.log(`This is the first player score: ${firstPlayerScore}`);
      console.log(`This is the second player score: ${secondPlayerScore}`);
      result = true
    } else if (
      (firstRow[2] === "X" && secondRow[2] === "X" && thirdRow[2] === "X") ||
      (firstRow[2] === "O" && secondRow[2] === "O" && thirdRow[2] === "O")
    ) {
      firstRow[2] === "X" ? (firstPlayerScore += 1) : (secondPlayerScore += 1);
      console.log(`This is the first player score: ${firstPlayerScore}`);
      console.log(`This is the second player score: ${secondPlayerScore}`);
      result = true
    } else if (
      Gameboard.board.filter((element) => element !== undefined).length === 9
    ) {
      console.log("It is a tie!!!");
      console.log(`This is the first player score: ${firstPlayerScore}`);
      console.log(`This is the second player score: ${secondPlayerScore}`);
      result = true
    }
  },
};

const displayController = {
  clickTheBoard() {
    squares.forEach((square, index) => {
      square.addEventListener("click", () => {
        Gameboard.addMarkToBoard(index);
        this.displayGameboard();
        Gameboard.checkTheBoard();
      });
    });
  },

  displayGameboard() {
    for (let i = 0; i < 9; i++) {
      squares[i].textContent = Gameboard.board[i];
    }
  },
};

function playTheGame() {
  displayController.clickTheBoard();
}

playTheGame();
