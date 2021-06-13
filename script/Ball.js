/** Class that represents each ball */
class Ball {
  /**
   * Create a ball
   * @param {Number} id - the ball's ID
   * @param {Number} x - the ball's x position
   * @param {Number} y - the ball's y position
   * @param {Number} xSpeed - the ball's x speed
   * @param {Number} ySpeed - the ball's y speed
   * @param {String} color - the ball's color
   * @param {Number} size - the ball's size
   * @param {Function} onClick - a function that deletes the ball
   */
  constructor(id, x, y, xSpeed, ySpeed, color, size, onClick) {
    const that = this;
    this.x = x;
    this.y = y;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
    this.size = size;

    this.element = document.createElement("div");
    this.element.style.backgroundColor = color;
    this.element.style.width = this.size + "px";
    this.element.style.height = this.size + "px";
    this.element.className += "ball";
    this.element.style.left = this.x + "px";
    this.element.style.top = this.y + "px";
    this.element.id = "ball-" + id;
    this.clicked = false;

    this.element.addEventListener("mousedown", function (e) {
      e.stopPropagation();
      that.clicked = true;
    });

    this.element.addEventListener("mouseup", function (e) {
      e.stopPropagation();
      if (that.clicked) {
        onClick(that);
      }
      that.clicked = false;
    });
  }

  /**
   * Changes the size of the ball
   * @param {Number} size - new size for the ball
   */
  setSize(size) {
    if (size <= 150 && size >= 10) {
      this.size = size;
      this.element.style.width = this.size + "px";
      this.element.style.height = this.size + "px";
    }
  }

  /**
   * Decrease the speed of the ball
   */
  decreaseSpeed() {
    if (!(this.xSpeed < 1 && this.xSpeed > -1)) {
      this.xSpeed -= this.xSpeed * 0.1;
    }

    if (!(this.ySpeed < 1 && this.ySpeed > -1)) {
      this.ySpeed -= this.ySpeed * 0.1;
    }
  }

  /**
   * Increases the speed of the ball
   */
  increaseSpeed() {
    if (this.xSpeed < 20 && this.xSpeed > -20) {
      this.xSpeed += this.xSpeed * 0.1;
    }

    if (this.ySpeed < 20 && this.ySpeed > -20) {
      this.ySpeed += this.ySpeed * 0.1;
    }
  }

  /**
   * Moves the ball each frame based on the gravity and stops the movement if the it's on pause
   * @param {Number} gravity - gravity of the container
   * @param {Boolean} pause - if the game is paused or not
   */
  move(gravity, pause) {
    if (!pause) {
      this.x += this.xSpeed;
      this.ySpeed += gravity;
      this.y += this.ySpeed;

      this.changeDirectionIfNecessary(this.x, this.y);

      this.element.style.left = this.x + "px";
      this.element.style.top = this.y + "px";
    }
  }

  /**
   * Checks whether the ball should change direction if it hits the walls of the container
   * @param {Number} x - x position of the ball
   * @param {Number} y - y position of the ball
   */
  changeDirectionIfNecessary(x, y) {
    if (
      x < container.element.getBoundingClientRect().left ||
      x > container.element.getBoundingClientRect().right - this.size
    ) {
      // if outside of container invert the direction
      this.xSpeed = -this.xSpeed;

      // if outside of container put the ball inside again
      if (x < container.element.getBoundingClientRect().left) {
        this.x = container.element.getBoundingClientRect().left;
      } else {
        this.x = container.element.getBoundingClientRect().right - this.size;
      }
    }
    if (
      y < container.element.getBoundingClientRect().top ||
      y > container.element.getBoundingClientRect().bottom - this.size
    ) {
      // if outside of container invert the direction
      this.ySpeed = -this.ySpeed;

      // if outside of container put the ball inside again
      if (y < container.element.getBoundingClientRect().top) {
        this.y = container.element.getBoundingClientRect().top;
      } else {
        this.y = container.element.getBoundingClientRect().bottom - this.size;
      }
    }
  }
}
