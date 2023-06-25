const WIDTH = 1200;
const HEIGHT = 1200;

let ANGLE = 0;
const BOX_DIM = 30;
const COUNT = 4;
const INCREMENT = 0.01;

function setup() {
  createCanvas(600, 600, WEBGL);
}

function draw() {
  colorMode("rgb");
  rotateX(-PI / 4);
  rotateY(PI - PI / 4);
  translate(-(COUNT - 2) * BOX_DIM, BOX_DIM, COUNT * BOX_DIM);

  stroke(120, 120, 120, 10);
  background(200, 240, 255, 200);

  for (let i = 0; i <= COUNT; i++) {
    translate(BOX_DIM, 0, -(COUNT + 1) * BOX_DIM);
    for (let j = 0; j <= COUNT; j++) {
      const centerX = abs(map(i, 0, COUNT, -2, 2));
      const centerY = abs(map(j, 0, COUNT, -2, 2));
      const heightMultiplier = sin((ANGLE * (2 + centerX + centerY)) / 20);

      fill(10, 10, 50 * heightMultiplier + 150, 50 * heightMultiplier + 100);
      box(BOX_DIM, BOX_DIM * (2 + heightMultiplier), BOX_DIM);
      translate(0, 0, BOX_DIM);

      ANGLE += INCREMENT;
    }
  }
}
