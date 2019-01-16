import React from "react";
import GameBoard from "./game/GameBoard";
import HomePage from "./HomePage";

export default class GameContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStatus: 0,
    };
  }

  render() {
    switch (this.state.gameStatus) {
      case 0:
        return (
          <HomePage />
        );
      case 1:
        return (
          <GameBoard />
        );
    }
  }


}