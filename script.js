const Gameboard = {
  board: Array(9),
};

function addMarkToBoard(player, position) {
  if (Gameboard.board[position] !== undefined) return;
  if (player === "O") {
    Gameboard.board[position] = "O";
  } else if (player === "X") {
    Gameboard.board[position] = "X";
  }
}

let firstPlayerScore = 0;
let secondPlayerScore = 0;

function checkTheBoard() {
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
    return true;
  } else if (
    (secondRow[0] === "X" && secondRow[1] === "X" && secondRow[2] === "X") ||
    (secondRow[0] === "O" && secondRow[1] === "O" && secondRow[2] === "O")
  ) {
    secondRow[0] === "X" ? (firstPlayerScore += 1) : (secondPlayerScore += 1);
    console.log(`This is the first player score: ${firstPlayerScore}`);
    console.log(`This is the second player score: ${secondPlayerScore}`);
    return true;
  } else if (
    (thirdRow[0] === "X" && thirdRow[1] === "X" && thirdRow[2] === "X") ||
    (thirdRow[0] === "O" && thirdRow[1] === "O" && thirdRow[2] === "O")
  ) {
    thirdRow[0] === "X" ? (firstPlayerScore += 1) : (secondPlayerScore += 1);
    console.log(`This is the first player score: ${firstPlayerScore}`);
    console.log(`This is the second player score: ${secondPlayerScore}`);
    return true;
  } else if (
    (firstRow[0] === "X" && secondRow[1] === "X" && thirdRow[2] === "X") ||
    (firstRow[0] === "O" && secondRow[1] === "O" && thirdRow[2] === "O")
  ) {
    firstRow[0] === "X" ? (firstPlayerScore += 1) : (secondPlayerScore += 1);
    console.log(`This is the first player score: ${firstPlayerScore}`);
    console.log(`This is the second player score: ${secondPlayerScore}`);
    return true;
  } else if (
    (firstRow[2] === "X" && secondRow[1] === "X" && thirdRow[0] === "X") ||
    (firstRow[2] === "O" && secondRow[1] === "O" && thirdRow[0] === "O")
  ) {
    firstRow[2] === "X" ? (firstPlayerScore += 1) : (secondPlayerScore += 1);
    console.log(`This is the first player score: ${firstPlayerScore}`);
    console.log(`This is the second player score: ${secondPlayerScore}`);
    return true;
  } else if (
    (firstRow[1] === "X" && secondRow[1] === "X" && thirdRow[1] === "X") ||
    (firstRow[1] === "O" && secondRow[1] === "O" && thirdRow[1] === "O")
  ) {
    firstRow[1] === "X" ? (firstPlayerScore += 1) : (secondPlayerScore += 1);
    console.log(`This is the first player score: ${firstPlayerScore}`);
    console.log(`This is the second player score: ${secondPlayerScore}`);
    return true;
  } else if (
    (firstRow[0] === "X" && secondRow[0] === "X" && thirdRow[0] === "X") ||
    (firstRow[0] === "O" && secondRow[0] === "O" && thirdRow[0] === "O")
  ) {
    firstRow[0] === "X" ? (firstPlayerScore += 1) : (secondPlayerScore += 1);
    console.log(`This is the first player score: ${firstPlayerScore}`);
    console.log(`This is the second player score: ${secondPlayerScore}`);
    return true;
  } else if (
    (firstRow[2] === "X" && secondRow[2] === "X" && thirdRow[2] === "X") ||
    (firstRow[2] === "O" && secondRow[2] === "O" && thirdRow[2] === "O")
  ) {
    firstRow[2] === "X" ? (firstPlayerScore += 1) : (secondPlayerScore += 1);
    console.log(`This is the first player score: ${firstPlayerScore}`);
    console.log(`This is the second player score: ${secondPlayerScore}`);
    return true;
  } else if (
    Gameboard.board.filter((element) => element !== undefined).length === 9
  ) {
    console.log("It is a tie!!!");
    console.log(`This is the first player score: ${firstPlayerScore}`);
    console.log(`This is the second player score: ${secondPlayerScore}`);
    return true;
  }
}

addMarkToBoard("X", 0)
addMarkToBoard("X", 4)
addMarkToBoard("X", 8)

function playTheGame() {
  let result = checkTheBoard();

  if (result === true) {
    return;
  }
}



playTheGame();

console.log(Gameboard.board);
