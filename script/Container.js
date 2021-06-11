// we describe a class that represents and manages the animation area
class Container {
  constructor(
    element, // this represents an HTMLElement (the animation area)
    ballsUpdatedEvent // this function is invoked every time the balls are updated
  ) {
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
       * This function get executed when detects a click on container
       * @param {xcoordinated} x
       * @param {ycoordinated} y
       * @param {*} xSpeed
       * @param {*} ySpeed
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
           * This function get executed when detects a click on ball
           */
          function (ball) {
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

  setColorToAllBalls(color) {
    this.inputColor = color;

    for (const ball of this.balls) {
      ball.element.style.backgroundColor = color;
    }
  }

  setGravityToAllBalls(gravity) {
    for (const ball of this.balls) {
      ball.gravity = gravity;
    }

    this.newGravity = gravity;
  }

  increaseBallSize() {
    for (const ball of this.balls) {
      ball.setSize(ball.size + 5);
    }
    this.newSize = this.balls[0].size;
  }
  decreaseBallSize() {
    for (const ball of this.balls) {
      ball.setSize(ball.size - 5);
    }
    this.newSize = this.balls[0].size;
  }

  increaseBallsSpeed() {
    for (const ball of this.balls) {
      ball.increaseSpeed();
    }
  }

  decreaseBallsSpeed() {
    for (const ball of this.balls) {
      ball.decreaseSpeed();
    }
  }
  reset() {
    // TODO: reset colors
    this.balls = [];
    this.ballsUpdatedEvent(this.balls);
  }
}
