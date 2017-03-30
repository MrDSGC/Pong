/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Point {
  constructor ( x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Point;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__point_js__ = __webpack_require__(0);


class Object {
  constructor (width, height) {
    this.pos = new __WEBPACK_IMPORTED_MODULE_0__point_js__["a" /* default */];
    this.size = new __WEBPACK_IMPORTED_MODULE_0__point_js__["a" /* default */](width, height)
  }

  // methods for space object fills in canvas
  left() {
    return this.pos.x - this.size.x / 2;
  }
  right() {
    return this.pos.x + this.size.x / 2;
  }
  top() {
    return this.pos.y - this.size.y / 2;
  }
  bottom() {
    return this.pos.y + this.size.y / 2;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Object;



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ball__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__player__ = __webpack_require__(4);


class Game {
  constructor (canvas) {

    //board
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.context.fillStyle = "#000";
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.setLineDash([15, 20]);
    this.context.beginPath();
    this.context.moveTo(300,0);
    this.context.lineTo(300, 400);
    this.context.strokeStyle = '#FFFFFF';
    this.context.stroke();

    //players
    this.players = [new __WEBPACK_IMPORTED_MODULE_1__player__["a" /* default */], new __WEBPACK_IMPORTED_MODULE_1__player__["a" /* default */],];
    this.players[0].pos.x = 35;
    this.players[1].pos.x = this.canvas.width - 35;
    this.players.forEach(player => player.pos.y = this.canvas.height / 2);

    //ball
    this.ball = new __WEBPACK_IMPORTED_MODULE_0__ball__["a" /* default */];
    this.ball.pos.x = 300;
    this.ball.pos.y = 200;
    this.ball.vel.x = 0;
    this.ball.vel.y = 0;

    this.rallyCounter = 0

    //score
    this.pixelSize = 10;
    this.scoreCode =  [
        'xxxxoxxoxxoxxxx',
        'oxooxooxooxooxo',
        'xxxooxxxxxooxxx',
        'xxxooxxxxooxxxx',
        'xoxxoxxxxooxoox',
        'xxxxooxxxooxxxx',
        'xxxxooxxxxoxxxx',
        'xxxooxooxooxoox',
        'xxxxoxxxxxoxxxx',
        'xxxxoxxxxooxxxx',
    ].map( code => {
      const score = document.createElement('canvas');
      const size = this.pixelSize
      score.height = size * 5;
      score.width = size * 3;
      const context = score.getContext('2d');
      context.fillStyle='#FFFFFF';
      code.split('').forEach((char, idx) => {
        if (char === 'x') {
          context.fillRect((idx % 3) * size, (idx / 3 | 0) * size, size, size );
        };
      })

      return score
    });



    //constants
    const start_vel_x = [2,-2, 3, -3]
    const start_vel_y = [1.5, -1.5, 1, -1, 2, -2]
    let hitByte = new Audio('sounds/collision.wav')
    let hitByte2 = new Audio('sounds/collision2.wav')
    this.hitArraySounds = [hitByte, hitByte2]
    this.scoreByte = new Audio('sounds/score_sound.wav')


    //key events
    window.addEventListener('keydown', event => {
      if (event.keyCode === 87) {
        //up
        this.players[0].vel.y = -3
      } else if (event.keyCode === 83) {
        //down
        this.players[0].vel.y = 3
      } else if (event.keyCode === 32 && this.ball.vel.x === 0) {
        //space
        this.ball.vel.x = start_vel_x[Math.floor(Math.random()*start_vel_x.length)];
        this.ball.vel.y = start_vel_y[Math.floor(Math.random()*start_vel_y.length)];

      }
    });
    window.addEventListener('keyup', event => {
      this.players[0].vel.y = 0
    });

    //runs the game
    window.setInterval(this.updateFrame.bind(this),10)

  }

  resetGame () {
    this.ball.pos.x = 300;
    this.ball.pos.y = 200;
    this.ball.vel.x = 0;
    this.ball.vel.y = 0;
    this.players[0].vel.y = 0;
    this.players.forEach(player => player.pos.y = this.canvas.height / 2);
  }


  collide(player, ball) {
    if (player.left() < ball.right() && player.right() > ball.left() &&
    player.top() < ball.bottom() && player.bottom() > ball.top()) {
      ball.vel.x = -ball.vel.x * 1.06;
      this.rallyCounter++
      this.hitArraySounds[Math.floor(Math.random()*this.hitArraySounds.length)].play()
    }
  }

  endgame() {
    if (this.players[0].score === 10) {
      this.renderHumanWinner()
    } else if (this.players[1].score === 10) {
      this.renderCompWinner()
    }

  }

  render () {
    this.clear();
    this.renderScore();
    this.renderObj(this.ball);
    this.renderObj(this.players[0]);
    this.renderObj(this.players[1]);
  }

  clear () {
    this.context.fillStyle = '#000';
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.setLineDash([15, 15]);
    this.context.beginPath();
    this.context.moveTo(300,0);
    this.context.lineTo(300, 400);
    this.context.strokeStyle = '#FFFFFF';
    this.context.stroke();
  }

  renderObj (object) {
    this.context.fillStyle = '#fff';
    this.context.fillRect(object.left(), object.top(), object.size.x, object.size.y);
  }

  renderScore() {
    const scorePos = this.canvas.width / 3;
    const scoreWidth = this.pixelSize * 4;
    this.players.forEach((player, idx) => {
      const digits = player.score.toString().split('');
      const offset = scorePos * (idx + 1) - (scoreWidth * digits.length / 2) + this.pixelSize / 2

      digits.forEach((digit, pos) => {
        this.context.drawImage(this.scoreCode[digit|0], offset + pos * scoreWidth, 20);
      })
    })
  }


  renderWinner () {
    console.log("You Win");
  }

  renderCompWinner () {
    console.log("You Lose");
  }


  updateFrame () {
    this.ball.pos.x += this.ball.vel.x ;
    this.ball.pos.y += this.ball.vel.y ;
    this.players[0].pos.y += this.players[0].vel.y ;
    if (this.ball.vel.y < 0 && this.ball.top() < 0 ||
        this.ball.vel.y > 0 && this.ball.bottom() > this.canvas.height) {
        this.ball.vel.y = -this.ball.vel.y;
        this.hitArraySounds[Math.floor(Math.random()*this.hitArraySounds.length)].play()
    }

    if (this.ball.right() < 0 || this.ball.left() > this.canvas.width) {
        ++this.players[this.ball.vel.x < 0 | 0].score;
        this.scoreByte.play()
        console.log(this.players[0].score);
        console.log(this.players[1].score);
        this.resetGame();
    }
    const compSpeed = [1.1, 1.2, 1.3, 1.4, 1.5, 1.6]
    let speed = 1
    if (this.rallyCounter < 8) {
      speed = compSpeed[0]
    } else if (this.rallyCounter < 16) {
      speed = compSpeed[1]
    } else if (this.rallyCounter < 24) {
      speed = compSpeed[2]
    } else {
      speed = compSpeed[3]
    }
    if (this.players[1].pos.y < this.ball.pos.y) {
      this.players[1].pos.y+= speed
    } else if (this.players[1].pos.y > this.ball.pos.y ) {
      this.players[1].pos.y-= speed
    }

    this.players.forEach(player => {
      if (player.top() < 0) {
        player.pos.y+= 3
      } else if (player.bottom() > this.canvas.height) {
        player.pos.y-= 3
      }
    })

    this.players.forEach(player => {
      this.collide(player, this.ball);
    });

    this.render();
    this.endgame();
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Game;



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__object_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__point_js__ = __webpack_require__(0);



class Ball extends __WEBPACK_IMPORTED_MODULE_0__object_js__["a" /* default */] {
  constructor() {
    super(10, 10);
    this.vel = new __WEBPACK_IMPORTED_MODULE_1__point_js__["a" /* default */];
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Ball;



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__object__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__point__ = __webpack_require__(0);




class Player extends __WEBPACK_IMPORTED_MODULE_0__object__["a" /* default */] {
  constructor () {
    super(5, 70);
    this.vel = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* default */];
    this.score = 0

  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Player;



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__objects_game_js__ = __webpack_require__(2);


document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("game");
  const pong = new __WEBPACK_IMPORTED_MODULE_0__objects_game_js__["a" /* default */](canvas);

})


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map