import * as p5 from "p5";

export const sketch = (p: p5) => {
  const scaleFactor = 4;

  p.setup = function () {
    p.createCanvas(300, 300);
    p.noLoop();
    p.pixelDensity(1);
  };

  p.draw = function () {
    p.scale(scaleFactor);
    p.background(220);

    // Draw tree trunk
    p.fill(139, 69, 19); // Brown color
    p.rect(31, 44, 6, 19);

    // Draw tree leaves
    p.fill(0, 128, 0); // Green color
    p.ellipse(34, 37, 25, 31);

    // Draw apple
    p.fill(255, 0, 0); // Red color
    p.ellipse(27, 28, 4, 4);

    // Draw apple stem
    p.strokeWeight(0.5);
    p.line(27, 27, 28, 26);

    // Draw text "GRAVITY"
    p.fill(255, 255, 255); // White color
    p.textSize(6);
    p.textFont("Arial");
    p.stroke(0);
    p.strokeWeight(1);
    p.text("GRAVITY", 44, 12);
  };
};
