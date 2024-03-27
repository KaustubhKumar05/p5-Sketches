class Boid {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.velocity = p5.Vector.random2D();
    this.velocity.setMag(random(2, 4));
    this.acceleration = createVector();
    this.radius = 10;
    this.perceptionRadius = 50;
  }

  show() {
    // fill(100, 50, 50, 30);
    // circle(this.x, this.y, this.perceptionRadius);
    fill(255);
    circle(this.x, this.y, this.radius);
  }

  handleEdges(dimension, maximum) {
    if (dimension < 0) {
      dimension += maximum;
    } else if (dimension > maximum) {
      dimension -= maximum;
    }
    return dimension;
  }

  updateAcceleration(partial) {
    this.acceleration.add(partial);
    this.acceleration.setMag(5);
    this.acceleration.sub(this.velocity);
    this.acceleration.limit(0.7);
  }

  move(flock) {
    let averageVelocity = createVector();
    let averageAcceleration = createVector();
    let separationAcceleration = createVector();
    const position = createVector(this.x, this.y);
    let nearbyBoids = 0;
    for (let boid of flock) {
      const distance = dist(this.x, this.y, boid.x, boid.y);
      if (boid !== this && distance < this.perceptionRadius) {
        averageVelocity.add(boid.velocity);
        averageAcceleration.add(boid.acceleration);
        const diff = position.sub(boid.x, boid.y);
        diff.div(distance * distance);
        separationAcceleration.add(diff);
        nearbyBoids++;
      }
    }

    if (nearbyBoids > 0) {
      separationAcceleration.div(nearbyBoids);
      averageAcceleration.div(nearbyBoids).setMag(1);
      averageVelocity.div(nearbyBoids).setMag(1);
      this.acceleration.add(separationAcceleration);
      this.acceleration.add(averageVelocity);
      this.acceleration.add(averageAcceleration);
      this.acceleration.sub(position);
      this.acceleration.sub(this.velocity);
      this.acceleration.limit(0.7);
    }

    this.velocity.limit(3);
    this.x += this.velocity.x;
    this.y += this.velocity.y;
    this.x = this.handleEdges(this.x, width);
    this.y = this.handleEdges(this.y, height);
    this.velocity.add(this.acceleration);
    this.acceleration.mult(0);
  }
}
