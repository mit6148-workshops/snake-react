import React from "react";
import "../../css/game.css";
import { GRID_LENGTH } from "../../../../config";
import Cell from "./Cell";

export default class Row extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    // Example of a Cell component
    // <Cell
    //   x={0}
    //   y={this.props.y}
    //   cellContent={this.props.rowContent[0]}
    // />

    let cells = [];
    // WRITE YOUR LOOP HERE

    return (
      <div className="board-row">
        {cells}
      </div>
    );
  }
}
