import React from "react";
import Search from "./Search";
import { Game } from "./Game";
import { Avatar } from "./Avatar";
import "./App.css";

import "./App.css";
// import fetchByName from "./helpers";

function App() {
  const [data, setData] = React.useState(null);
  const [data2, setData2] = React.useState(null);

  console.log(data);

  // function fetchData(name) {
  //   fetchByName(name).then(responsData =>
  //     setData(oldResponseDate => responsData)
  //   );
  // }

  return (
    <div class="container">
      <div className="playerOne">
        <Avatar id="player1" data={data} setData={setData} />
        {data ? (
          <img src={data.avatar_url}></img>
        ) : (
          <h1>"Please inter your Githup name"</h1>
        )}
      </div>
      <div className="playerTwo">
        <Avatar id="player2" data={data2} setData={setData2} />
        {data2 ? (
          <img src={data2.avatar_url}></img>
        ) : (
          <h1>"Please inter your Githup name"</h1>
        )}
      </div>

      <Game data={data} />
    </div>
  );
}

export default App;
