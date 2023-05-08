let x;
let y;
const stepSize = 4;

function setup() {
  createCanvas(400, 400);
  background(51);
  x = width / 2;
  y = height / 2;
}

function draw() {
  stroke(200, 100);
  strokeWeight(2);
  point(x, y);
  x += random(-stepSize, stepSize);
  y += random(-stepSize, stepSize);
}
