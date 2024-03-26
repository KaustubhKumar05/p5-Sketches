class Particle {
  constructor(startX, startY) {
    this.startX = startX;
    this.startY = startY;
    this.xOffset = 0;
    this.yOffset = 100;
    this.rays = [];
  }

  safelyUpdate(dimension, maximum, offset) {
    dimension = maximum * noise(offset);
    if (dimension < 0) {
      dimension += maximum;
    }
    if (dimension > maximum) {
      dimension -= maximum;
    }

    return dimension;
  }
  show() {
    circle(this.startX, this.startY, 10);
    this.startX = this.safelyUpdate(this.startX, width, this.xOffset);
    this.startY = this.safelyUpdate(this.startY, height, this.yOffset);
    this.xOffset += 0.002;
    this.yOffset += 0.005;
  }
  castRays(boundaries) {
    this.rays = [];
    const origin = createVector(this.startX, this.startY);
    for (let i = 0; i < 360; i += 2) {
      this.rays.push(new Ray(origin, radians(i)));
    }

    for (let ray of this.rays) {
      let minDist = Infinity;
      let closestIntersection = createVector(Infinity, Infinity);
      for (let boundary of boundaries) {
        const point = ray.getIntersection(boundary);
        if (point) {
          const distance = dist(this.startX, this.startY, point.x, point.y);
          if (distance < minDist) {
            minDist = distance;
            closestIntersection = point;
          }
        }
      }
      stroke(200, 200, 200);
      strokeWeight(2);
      line(
        this.startX,
        this.startY,
        closestIntersection.x,
        closestIntersection.y
      );
    }
  }
}
