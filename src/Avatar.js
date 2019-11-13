import React, { useState } from "react";
import fetchByName from "./helpers";
import { App } from "./App";
import Search from "./Search";

export const Avatar = props => {
  function fetchData(name) {
    fetchByName(name).then(responsData =>
      props.setData(oldResponseDate => responsData)
    );
  }

  return (
    <div>
      <Search fetchData={fetchData}></Search>
    </div>
  );
};
