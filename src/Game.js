import React, { useState } from "react";
import { Tile } from "./Tile";
import "./Game.css";
import { checkWinner } from "./checkWinner.js";

let tableArr = [];
let countRound = 0;
for (var i = 0; i < 9; i++) tableArr[i] = { isUse: "false", player: 0 };

export const Game = ({ data, InitCells }) => {
  const [player, setPlayer] = useState(1);
  const [winner, setWinner] = useState("");
  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerTwoScore, setPlayerTwoScore] = useState(0);

  function renderSquare(e) {
    const cell = e.target.id;

    if (tableArr[cell].isUse == "false") {
      countRound++;
      tableArr[cell].isUse = "true";
      tableArr[cell].player = player;

      player == 1 ? setPlayer(5) : setPlayer(1);

      checkWinner(tableArr, setWinner, setPlayerOneScore, countRound);
    } else {
      console.log("no");
    }
  }

  function resetGame() {
    tableArr = [];
    countRound = 0;
    setPlayer(1);
    setWinner("");
    for (var i = 0; i < 9; i++) {
      tableArr[i] = { isUse: "false", player: 0 };
    }
  }

  return (
    <div id="box">
      <div id="winner">
        <h1 class="flashit">{winner}</h1>

        {/* <h1 class="flashit">playerOneScore : {playerOneScore}</h1>
        <h1 class="flashit">playerTwoScore : {playerTwoScore}</h1> */}
      </div>
      <table border="2" id="table" onClick={e => renderSquare(e)}>
        <tbody>
          <tr>
            <Tile id="0" player={tableArr[0].player}></Tile>
            <Tile id="1" player={tableArr[1].player}></Tile>
            <Tile id="2" player={tableArr[2].player}></Tile>
          </tr>
          <tr>
            <Tile id="3" player={tableArr[3].player}></Tile>
            <Tile id="4" player={tableArr[4].player}></Tile>
            <Tile id="5" player={tableArr[5].player}></Tile>
          </tr>
          <tr>
            <Tile id="6" player={tableArr[6].player}></Tile>
            <Tile id="7" player={tableArr[7].player}></Tile>
            <Tile id="8" player={tableArr[8].player}></Tile>
          </tr>
        </tbody>
      </table>
      <button id="reset_id" onClick={() => resetGame()}>
        {" "}
        Restart Game
      </button>
    </div>
  );
};
