import Object from './object';
import Point from './point';


export default class Player extends Object {
  constructor () {
    super(5, 60);
    this.vel = new Point;
    this.score = 0

  }

}
