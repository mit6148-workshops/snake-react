import React from "react";
import Game from "./Game";

import { hot } from 'react-hot-loader/root'

class App extends React.Component {

  render() {
    return (
      <Game />
    )
    ;
  }
}

export default hot(App)