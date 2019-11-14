import React, { useState } from "react";
import fetchByName from "./helpers";
import { App } from "./App";
import Search from "./Search";

export const Avatar = props => {
  const [data, setData] = React.useState(null);
  const [fetch_error, setFetch_error] = React.useState(false);

  function fetchData(name) {
    fetchByName(name).then(responsData => {
      if (responsData == "no such name") setFetch_error(error => true);
      else {
        setData(oldResponseDate => responsData);
        setFetch_error(false);
        props.setP(name);
      }
    });
  }

  return (
    <div>
      <Search fetchData={fetchData}></Search>
      {fetch_error ? <h1>Sweet heart -No such user </h1> : <h1></h1>}
      {data ? (
        <div>
          <img
            className="avatar_image"
            src={data.avatar_url}
            alt="profilepic"
          />
          <h1>{props.score}</h1>
        </div>
      ) : (
        <h1>Please inter your Github name</h1>
      )}
    </div>
  );
};
