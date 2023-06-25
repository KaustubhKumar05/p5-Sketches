const RADIUS = 20;
const WIDTH = 600;
const HEIGHT = 600;

const SPEED = 5;

let pendulums = [];

class Pendulum {
  constructor(initAngle, offsetX, offsetY) {
    this.initAngle = initAngle;
    this.offsetX = offsetX;
    this.offsetY = offsetY;
    this.center = createVector(WIDTH / 2 + offsetX, HEIGHT / 2 + offsetY);
    this.angle = this.initAngle;
    this.length = dist(offsetX, offsetY, WIDTH / 2, 100);
    this.omega = sqrt(9.8 / this.length);
  }

  update() {
    this.angle = this.initAngle * cos(this.omega * frameCount * SPEED);
    let centerX = this.length * sin(this.angle) + WIDTH / 2;
    let centerY = this.length * cos(this.angle) + HEIGHT / 2;
    this.render(centerX, centerY);
    strokeWeight(2);
    stroke(255);
    line(WIDTH / 2 + 2, 100, centerX, centerY);
  }

  render(centerX, centerY) {
    let coreColor = color(255, 120, 0);
    let centerColor = color(255, 255, 0);
    let outlineColor = color(120);

    for (let r = RADIUS; r > 0; r--) {
      let interp = map(r, 0, RADIUS, 0, 1);
      let mergedColor = lerpColor(coreColor, centerColor, interp);
      let fillColor = lerpColor(mergedColor, outlineColor, interp);
      fill(fillColor);
      noStroke();
      ellipse(centerX, centerY, r * 2, r * 2);
    }
  }
}

function setup() {
  createCanvas(WIDTH, HEIGHT);
  angleMode(DEGREES);

  // Create multiple pendulum objects with custom properties
  pendulums.push(new Pendulum(40, 100, 0));
  pendulums.push(new Pendulum(60, 100, 0));
  pendulums.push(new Pendulum(80, 100, 0));
}

function draw() {
  background(170, 170, 170);

  fill(0);
  square(WIDTH / 2, 100, 4);
  strokeWeight(2);
  stroke(255);

  pendulums.forEach((pendulum) => pendulum.update());
}
