import Point from './point.js'

export default class Object {
  constructor (width, height) {
    this.pos = new Point;
    this.size = new Point(width, height)
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
