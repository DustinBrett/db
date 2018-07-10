/*
  Starfield lets you take a div and turn it into a starfield.
*/

interface Star {
  x: number;
  y: number;
  size: number;
  velocity: number;
}

class Star {
  x: number;
  y: number;
  size: number;
  velocity: number;

  constructor(x, y, size, velocity) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.velocity = velocity;
  }
}

export class Starfield {
  fps = 30;
  minVelocity = 30;
  maxVelocity = 100;
  starCount = 250;

  intervalId: any;

  canvas: any;
  width: number;
  height: number;

  stars: Star[];

  //  The main function - initialises the starfield.
  initialise(div: HTMLDivElement) {
    const self = this;

    //  Store the div.
    self.width = window.innerWidth;
    self.height = window.innerHeight;

    window.addEventListener('resize', function resize(event) {
      self.width = window.innerWidth;
      self.height = window.innerHeight;
      self.canvas.width = self.width;
      self.canvas.height = self.height;
      self.draw();
    });

    //  Create the canvas.
    const canvas = document.createElement('canvas');

    div.appendChild(canvas);
    this.canvas = canvas;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }

  start() {
    //  Create the stars.
    const stars = [];

    for (let i = 0; i < this.starCount; i++) {
      stars[i] = new Star(
        Math.random() * this.width,
        Math.random() * this.height,
        Math.random() * 3 + 1,
       (Math.random() * (this.maxVelocity - this.minVelocity)) + this.minVelocity
      );
    }
    this.stars = stars;

    //  Start the timer.
    const self = this;

    this.intervalId = setInterval(function() {
      self.update();
      self.draw();
    }, 1000 / this.fps);
  }

  stop() {
    clearInterval(this.intervalId);
  }

  update() {
    const dt = 1 / this.fps;

    for (let i = 0; i < this.stars.length; i++) {
      const star = this.stars[i];

      star.y += dt * star.velocity;

      //  If the star has moved from the bottom of the screen, spawn it at the top.
      if (star.y > this.height) {
        this.stars[i] = new Star(Math.random() * this.width, 0, Math.random() * 3 + 1,
         (Math.random() * (this.maxVelocity - this.minVelocity)) + this.minVelocity);
      }
    }
  }

  draw() {
    //  Get the drawing context.
    const ctx = this.canvas.getContext('2d');

    //  Draw the background.
     ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, this.width, this.height);

    //  Draw stars.
    ctx.fillStyle = '#ffffff';
    for (let i = 0; i < this.stars.length; i++) {
      const star = this.stars[i];

      ctx.fillRect(star.x, star.y, star.size, star.size);
    }
  }
}
