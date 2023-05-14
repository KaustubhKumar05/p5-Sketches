const WIDTH = 1200;
const HEIGHT = 1200;
const SCALE = 15;
const TERRAIN_HEIGHT = 75;

let rows = 0;
let cols = 0;
let flying = 0;
let terrain = [];

function setup() {
  createCanvas(600, 600, WEBGL);
  rows = HEIGHT / SCALE;
  cols = WIDTH / SCALE;
  for (let x = 0; x < rows; x++) {
    terrain[x] = [];
    for (let y = 0; y < cols - 1; y++) {
      terrain[x][y] = 0;
    }
  }
}

const populateZ = () => {
  flying -= 0.1;
  let yOffset = flying;
  for (let y = 0; y < cols - 1; y++) {
    let xOffset = 0;
    for (let x = 0; x < rows; x++) {
      terrain[x][y] = map(
        noise(xOffset, yOffset),
        0,
        1,
        -TERRAIN_HEIGHT,
        TERRAIN_HEIGHT
      );
      xOffset += 0.1;
    }
    yOffset += 0.1;
  }
};

function draw() {
  colorMode("rgb");
  background(200, 240, 255, 200);
  rotateX(PI / 3);
  translate(-WIDTH / 2, -HEIGHT / 2);
  fill(0, 0, 0, 200);
  stroke(255);

  frameRate(50);
  populateZ();

  for (let y = 0; y < rows - 1; y++) {
    beginShape(TRIANGLE_STRIP);
    for (let x = 0; x < cols; x++) {
      vertex(x * SCALE, y * SCALE, terrain[x][y]);
      vertex(x * SCALE, (y + 1) * SCALE, terrain[x][y + 1]);
    }
    endShape();
  }
}
