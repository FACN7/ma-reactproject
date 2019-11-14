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

// import ximg from "./x.png";
// import oimg from "./o.png";

// export const Tile = ({ id, player }) => {
//   const playerToColorLookup = {
//     "0": "white",
//     "1": ximg,
//     "5": oimg
//   };
//   return (
//     // <td id={id} style={{ backgroundColor: playerToColorLookup[player] }}></td>
//     <td id={id}>
//       <img src={playerToColorLookup[player]} width="60px" height="60px"  />
//     </td>
//   );
// };
