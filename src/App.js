import React from "react";
import Search from "./Search";
import { Game } from "./Game";
import { Avatar } from "./Avatar";
import "./App.css";

function App() {
  const [score1, setScore1] = React.useState(0);
  const [score2, setScore2] = React.useState(0);
  const [p1, setP1] = React.useState("Green-player");
  const [p2, setP2] = React.useState("Red-player");

  let winner;
  const get_winner_name = w => {
    winner = w;
    console.log(winner);
  };

  return (
    <div className="container">
      <Game
        setScore1={setScore1}
        setScore2={setScore2}
        winner_name={get_winner_name}
      >
        <div className="playerOne">
          <Avatar id="player1" score={score1} name={p1} setP={setP1} />
        </div>

        <div className="playerTwo">
          <Avatar id="player2" score={score2} name={p2} setP={setP2} />
        </div>
      </Game>
    </div>
  );
}

export default App;
