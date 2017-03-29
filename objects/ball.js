import Object from  './object.js';
import Point from './point.js';

export default class Ball extends Object {
  constructor() {
    super(10, 10);
    this.vel = new Point;
  }
}
