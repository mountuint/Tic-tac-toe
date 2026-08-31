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

addMarkToBoard("X", 0);
addMarkToBoard("O", 1);
addMarkToBoard("X", 2);
addMarkToBoard("X", 4);
addMarkToBoard("X", 8);

function checkTheBoard() {
  let lenghtOfRow = Gameboard.board.length / 3;
  let firstRow = Gameboard.board.slice(0, lenghtOfRow);
  let secondRow = Gameboard.board.slice(lenghtOfRow, lenghtOfRow * 2);
  let thirdRow = Gameboard.board.slice(lenghtOfRow * 2, lenghtOfRow * 3);

  if (
    (firstRow[0] === "X" && firstRow[1] === "X" && firstRow[2] === "X") ||
    (firstRow[0] === "O" && firstRow[1] === "O" && firstRow[2] === "O")
  ) {
    console.log("You have won");
  } else if (
    (secondRow[0] === "X" && secondRow[1] === "X" && secondRow[2] === "X") ||
    (secondRow[0] === "O" && secondRow[1] === "O" && secondRow[2] === "O")
  ) {
    console.log("You have won again!!");
  } else if (
    (thirdRow[0] === "X" && thirdRow[1] === "X" && thirdRow[2] === "X") ||
    (thirdRow[0] === "O" && thirdRow[1] === "O" && thirdRow[2] === "O")
  ) {
    console.log("You are amazing");
  } else if (
    (firstRow[0] === "X" && secondRow[1] === "X" && thirdRow[2] === "X") ||
    (firstRow[0] === "O" && secondRow[1] === "O" && thirdRow[2] === "O")
  ) {
    console.log("You have won with first cross");
  } else if (
    (firstRow[2] === "X" && secondRow[1] === "X" && thirdRow[0] === "X") ||
    (firstRow[2] === "O" && secondRow[1] === "O" && thirdRow[0] === "O")
  ) {
    console.log("You have won with second cross");
  } else if (
    (firstRow[1] === "X" && secondRow[1] === "X" && thirdRow[1] === "X") ||
    (firstRow[1] === "O" && secondRow[1] === "O" && thirdRow[1] === "O")
  ) {
    console.log("You have won with vertical middle");
  } else if (
    (firstRow[0] === "X" && secondRow[0] === "X" && thirdRow[0] === "X") ||
    (firstRow[0] === "O" && secondRow[0] === "O" && thirdRow[0] === "O")
  ) {
    console.log("You have won with vertical first");
  } else if (
    (firstRow[2] === "X" && secondRow[2] === "X" && thirdRow[2] === "X") ||
    (firstRow[2] === "O" && secondRow[2] === "O" && thirdRow[2] === "O")
  ) {
    console.log("You have won with vertical last");
  }
}

checkTheBoard();

console.log(Gameboard.board);
