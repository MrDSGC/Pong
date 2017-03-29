import Object from './object';
import Point from './point';


export default class Player extends Object {
  constructor () {
    super(5, 70);
    this.vel = new Point;
    this.score = 0

  }

}
