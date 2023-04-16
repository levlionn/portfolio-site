"use client";
import React, { useEffect, useRef, useState } from "react";
import p5 from "p5";

// The PongGame component displays and controls the Pong game using p5.js, Next.js 13, TypeScript, and Tailwind CSS.
const PongGame = () => {
  // Create a reference to the game container div
  const gameContainer = useRef<HTMLDivElement>(null);

  // Define the sketch function for p5.js to create the Pong game
  let sketch = (p: p5) => {
    // Declare variables for ball and paddles
    let ball: any;
    let leftPaddle: any;
    let rightPaddle: any;

    // Ball class represents the ball object in the game

    class Ball {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;

      constructor() {
        this.x = p.width / 2;
        this.y = p.height / 2;
        this.size = 12;
        this.speedX = 4;
        this.speedY = 4;
      }

      // Track ball movement
      move() {
        this.x += this.speedX;
        this.y += this.speedY;
      }

      // Handle bounce on paddle
      bounce() {
        if (this.y < 0 || this.y > p.height) {
          this.speedY *= -1;
        }
      }

      collidePaddle(paddle: any) {
        if (
          this.x - this.size / 2 < paddle.x + paddle.width &&
          this.x + this.size / 2 > paddle.x &&
          this.y - this.size / 2 < paddle.y + paddle.height &&
          this.y + this.size / 2 > paddle.y
        ) {
          this.speedX *= -1;
          paddle.passes++; // Increment the passes count for the paddle
        }
      }

      display() {
        p.ellipse(this.x, this.y, this.size);
      }

      reset() {
        this.x = p.width / 2;
        this.y = p.height / 2;
      }
    }

    // Paddle class represents a paddle object in the game
    class Paddle {
      x: number;
      y: number;
      width: number;
      height: number;
      passes: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.width = 10;
        this.height = 60;
        this.passes = 0;
      }

      move(ballY: number) {
        if (ballY < this.y + this.height / 2 && this.y > 0) {
          this.y -= 5;
        }
        if (
          ballY > this.y + this.height / 2 &&
          this.y < p.height - this.height
        ) {
          this.y += 5;
        }
      }

      display() {
        p.rect(this.x, this.y, this.width, this.height);
      }
    }

    // p5.js setup function initializes the canvas, ball, and paddles
    p.setup = () => {
      p.createCanvas(640, 480);
      ball = new Ball();
      leftPaddle = new Paddle(20, p.height / 2 - 30);
      rightPaddle = new Paddle(p.width - 30, p.height / 2 - 30);
    };

    // p5.js draw function is executed repeatedly and updates the game's state
    p.draw = () => {
      p.background(0);
      p.fill(255);

      ball.move();
      ball.bounce();
      ball.collidePaddle(leftPaddle);
      ball.collidePaddle(rightPaddle);
      ball.display();

      leftPaddle.move(ball.y); // Pass the ball's Y position
      leftPaddle.display();

      rightPaddle.move(ball.y); // Same as above comment
      rightPaddle.display();

      p.fill(255);
      p.textSize(16);
      p.text(`Left Paddle Passes: ${leftPaddle.passes}`, 10, 20);
      p.text(`Right Paddle Passes: ${rightPaddle.passes}`, p.width - 190, 20);

      if (ball.x < 0 || ball.x > p.width) {
        ball.reset();
      }
    };
  };

  // useEffect hook to create the p5.js instance and clean up when the component is unmounted
  useEffect(() => {
    let myP5: p5 | null = null;

    if (gameContainer.current) {
      myP5 = new p5(sketch, gameContainer.current);
    }

    return () => {
      if (myP5) {
        myP5.remove();
      }
    };
  }, []);

  // Render the game container div for p5.js to draw the Pong game in

  return (
    <div
      ref={gameContainer}
      id="game-container"
      className="w-full h-96 mb-32"
    ></div>
  );
};

export default PongGame;
