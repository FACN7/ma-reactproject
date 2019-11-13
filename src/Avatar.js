import React, { useState } from "react";
import fetchByName from "./helpers";
import { App } from "./App";
import Search from "./Search";

export const Avatar = props => {
  const [data, setData] = React.useState(null);

  function fetchData(name) {
    fetchByName(name).then(responsData =>{
      setData(oldResponseDate => responsData)
      props.setP(name)
    }
    );
  }
  return (
    <div>
      <Search fetchData={fetchData}></Search>
      {data ? (
        <div>
          <img src={data.avatar_url} alt="profilepic" />
          <h1>{props.score}</h1>
        </div>
      ) : (
        <h1>"Please inter your Githup name"</h1>
      )}
    </div>
  );
};
