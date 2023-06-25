const RADIUS = 20;
const WIDTH = 600;
const HEIGHT = 600;

const SPEED = 5;
const INIT_ANGLE = 60;
let OMEGA;
let LENGTH;
let centerX = WIDTH / 5;
let centerY = HEIGHT / 5;

function setup() {
  createCanvas(WIDTH, HEIGHT);
  LENGTH = dist(centerX, centerY, WIDTH / 2, 100) / 2;
  console.log(LENGTH);
  angleMode(DEGREES);
  OMEGA = sqrt(9.8 / LENGTH);
}

const renderSphere = (centerX, centerY) => {
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
};

function draw() {
  background(170, 170, 170);

  fill(0);
  square(WIDTH / 2, 100, 4);
  strokeWeight(2);
  stroke(255);
  line(WIDTH / 2 + 2, 100, centerX, centerY);

  centerX =
    LENGTH * sin(INIT_ANGLE * cos(OMEGA * frameCount * SPEED)) + WIDTH / 2;
  centerY =
    LENGTH * cos(INIT_ANGLE * cos(OMEGA * frameCount * SPEED)) + HEIGHT / 2;
  console.log(centerX, centerY);

  renderSphere(centerX, centerY);
}
