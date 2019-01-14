import React from "react";
import "../../css/game.css";
import { GRID_LENGTH } from "../../../../config";
import Cell from "./Cell";

export default class Row extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="board-row">
        <Cell
          x={0}
          y={this.props.y}
          cellContent={this.props.rowContent[0]}
        />
        <Cell
          x={1}
          y={this.props.y}
          cellContent={this.props.rowContent[1]}
        />
        <Cell
          x={2}
          y={this.props.y}
          cellContent={this.props.rowContent[2]}
        />
        <Cell
          x={3}
          y={this.props.y}
          cellContent={this.props.rowContent[3]}
        />
      </div>
    );
  }
}
