import Game from './objects/game.js'

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("game");
  const pong = new Game(canvas);

})
