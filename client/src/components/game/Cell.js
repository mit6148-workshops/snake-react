import React from "react";
import '../../css/game.css';

export default class Cell extends React.Component{

  getCellClass = (cell_type) => {
    switch (cell_type) {
      case 0:
        return "empty";
      case 1:
        return "my-snake";
      case 3:
        return "food";
      default:
        console.log("sad 😞")
    }
  };

  constructor(props){
    super(props);
  }

  render() {
    return(
      <div className={"cell " + this.getCellClass(this.props.cell_type)} x={this.props.x} y={this.props.y} />
    )
  }

}
