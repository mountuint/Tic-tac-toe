const squareContainer = document.querySelector("#square-container");
const squares = document.querySelectorAll(".square");
const playerContainer = document.querySelector("#player-container");
const firstPlayer = document.querySelector("#first-player");
const secondPlayer = document.querySelector("#second-player");
const turnIndicator = document.querySelector("#turn-indicator");
const startButton = document.querySelector("#start-button");

let player = "X";
let firstPlayerScore = 0;
let secondPlayerScore = 0;
let result = false;

const Gameboard = {
  board: Array(9),

  startTheGame() {
    startButton.addEventListener("click", () => {
      if (firstPlayer.value !== "" && secondPlayer.value !== "") {
        turnIndicator.textContent = `${firstPlayer.value}'s turn!`;
      }
    });
  },

  addMarkToBoard(position) {
    if (result === true) {
      firstPlayerScore = 0;
      secondPlayerScore = 0;
      console.log(Gameboard.board);
      return;
    }
    if (Gameboard.board[position] !== undefined) return;
    if (player === "O") {
      Gameboard.board[position] = "O";
      turnIndicator.textContent = `${firstPlayer.value}'s turn!`;
      player = "X";
    } else if (player === "X") {
      Gameboard.board[position] = "X";
      turnIndicator.textContent = `${secondPlayer.value}'s turn!`;
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
      if (firstPlayerScore === 1) {
        turnIndicator.textContent = `${firstPlayer.value} wins!`;
      } else {
        turnIndicator.textContent = `${secondPlayer.value} wins!`;
        secondPlayerScore = 0;
      }
      result = true;
    } else if (
      (secondRow[0] === "X" && secondRow[1] === "X" && secondRow[2] === "X") ||
      (secondRow[0] === "O" && secondRow[1] === "O" && secondRow[2] === "O")
    ) {
      secondRow[0] === "X" ? (firstPlayerScore += 1) : (secondPlayerScore += 1);
      if (firstPlayerScore === 1) {
        turnIndicator.textContent = `${firstPlayer.value} wins!`;
      } else {
        turnIndicator.textContent = `${secondPlayer.value} wins!`;
        secondPlayerScore = 0;
      }
      result = true;
    } else if (
      (thirdRow[0] === "X" && thirdRow[1] === "X" && thirdRow[2] === "X") ||
      (thirdRow[0] === "O" && thirdRow[1] === "O" && thirdRow[2] === "O")
    ) {
      thirdRow[0] === "X" ? (firstPlayerScore += 1) : (secondPlayerScore += 1);
      if (firstPlayerScore === 1) {
        turnIndicator.textContent = `${firstPlayer.value} wins!`
      } else {
        turnIndicator.textContent = `${secondPlayer.value} wins!`
        secondPlayerScore = 0
      }
      result = true;
    } else if (
      (firstRow[0] === "X" && secondRow[1] === "X" && thirdRow[2] === "X") ||
      (firstRow[0] === "O" && secondRow[1] === "O" && thirdRow[2] === "O")
    ) {
      firstRow[0] === "X" ? (firstPlayerScore += 1) : (secondPlayerScore += 1);
      if (firstPlayerScore === 1) {
        turnIndicator.textContent = `${firstPlayer.value} wins!`
      } else {
        turnIndicator.textContent = `${secondPlayer.value} wins!`
        secondPlayerScore = 0
      }
      result = true;
    } else if (
      (firstRow[2] === "X" && secondRow[1] === "X" && thirdRow[0] === "X") ||
      (firstRow[2] === "O" && secondRow[1] === "O" && thirdRow[0] === "O")
    ) {
      firstRow[2] === "X" ? (firstPlayerScore += 1) : (secondPlayerScore += 1);
      if (firstPlayerScore === 1) {
        turnIndicator.textContent = `${firstPlayer.value} wins!`
      } else {
        turnIndicator.textContent = `${secondPlayer.value} wins!`
        secondPlayerScore = 0
      }
      result = true;
    } else if (
      (firstRow[1] === "X" && secondRow[1] === "X" && thirdRow[1] === "X") ||
      (firstRow[1] === "O" && secondRow[1] === "O" && thirdRow[1] === "O")
    ) {
      firstRow[1] === "X" ? (firstPlayerScore += 1) : (secondPlayerScore += 1);
      if (firstPlayerScore === 1) {
        turnIndicator.textContent = `${firstPlayer.value} wins!`
      } else {
        turnIndicator.textContent = `${secondPlayer.value} wins!`
        secondPlayerScore = 0
      }
      result = true;
    } else if (
      (firstRow[0] === "X" && secondRow[0] === "X" && thirdRow[0] === "X") ||
      (firstRow[0] === "O" && secondRow[0] === "O" && thirdRow[0] === "O")
    ) {
      firstRow[0] === "X" ? (firstPlayerScore += 1) : (secondPlayerScore += 1);
      if (firstPlayerScore === 1) {
        turnIndicator.textContent = `${firstPlayer.value} wins!`
      } else {
        turnIndicator.textContent = `${secondPlayer.value} wins!`
        secondPlayerScore = 0
      }
      result = true;
    } else if (
      (firstRow[2] === "X" && secondRow[2] === "X" && thirdRow[2] === "X") ||
      (firstRow[2] === "O" && secondRow[2] === "O" && thirdRow[2] === "O")
    ) {
      firstRow[2] === "X" ? (firstPlayerScore += 1) : (secondPlayerScore += 1);
      if (firstPlayerScore === 1) {
        turnIndicator.textContent = `${firstPlayer.value} wins!`
      } else {
        turnIndicator.textContent = `${secondPlayer.value} wins!`
        secondPlayerScore = 0
      }
      result = true;
    } else if (
      Gameboard.board.filter((element) => element !== undefined).length === 9
    ) {
      turnIndicator.textContent = "It is a tie!!!"
      result = true;
    }
  },

  playTheGame() {
    this.startTheGame();
    displayController.clickTheBoard();
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

Gameboard.playTheGame();
