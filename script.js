const Gameboard = {
  board: Array(9),
};

function addMarkToBoard(player, position) {
  if (player === "O") {
    Gameboard.board[position] = "O";
  } else if (player === "X") {
    Gameboard.board[position] = "X";
  }
}
