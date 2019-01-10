const express = require('express');
const path = require('path');
const api = require('./api');
const { initNewGame, nextStep } = require('./game');

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const publicPath = path.resolve(__dirname, '..', 'client', 'dist');

let gameInterval;
let gameTick = 300;
let num_connected = 0;

app.use('/api', api );
app.use(express.static(publicPath));
http.listen(3000, () => {
  console.log(`Listening on port 3000 and looking in folder ${publicPath}`);
});

let game = {};

// Websocket shenanigans

io.on('connection', (socket) => {
  num_connected += 1;
  console.log('a user connected they are user number ' + num_connected);
  socket.emit('new_game', game);
  if (num_connected === 1) {
    game = initNewGame();
    gameInterval = setInterval(
      () => {
        getNextGameState(socket);
      },
      gameTick
    );
  }

  socket.on('move', (direction) => {
    console.log("got a move");
    console.log(direction);
    if ((direction - game.player.direction) % 2 !== 0){
      game.player.direction = direction;
    }
  });

  socket.on('disconnect', () => {
    console.log("a user dced");
    num_connected -= 1;
  })

});


const getNextGameState = () => {
  console.log("updating game to the next state.");
  // console.log("game is " + (game))
  game = nextStep(game);
  io.emit ('update_game', game);
};



