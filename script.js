// BOARD //

let squres = document.getElementsByClassName("squre");

let board = [
  "1", "2", "3",
  "4", "5", "6",
  "7", "8", "9"
];

let player = "X";

var squre;
for (squre of squres) {
  function checkWin() {
    if (
      // rows
      (board[0] == board[1] && board[1] == board[2]) ||
      (board[3] == board[4] && board[4] == board[5]) ||
      (board[6] == board[7] && board[7] == board[8]) ||
      // columns
      (board[0] == board[3] && board[3] == board[6]) ||
      (board[1] == board[4] && board[4] == board[7]) ||
      (board[2] == board[5] && board[5] == board[8]) ||
      // diagonal
      (board[0] == board[4] && board[4] == board[8]) ||
      (board[2] == board[4] && board[4] == board[6])
    ) {
      var winner = player === "X" ? "X" : "O";
      alert(`${winner} Won!`);
      window.location.reload();
    }
  }

  function checkTie() {
    var tie = true;
    var squre = null;
    for (squre of board) {
      if (squre !== "X" && squre !== "O") {
        tie = false;
      }
    }

    if (tie) {
      alert("Tie");
      window.location.reload();
    }
  }

  squre.onclick = function () {
    let value = this.getAttribute("value");
    let index = value - 1;

    if (board[index] === "X" || board[index] === "O") return;

    let squreClicked = document.querySelector(`.squre[value="${value}"]`);
    squreClicked.innerHTML = player;
    board[index] = player;

    checkWin();
    checkTie();

    if (player === "X") {
      player = "O";
    } else {
      player = "X";
    }

    document.getElementById("turn").textContent = `${player} Turn`;
  };
}

// RESET //

document.getElementById("reset").onclick = function () {
  window.location.reload();
};
