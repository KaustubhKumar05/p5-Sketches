const boundaries = [];
let particle;
function setup() {
  createCanvas(400, 400);
  colorMode(RGB);
  particle = new Particle(width / 2, height / 2);
  const edges = [
    { startX: 0, startY: 0, endX: width, endY: 0 },
    { startX: 0, startY: 0, endX: 0, endY: height },
    { startX: width, startY: 0, endX: width, endY: height },
    { startX: width, startY: height, endX: 0, endY: height },
    { startX: 0, startY: height / 2, endX: width / 2, endY: height / 2 },
    { startX: width / 4, startY: 0, endX: 0, endY: height / 4 },
    { startX: width / 2, startY: height / 2, endX: width, endY: height },
    { startX: width / 2, startY: height / 2, endX: width / 2, endY: height },
    { startX: width / 2, startY: height / 2, endX: width, endY: 0 },
  ];

  for (let edge of edges) {
    boundaries.push(
      new Boundary(edge.startX, edge.startY, edge.endX, edge.endY)
    );
  }
}

function draw() {
  background(20, 20, 20);
  for (let boundary of boundaries) {
    boundary.show();
  }
  particle.show();
  particle.castRays(boundaries);
}
