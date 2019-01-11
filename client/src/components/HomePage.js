import React from "react";
import "../css/homepage.css"

export default class HomePage extends React.Component {
  render() {
    return (
      <div className={"center"}>
        <div className={"game-title"}>React Snake</div>
        <div className={"start-button"} onClick={this.props.onClickStart}>Start</div>
      </div>
    )
  }
}