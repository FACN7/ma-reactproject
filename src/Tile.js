import React, { useState } from "react";
import { directive } from "@babel/types";

export const Tile = ({ id, player }) => {
  const playerToColorLookup = {
    "0": "white",
    "1": "green",
    "5": "red"
  };
  return (
    <td id={id} style={{ backgroundColor: playerToColorLookup[player] }}></td>
  );
};
