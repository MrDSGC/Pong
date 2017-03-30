import Game from './objects/game.js'

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("game");
  const pong = new Game(canvas);

  document.getElementById("mute-button").onclick = () => {
    console.log(canvas.muted);
    if(canvas.muted) {
      canvas.muted = false;
    } else {
      canvas.muted = true;
    }
  }

})
