let flock = [];
const COUNT = 50;

function setup() {
  createCanvas(400, 400);
  colorMode(RGB);
  for (let i = 0; i < COUNT; i++) {
    flock.push(new Boid());
  }
}

function draw() {
  background(120, 200, 255);
  for (let boid of flock) {
    boid.move(flock);
    boid.show();
  }
}
