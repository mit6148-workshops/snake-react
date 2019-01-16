import React from "react";
import "../../css/game.css";
import { GRID_LENGTH } from "../../../../config";
import Cell from "./Cell";

export default class Row extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    let cells = [];
    // WRITE YOUR FOR LOOP HERE

    return (
      <div className="board-row">
        {cells}
      </div>
    );
  }
}
