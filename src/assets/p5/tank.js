export default function sketch(p5) {
  let outerElement = document.getElementsByClassName("Splash")[0];

  var body = document.body,
    html = document.documentElement;
  let width = Math.max(
    body.scrollWidth,
    body.offsetWidth,
    html.clientWidth,
    html.scrollWidth,
    html.offsetWidth
  );
  let height = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );

  p5.setup = function() {
    p5.noLoop();
  };

  // function setup() {
  //   noLoop();
  // }
  p5.draw = function() {
    actuallyDrawSomething();
  };
  // function draw() {
  //   actuallyDrawSomething();
  // }

  p5.windowResized = function() {
    width = Math.max(
      body.scrollWidth,
      body.offsetWidth,
      html.clientWidth,
      html.scrollWidth,
      html.offsetWidth
    );
    height = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    actuallyDrawSomething();
  };
  // function windowResized() {
  // width = Math.max(
  //   body.scrollWidth,
  //   body.offsetWidth,
  //   html.clientWidth,
  //   html.scrollWidth,
  //   html.offsetWidth
  // );
  // height = Math.max(
  //   body.scrollHeight,
  //   body.offsetHeight,
  //   html.clientHeight,
  //   html.scrollHeight,
  //   html.offsetHeight
  // );
  // actuallyDrawSomething();
  // }

  function actuallyDrawSomething() {
    // Variables
    var white = p5.color(255, 255, 255);
    var pink = p5.color(255, 105, 180);
    var totalPixels = width * height;

    // Uncomment/comment any colors you don't/do want
    var colors = [
      p5.color(159, 204, 245), // Blue   - light
      p5.color(83, 166, 241), // Blue   - dark
      p5.color(168, 224, 99), // Green  - light
      p5.color(86, 171, 47), // Green  - dark
      p5.color(255, 140, 69), // Orange - light
      p5.color(222, 98, 98), // Orange - dark
      p5.color(241, 95, 121), // Pink   - light
      p5.color(178, 69, 146), // Pink   - dark
      p5.color(234, 175, 200), // Purple - light
      p5.color(110, 90, 163), // Purple - dark
      p5.color(242, 201, 76), // Yellow - light
      p5.color(242, 141, 51) // Yellow - dark
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
    var ratio = p5.random(3, 5); // 8 to 12 seems good

    // Setup
    var canvas = p5.createCanvas(width, height);
    canvas.parent();
    p5.background(white);
    p5.noStroke();
    p5.angleMode(p5.DEGREES);
    p5.rectMode(p5.CENTER);
    p5.translate(width / 2, height / 2);
    var drawableObjects = totalPixels / (ratio * 1500);

    // Draw
    for (var i = 0; i < p5.round(drawableObjects); i++) {
      var x = p5.random(-width / 2, width / 2) * 1.5;
      var y = p5.random(-height / 2, height / 2) * 1.5;
      var rotation = p5.random([0, 45, 90, 135, 180, 225, 270, 315]);
      var size = p5.random(0.75, 1.25);

      p5.fill(p5.random(colors));
      p5.rotate(rotation);

      switch (p5.random(shapes)) {
        case "filled-rectangle":
          p5.rect(x, y, 30 * size, 8 * size);
          break;
        case "hollow-rectangle":
          p5.rect(x, y, 30 * size, 8 * size);
          p5.fill(white);
          p5.rect(x, y, 25 * size, 4 * size);
          break;
        case "filled-circle":
          p5.circle(x, y, 18 * size);
          break;
        case "hollow-circle":
          p5.circle(x, y, 22 * size);
          p5.fill(white);
          p5.circle(x, y, 18 * size);
          break;
        case "filled-triangle":
          p5.triangle(
            x * size,
            y * size,
            (x + 20) * size,
            (y + 20) * size,
            (x + 20) * size,
            (y - 20) * size
          );
          break;
        case "filled-heart":
          p5.beginShape();
          size = size * p5.random(15, 20);
          p5.vertex(x, y);
          p5.fill(pink);
          p5.bezierVertex(
            x - size / 2,
            y - size / 2,
            x - size,
            y + size / 3,
            x,
            y + size
          );
          p5.bezierVertex(
            x + size,
            y + size / 3,
            x + size / 2,
            y - size / 2,
            x,
            y
          );
          p5.endShape(p5.CLOSE);
          break;
        case "hollow-triangle":
          p5.triangle(
            x * size,
            y * size,
            (x + 20) * size,
            (y + 20) * size,
            (x + 20) * size,
            (y - 20) * size
          );
          p5.fill(white);
          p5.triangle(
            x * size + size * 5,
            y * size,
            (x + 12) * size + size * 5,
            (y + 12) * size,
            (x + 12) * size + size * 5,
            (y - 12) * size
          );
          break;
        case "filled-square":
          p5.square(x, y, 22 * size);
          break;
        case "hollow-square":
          p5.square(x, y, 30 * size);
          p5.fill(white);
          p5.square(x, y, 22 * size);
          break;
        case "straight-scribble":
          size = size * p5.random(8, 12);
          p5.beginShape();
          p5.vertex(x, y);
          p5.vertex(x + size, y);
          p5.vertex(x + size, y + size);
          p5.vertex(x + size * 2, y + size);
          p5.vertex(x + size * 2, y + size * 2);
          p5.vertex(x + size * 3, y + size * 2);
          p5.vertex(x + size * 3, y + size * 3);
          p5.vertex(x + size * 4, y + size * 3);
          p5.vertex(x + size * 4, y + size * 4);
          p5.vertex(x + size * 4 - size / 5, y + size * 4);
          p5.vertex(x + size * 4 - size / 5, y + size * 3 + size / 5);
          p5.vertex(x + size * 3 - size / 5, y + size * 3 + size / 5);
          p5.vertex(x + size * 3 - size / 5, y + size * 2 + size / 5);
          p5.vertex(x + size * 2 - size / 5, y + size * 2 + size / 5);
          p5.vertex(x + size * 2 - size / 5, y + size + size / 5);
          p5.vertex(x + size - size / 5, y + size + size / 5);
          p5.vertex(x + size - size / 5, y + size / 5);
          p5.vertex(x, y + size / 5);
          p5.vertex(x, y);
          p5.endShape(p5.CLOSE);
          break;
        case "curved-scribble":
          size = size * p5.random(8, 12);
          p5.beginShape();
          p5.curveVertex(x, y);
          p5.curveVertex(x + size, y);
          p5.curveVertex(x + size, y + size);
          p5.curveVertex(x + size * 2, y + size);
          p5.curveVertex(x + size * 2, y + size * 2);
          p5.curveVertex(x + size * 3, y + size * 2);
          p5.curveVertex(x + size * 3, y + size * 3);
          p5.curveVertex(x + size * 4, y + size * 3);
          p5.curveVertex(x + size * 4, y + size * 4);
          p5.curveVertex(x + size * 4 - size / 4, y + size * 4);
          p5.curveVertex(x + size * 4 - size / 4, y + size * 3 + size / 4);
          p5.curveVertex(x + size * 3 - size / 4, y + size * 3 + size / 4);
          p5.curveVertex(x + size * 3 - size / 4, y + size * 2 + size / 4);
          p5.curveVertex(x + size * 2 - size / 4, y + size * 2 + size / 4);
          p5.curveVertex(x + size * 2 - size / 4, y + size + size / 4);
          p5.curveVertex(x + size - size / 4, y + size + size / 4);
          p5.curveVertex(x + size - size / 4, y + size / 4);
          p5.curveVertex(x, y + size / 4);
          p5.curveVertex(x, y);
          p5.endShape(p5.CLOSE);
          break;
      }
      p5.rotate(-rotation);
    }
  }
}
