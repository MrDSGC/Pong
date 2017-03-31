import Game from './objects/game.js'

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("game");
  const pong = new Game(canvas);

  document.getElementById("mute-button").onclick = () => {
    if(pong.canvas.muted) {
      pong.canvas.muted = false;
    } else {
      pong.canvas.muted = true;
    }
  }

  document.getElementById("play-again").onclick =() => {
    pong.reset()
  }

})
