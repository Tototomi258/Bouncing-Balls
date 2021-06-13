/** Class that represents and manages the animation container */
class Container {
  /**
   * Create the container
   * @param {Object} element - an object that represents the container node
   * @param {Function} ballsUpdatedEvent - a function that increases the ball counter
   */
  constructor(element, ballsUpdatedEvent) {
    const that = this;

    this.element = element;
    this.inputColor = null;
    this.balls = [];
    this.defaultBallSize = 40;
    this.newSize = null;
    this.defaultGravity = 0;
    this.newGravity = null;

    this.pause = false;

    this.clickOnMove = false;

    this.ballsUpdatedEvent = ballsUpdatedEvent;
    //Create instance of ContainerMouse for handle mouse click and ball creation
    this.containerMouse = new ContainerMouse(
      element,
      this.defaultBallSize,
      /**
       * This function get executed when detects a click on container and creates the ball
       * @param {Number} x - the x position on the page
       * @param {Number} y - the y position on the page
       * @param {Number} xSpeed - the x velocity of the ball
       * @param {Number} ySpeed - the y velocity of the ball
       */
      function (x, y, xSpeed, ySpeed) {
        const randomColor =
          "#" + Math.floor(Math.random() * 16777215).toString(16);

        const ball = new Ball(
          that.balls.length,
          x,
          y,
          xSpeed,
          ySpeed,
          that.inputColor || randomColor,
          that.newSize || that.defaultBallSize,
          /**
           * Deletes the clicked ball from the container and decreases the counter by 1
           * @param {Object} ball - the ball that has been clicked
           */
          function (ball) {
            console.log(typeof ball);
            for (let i = 0; i < that.balls.length; i++) {
              if (that.balls[i].element.id == ball.element.id) {
                that.balls.splice(i, 1);
                that.ballsUpdatedEvent(that.balls);
              }
            }
          }
        );
        that.balls.push(ball);
        that.ballsUpdatedEvent(that.balls);
      }
    );
    requestAnimationFrame(this.step.bind(this));
  }

  /**
   * Each frame of animation
   */
  step() {
    this.element.innerHTML = "";
    for (const ball of this.balls) {
      ball.move(
        this.newGravity === null ? this.defaultGravity : this.newGravity,
        this.pause
      );
      this.element.appendChild(ball.element);
    }

    requestAnimationFrame(this.step.bind(this));
  }

  /**
   * Changes the color of all the balls
   * @param {String} color - the selected color
   */
  setColorToAllBalls(color) {
    console.log(typeof color);
    this.inputColor = color;

    for (const ball of this.balls) {
      ball.element.style.backgroundColor = color;
    }
  }

  /**
   * Changes the gravity of all balls
   * @param {Number} gravity - the selected gravity
   */
  setGravityToAllBalls(gravity) {
    for (const ball of this.balls) {
      ball.gravity = gravity;
    }

    this.newGravity = gravity;
  }

  /**
   * Increases the size of all balls
   */
  increaseBallSize() {
    for (const ball of this.balls) {
      ball.setSize(ball.size + 5);
    }
    this.newSize = this.balls[0].size;
  }

  /**
   * Decreases the size of all balls
   */
  decreaseBallSize() {
    for (const ball of this.balls) {
      ball.setSize(ball.size - 5);
    }
    this.newSize = this.balls[0].size;
  }

  /**
   * Increases the speed of all balls
   */
  increaseBallsSpeed() {
    for (const ball of this.balls) {
      ball.increaseSpeed();
    }
  }

  /**
   * Decreases the speed of all balls
   */
  decreaseBallsSpeed() {
    for (const ball of this.balls) {
      ball.decreaseSpeed();
    }
  }

  /**
   * Deletes all balls and resets color and size
   */
  reset() {
    this.balls = [];
    this.inputColor = null;
    this.newSize = this.defaultBallSize;
    this.ballsUpdatedEvent(this.balls);
  }
}
