import React from "react";
import GameBoard from "./game/GameBoard";
import HomePage from "./HomePage";

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
