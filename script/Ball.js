class Ball {
  constructor(
    id,
    x,
    y,
    xSpeed,
    ySpeed,
    color,
    size,
    onClick // this function is called up every time a click on the ball is detected
  ) {
    const that = this;
    this.x = x;
    this.y = y;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
    this.size = size;
    this.width = size;
    this.height = size;

    this.element = document.createElement("div");
    this.element.style.backgroundColor = color;
    this.element.style.width = this.width + "px";
    this.element.style.height = this.height + "px";
    this.element.className += "ball";
    this.element.style.left = this.x + "px";
    this.element.style.top = this.y + "px";
    this.element.id = "ball-" + id;
    this.clicked = false;
    this.pause = false;

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

  setSize(size) {
    this.size = size;
    this.width = size;
    this.height = size;
    this.element.style.width = this.width + "px";
    this.element.style.height = this.height + "px";
  }

  decreaseSpeed() {
    if (!(this.xSpeed < 5 && this.xSpeed > -5)) {
      this.xSpeed -= this.xSpeed * 0.1;
    }

    if (!(this.ySpeed < 5 && this.ySpeed > -5)) {
      this.ySpeed -= this.ySpeed * 0.1;
    }
  }

  increaseSpeed() {
    if (this.xSpeed < 30 && this.xSpeed > -30) {
      this.xSpeed += this.xSpeed * 0.1;
    }

    if (this.ySpeed < 30 && this.ySpeed > -30) {
      this.ySpeed += this.ySpeed * 0.1;
    }
  }

  fpause() {
    this.pause = true;
  }

  fplay() {
    this.pause = false;
  }

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

  changeDirectionIfNecessary(x, y) {
    if (x < 0 || x > container.element.offsetWidth - this.size) {
      // if outside of container invert the direction
      this.xSpeed = -this.xSpeed;

      // if outside of container put the ball inside again
      if (x < 0) {
        this.x = 0;
      } else {
        this.x = container.element.offsetWidth - this.size;
      }
    }
    if (y < 0 || y > container.element.offsetHeight - this.size) {
      // if outside of container invert the direction
      this.ySpeed = -this.ySpeed;

      // if outside of container put the ball inside again
      if (y < 0) {
        this.y = -this.y;
      } else {
        this.y = container.element.offsetHeight - this.size;
      }
    }
  }
}
