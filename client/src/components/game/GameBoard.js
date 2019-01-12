import React from "react";
import '../../css/game.css'
import io from 'socket.io-client';
import { GRID_LENGTH } from "../../../../config";
import GameOver from "./GameOver";
import Row from "./Row";

export default class GameBoard extends React.Component {

  keyDownBound = (e) => {
    switch(e.key){
      case "w":
        this.socket.emit('move', 0);
        break;
      case "a":
        this.socket.emit('move', 1);
        break;
      case "s":
        this.socket.emit('move', 2);
        break;
      case "d":
        this.socket.emit('move', 3);
        break;
    }
  };

  emptyBoard = () => {
    let rows = [];
    for (let row_num = 0; row_num < GRID_LENGTH; row_num++){
      rows.push([]); //push an empty row
      for (let col_num = 0; col_num < GRID_LENGTH; col_num++){
        rows[row_num].push(0);
      }
    }

    return rows;
  };

  updateBoard = (data) => {;
    let newBoard = this.emptyBoard();
    newBoard[data.food.y][data.food.x] = 3;
    for (let i in data.player.snakeCoords) {
      newBoard[data.player.snakeCoords[i].y][data.player.snakeCoords[i].x] = 1
    }
    this.setState({board: newBoard});
    if (data.game_over) {
      this.setState({isGameOver: true})
    }
  };

  constructor(props){
    super(props);
    this.socket = io('http://localhost:3000');
    this.socket.on('new_game', (msg) => {
      console.log('new gamee');
      console.log(msg);
      this.updateBoard(msg);
      document.addEventListener("keydown", this.keyDownBound);
    });

    this.socket.on('update_game', (msg) => {
      console.log("got an update");
      console.log(msg)
      this.updateBoard(msg);
    });

    this.state= {
      isGameOver : false,
      board: this.emptyBoard()
    };
  }

  render() {

    const gameOverModal = this.state.isGameOver ? (<GameOver/> ) : (null);

    return (
      <div className={"game-container"}>
        <div className="board">
          {Array.from(Array(GRID_LENGTH).keys()).map(y =>
            <Row
              contents={this.state.board[y]}
              y={y}
              key={y}
            />
          )}
        </div>
        {gameOverModal}
      </div>
    );
  }
}
