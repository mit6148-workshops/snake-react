const randomNumber = () => {
  return Math.floor(Math.random()*20);
}

const initNewPlayer = () => {
  return {
    snakeCoords: [
      {
        x: randomNumber(),
        y: randomNumber()
      }
    ],
    direction: "up"
  }
};

const getNextSquare = (player) => {
  let y = player.snakeCoords[0].y;
  let x = player.snakeCoords[0].x;
  switch(player.direction){
    case "up":
      y = player.snakeCoords[0].y <= 0 ? 20 - 1 : player.snakeCoords[0].y - 1; break;
    case "down":
      y = player.snakeCoords[0].y >= 20 - 1 ? 0 : player.snakeCoords[0].y + 1; break;
    case "left":
      x = player.snakeCoords[0].x <= 0 ? 20 - 1 : player.snakeCoords[0].x - 1; break;
    case "right":
      x = player.snakeCoords[0].x >= 20 - 1 ? 0 : player.snakeCoords[0].x + 1; break;
  }

  return {x: x, y: y};
};

const initNewGame = () => {

  return {
    food : {
      x: randomNumber(),
      y: randomNumber()
    },
    player : initNewPlayer(),
    game_over: false
  }
};

const nextStep = (currGame) => {
  // console.log(currGame);
  let head = getNextSquare(currGame.player);
  if (head.x === currGame.food.x && head.y === currGame.food.y) {
    console.log("we hit the food")
    currGame.food = {
      x: randomNumber(),
      y: randomNumber()
    }
  }
  else {
    currGame.player.snakeCoords.pop();
  }
  currGame.player.snakeCoords.unshift(head);
  if (currGame.player.snakeCoords.includes(head)){
    currGame.game_over = true;
  }
  console.log(currGame)
  return currGame;

};

module.exports = { initNewGame, nextStep };