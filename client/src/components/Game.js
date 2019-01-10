import React from "react";
import '../css/game.css'
import io from 'socket.io-client';
import { GRID_LENGTH } from "../../../config";

export default class Game extends React.Component {

  keyDownBound = (e) => {
    console.log("key was pressed!");
    console.log(e.key)
    console.log(this.socket.io)
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

  updateBoard = (data) => {
    console.log('updating board')
    console.log(data);
    let newBoard = this.emptyBoard();
    newBoard[data.food.y][data.food.x] = 3;
    for (var i in data.player.snakeCoords){
      // console.log(snakeCoord)
      newBoard[data.player.snakeCoords[i].y][data.player.snakeCoords[i].x] = 1
    }
    this.setState({board: newBoard});
    console.log("set state. new board is: ")
    console.log(this.state.board)
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
    console.log('rendering2')
    console.log(this.state.board)
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
      </div>
    );
  }
}

class Row extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div className="board-row">
        {Array.from(Array(GRID_LENGTH).keys()).map(x =>
          <Cell
            key={GRID_LENGTH*this.props.y + x}
            x={x}
            y={this.props.y}
            cell_type={this.props.contents[x]}
          />
        )}
      </div>
    )
  }

}

const getCellClass = cell_type => {
  switch(cell_type) {
    case 0:
      return "empty";
    case 1:
      return "my-snake";
    case 3:
      return "food";
    default:
      console.log("sad :(")
  }
};

const Cell = ({ x, y, cell_type}) =>
  <div className={"cell " + getCellClass(cell_type)} x={x} y={y} />
