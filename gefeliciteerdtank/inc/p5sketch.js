var body = document.body,
  html = document.documentElement;
let width = Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth);
let height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

function setup() {
  noLoop();
}
function draw() {
  actuallyDrawSomething();
}
function windowResized() {
  width = Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth);
  height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
  actuallyDrawSomething();
}

function actuallyDrawSomething() {
  // Variables
  var white = color(255, 255, 255);
  var pink = color(255, 105, 180);
  var totalPixels = width * height;

  // Uncomment/comment any colors you don't/do want
  var colors = [
    color(159, 204, 245), // Blue   - light
    color(83, 166, 241), // Blue   - dark
    color(168, 224, 99), // Green  - light
    color(86, 171, 47), // Green  - dark
    color(255, 140, 69), // Orange - light
    color(222, 98, 98), // Orange - dark
    color(241, 95, 121), // Pink   - light
    color(178, 69, 146), // Pink   - dark
    color(234, 175, 200), // Purple - light
    color(110, 90, 163), // Purple - dark
    color(242, 201, 76), // Yellow - light
    color(242, 141, 51) // Yellow - dark
  ];
  // Uncomment/comment any shapes you don't/do want
  var shapes = [
    "filled-heart"
    // "filled-rectangle"
    // "hollow-rectangle",
    // "filled-circle",
    // "hollow-circle"
    // "filled-triangle",
    // "hollow-triangle",
    // "filled-square"
    // "hollow-square",
    // "straight-scribble"
    // "curved-scribble"
  ];
  // Ratio for objects to screen
  var ratio = random(5, 8); // 8 to 12 seems good

  // Setup
  var canvas = createCanvas(width, height);
  canvas.parent("body");
  background(white);
  noStroke();
  angleMode(DEGREES);
  rectMode(CENTER);
  translate(width / 2, height / 2);
  var drawableObjects = totalPixels / (ratio * 1500);

  // Draw
  for (i = 0; i < round(drawableObjects); i++) {
    var x = random(-width / 2, width / 2) * 1.5;
    var y = random(-height / 2, height / 2) * 1.5;
    var rotation = random([0, 45, 90, 135, 180, 225, 270, 315]);
    var size = random(0.75, 1.25);

    fill(random(colors));
    rotate(rotation);

    switch (random(shapes)) {
      case "filled-rectangle":
        rect(x, y, 30 * size, 8 * size);
        break;
      case "hollow-rectangle":
        rect(x, y, 30 * size, 8 * size);
        fill(white);
        rect(x, y, 25 * size, 4 * size);
        break;
      case "filled-circle":
        circle(x, y, 18 * size);
        break;
      case "hollow-circle":
        circle(x, y, 22 * size);
        fill(white);
        circle(x, y, 18 * size);
        break;
      case "filled-triangle":
        triangle(x * size, y * size, (x + 20) * size, (y + 20) * size, (x + 20) * size, (y - 20) * size);
        break;
      case "filled-heart":
        beginShape();
        size = size * random(15, 20);
        vertex(x, y);
        fill(pink);
        bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
        bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
        endShape(CLOSE);
        break;
      case "hollow-triangle":
        triangle(x * size, y * size, (x + 20) * size, (y + 20) * size, (x + 20) * size, (y - 20) * size);
        fill(white);
        triangle(
          x * size + size * 5,
          y * size,
          (x + 12) * size + size * 5,
          (y + 12) * size,
          (x + 12) * size + size * 5,
          (y - 12) * size
        );
        break;
      case "filled-square":
        square(x, y, 22 * size);
        break;
      case "hollow-square":
        square(x, y, 30 * size);
        fill(white);
        square(x, y, 22 * size);
        break;
      case "straight-scribble":
        size = size * random(8, 12);
        beginShape();
        vertex(x, y);
        vertex(x + size, y);
        vertex(x + size, y + size);
        vertex(x + size * 2, y + size);
        vertex(x + size * 2, y + size * 2);
        vertex(x + size * 3, y + size * 2);
        vertex(x + size * 3, y + size * 3);
        vertex(x + size * 4, y + size * 3);
        vertex(x + size * 4, y + size * 4);
        vertex(x + size * 4 - size / 5, y + size * 4);
        vertex(x + size * 4 - size / 5, y + size * 3 + size / 5);
        vertex(x + size * 3 - size / 5, y + size * 3 + size / 5);
        vertex(x + size * 3 - size / 5, y + size * 2 + size / 5);
        vertex(x + size * 2 - size / 5, y + size * 2 + size / 5);
        vertex(x + size * 2 - size / 5, y + size + size / 5);
        vertex(x + size - size / 5, y + size + size / 5);
        vertex(x + size - size / 5, y + size / 5);
        vertex(x, y + size / 5);
        vertex(x, y);
        endShape(CLOSE);
        break;
      case "curved-scribble":
        size = size * random(8, 12);
        beginShape();
        curveVertex(x, y);
        curveVertex(x + size, y);
        curveVertex(x + size, y + size);
        curveVertex(x + size * 2, y + size);
        curveVertex(x + size * 2, y + size * 2);
        curveVertex(x + size * 3, y + size * 2);
        curveVertex(x + size * 3, y + size * 3);
        curveVertex(x + size * 4, y + size * 3);
        curveVertex(x + size * 4, y + size * 4);
        curveVertex(x + size * 4 - size / 4, y + size * 4);
        curveVertex(x + size * 4 - size / 4, y + size * 3 + size / 4);
        curveVertex(x + size * 3 - size / 4, y + size * 3 + size / 4);
        curveVertex(x + size * 3 - size / 4, y + size * 2 + size / 4);
        curveVertex(x + size * 2 - size / 4, y + size * 2 + size / 4);
        curveVertex(x + size * 2 - size / 4, y + size + size / 4);
        curveVertex(x + size - size / 4, y + size + size / 4);
        curveVertex(x + size - size / 4, y + size / 4);
        curveVertex(x, y + size / 4);
        curveVertex(x, y);
        endShape(CLOSE);
        break;
    }
    rotate(-rotation);
  }
}
