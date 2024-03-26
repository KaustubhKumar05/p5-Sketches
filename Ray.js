class Ray {
  constructor(position, angle) {
    this.position = position;
    this.direction = p5.Vector.fromAngle(angle);
  }

  getIntersection(boundary) {
    const x1 = boundary.startX;
    const y1 = boundary.startY;
    const x2 = boundary.endX;
    const y2 = boundary.endY;

    const x3 = this.position.x;
    const y3 = this.position.y;
    const x4 = this.position.x + this.direction.x;
    const y4 = this.position.y + this.direction.y;

    const denominator = parseFloat(
      (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4)
    );

    if (denominator == 0) {
      return;
    }
    const t = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denominator;
    const u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / denominator;

    if (t > 0 && t < 1 && u > 0) {
      const px = x1 + t * (x2 - x1);
      const py = y1 + t * (y2 - y1);

      return createVector(px, py);
    }

    return;
  }
}
