import React from "react";
import GameBoard from "./game/GameBoard";

export default class GameContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <GameBoard />
    );
  }


}