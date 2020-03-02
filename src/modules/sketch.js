const CANVAS_W = 500;
const CANVAS_H = 500;
const stars = [];

function setup() {
  createCanvas(CANVAS_W, CANVAS_H);
  background(0);
  dx = 0;
  dy = 0;
  dz = 0;
  for(let i = 0; i<1500; i++) {
    stars.push(Star());
  }
}

function draw() {
  translate(CANVAS_W/2, CANVAS_H/2);
  stars.forEach(star =>{
    star.update()
    star.show()
  })
  background(0, 0, 0, 80)
}

function Star() {
  let size = Math.random();
  let x = Math.random() * (CANVAS_W - (-CANVAS_W)) + (-CANVAS_W);
  let y = Math.random() * (CANVAS_H - (-CANVAS_H)) + (-CANVAS_H);
  let z = Math.random() * CANVAS_W;
  function show() {
    fill(255);
    noStroke();
    const sx = map(x/z, 0, 1, 0, CANVAS_W);
    const sy = map(y/z, 0, 1, 0, CANVAS_H);
    ellipse(sx, sy, size, size);
  }
  function update() {
    z = z - 2;
    size += 0.01;
    if(z < 1) {
      size = Math.random();
      z = CANVAS_W;
      x = Math.random() * (CANVAS_W - (-CANVAS_W)) + (-CANVAS_W);
      y = Math.random() * (CANVAS_H - (-CANVAS_H)) + (-CANVAS_H);
    }
  }
  return {
    x,
    y,
    z,
    size,
    show,
    update,
  }
}

  