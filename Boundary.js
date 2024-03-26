class Boundary {
  constructor(startX, startY, endX, endY) {
    this.startX = startX;
    this.startY = startY;
    this.endX = endX;
    this.endY = endY;
  }
  show() {
    stroke(100, 100, 80);
    line(this.startX, this.startY, this.endX, this.endY);
  }
}
