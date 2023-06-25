const WIDTH = 1200;
const HEIGHT = 1200;

let angle = 0;
const RECT_PROPS = { WIDTH: 10, HEIGHT: 100 };

let myFont;
function preload() {
  myFont = loadFont("./Montserrat-Bold.otf");
}

function setup() {
  createCanvas(600, 600, WEBGL);
  slider = createSlider(1, 2, 1.4, 0.1);
  slider.position(WIDTH / 5, HEIGHT / 3);
  slider.style("width", "80px");
}

function draw() {
  colorMode("rgb");
  background(200, 240, 255, 200);
  rotateX(0.5);
  translate(-WIDTH / 2, -HEIGHT / 2);
  stroke(255);

  rectMode(CENTER);
  for (let i = 300; i < WIDTH; i += RECT_PROPS.WIDTH) {
    rect(
      i,
      HEIGHT / 2,
      RECT_PROPS.WIDTH,
      RECT_PROPS.HEIGHT * sin(angle + i * slider.value())
    );
  }

  fill(0, 0, 0, 200);
  textFont(myFont);
  text("Offset multiplier: " + slider.value(), 520, HEIGHT / 2 + 150);
  angle += 0.05;
}
