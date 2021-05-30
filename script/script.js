// User variables
// TODO: change size with HTML buttons and keyboard shortcuts
let size = 40;
// TODO: implement counter
let count = 0;
// TODO: take speed into account for movement
// TODO: change speed with HTML buttons and keyboard shortcuts
let speed = 1;
// TODO: pause and unpause animation
let pause = false;
// TODO: take gravity into account for movement depending on size
// TODO: implement skin variable to change ball's color or image
let skin;

// Element to hold all the balls
let container = {
  element: document.getElementById("container"),
  width: 800,
  height: 600,
  initialize: function () {
    this.element.style.width = this.width + "px";
    this.element.style.height = this.height + "px";

    document.body.appendChild(this.element);
  },
};

// Check for mousdown and change value of variable "moved" to false
let moved;
container.element.addEventListener("mousedown", function (e) {
  moved = false;
});

// Check for mousemove and change value of variable "moved" to true
container.element.addEventListener("mousemove", function (e) {
  moved = true;
});

// If "moved" variable is set to true, then ball direction is equal to mouse movement
// If "moved" variable is set to false, then ball direction is random
container.element.addEventListener("mouseup", function (e) {
  if (moved) {
    // TODO: Direction based on mouse movement
    console.log("moved");
  } else {
    let xCoordinate = e.x - (window.innerWidth - container.width) / 2;
    let yCoordinate = e.y - (window.innerHeight - container.height) / 2;
    let xDirection = Math.random() * 10 - 5;
    let randomNumber = Math.floor(Math.random() * 3);
    let selectedColor = colors[randomNumber];

    Ball.create(selectedColor, xDirection, 3).draw(xCoordinate, yCoordinate);
  }
});

let colors = ["blue", "red", "green"];

let Ball = {
  /**
   * Creates a Ball object based on the color and direction parameters
   * @param {String} color - the random selected color for the ball
   * @param {Number} dx - direction on the X axis
   * @param {Number} dy - direction on the Y axis
   * @returns {Object} created Ball object
   */
  create: function (color, dx, dy) {
    let newBall = Object.create(this);
    newBall.dx = dx;
    newBall.dy = dy;
    newBall.width = size;
    newBall.height = size;
    newBall.element = document.createElement("div");
    newBall.element.style.backgroundColor = color;
    newBall.element.style.width = newBall.width + "px";
    newBall.element.style.height = newBall.height + "px";
    newBall.element.className += " ball";
    newBall.width = parseInt(newBall.element.style.width);
    newBall.height = parseInt(newBall.element.style.height);
    container.element.appendChild(newBall.element);
    return newBall;
  },
  /**
   * Moves the Ball to a new position
   * @param {Number} x - distance from left side of container
   * @param {Number} y - distance from top side of container
   */
  moveTo: function (x, y) {
    this.element.style.left = x + "px";
    this.element.style.top = y + "px";
  },
  /**
   * Canges the direction of the Ball if it reaches the sides of the container
   * @param {Number} x - distance from left side of container
   * @param {Number} y - distance from top side of container
   */
  changeDirectionIfNecessary: function (x, y) {
    if (x < 0 || x > container.width - this.width) {
      this.dx = -this.dx;
    }
    if (y < 0 || y > container.height - this.height) {
      this.dy = -this.dy;
    }
  },
  /**
   * Draws and updates the Ball by calling the moveTo function to change the Ball's position
   * @param {Number} x - distance from left side of container
   * @param {Number} y - distance from top side of container
   */
  draw: function (x, y) {
    this.moveTo(x, y);
    let ball = this;
    // TODO: change to a requestAnimationFrame()
    setTimeout(function () {
      ball.changeDirectionIfNecessary(x, y);
      ball.draw(x + ball.dx, y + ball.dy);
    }, 1000 / 60);
  },
};

// TODO: delete all balls or only the ball that has been clicked

container.initialize();
let ball1 = Ball.create("blue", 4, 3);
let ball2 = Ball.create("red", 1, 5);
let ball3 = Ball.create("green", 2, 2);
ball1.draw(70, 0);
ball2.draw(20, 200);
ball3.draw(300, 330);
