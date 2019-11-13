export function checkWinner(
  tableArr,
  setWinner,
  setPlayerOneScore,
  countRound
) {
  if (
    tableArr[0].player + tableArr[1].player + tableArr[2].player == 3 ||
    tableArr[0].player + tableArr[3].player + tableArr[6].player == 3 ||
    tableArr[0].player + tableArr[4].player + tableArr[8].player == 3 ||
    tableArr[1].player + tableArr[4].player + tableArr[7].player == 3 ||
    tableArr[2].player + tableArr[5].player + tableArr[8].player == 3 ||
    tableArr[2].player + tableArr[4].player + tableArr[6].player == 3 ||
    tableArr[3].player + tableArr[4].player + tableArr[5].player == 3 ||
    tableArr[6].player + tableArr[7].player + tableArr[8].player == 3
  ) {
    setWinner("player 1 wins");
    // setPlayerOneScore(playerOneScore + 1);

    for (var i = 0; i < 9; i++) tableArr[i].isUse = "true";
  } else if (
    tableArr[0].player + tableArr[1].player + tableArr[2].player == 15 ||
    tableArr[0].player + tableArr[3].player + tableArr[6].player == 15 ||
    tableArr[0].player + tableArr[4].player + tableArr[8].player == 15 ||
    tableArr[1].player + tableArr[4].player + tableArr[7].player == 15 ||
    tableArr[2].player + tableArr[5].player + tableArr[8].player == 15 ||
    tableArr[2].player + tableArr[4].player + tableArr[6].player == 15 ||
    tableArr[3].player + tableArr[4].player + tableArr[5].player == 15 ||
    tableArr[6].player + tableArr[7].player + tableArr[8].player == 15
  ) {
    setWinner("player 2 wins");
    // setPlayerTwoScore(playerTwoScore + 1);

    for (var i = 0; i < 9; i++) tableArr[i].isUse = "true";
  } else if (countRound == 9) {
    setWinner("no winner");
  }
}
