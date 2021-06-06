class Ball {
  constructor(id, x, y, xSpeed, ySpeed, yPosition, color, size, gravity) {
    this.x = x;
    this.y = y;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
    this.yPosition = yPosition;
    this.size = size;
    this.width = size;
    this.height = size;

    this.gravity = gravity;

    this.container = container.element;

    this.element = document.createElement("div");
    this.element.style.backgroundColor = color;
    this.element.style.width = this.width + "px";
    this.element.style.height = this.height + "px";
    this.element.className += "ball";
    this.element.style.left = this.x + "px";
    this.element.style.top = this.y + "px";
    this.element.id = id;
  }

  setSize(size) {
    this.size = size;
    this.width = size;
    this.height = size;
    this.element.style.width = this.width + "px";
    this.element.style.height = this.height + "px";
  }

  decreaseSpeed() {
    this.xSpeed = this.xSpeed - this.xSpeed * 0.1;
    this.ySpeed = this.ySpeed - this.ySpeed * 0.1;
  }

  increaseSpeed() {
    this.xSpeed = this.xSpeed + this.xSpeed * 0.1;
    this.ySpeed = this.ySpeed + this.ySpeed * 0.1;
  }

  move() {
    this.x += this.xSpeed;

    this.yPosition = this.yPosition + -this.ySpeed + this.gravity / 2;
    this.y += this.yPosition;
    this.changeDirectionIfNecessary(this.x, this.y);

    this.element.style.left = this.x + "px";
    this.element.style.top = this.y + "px";
  }

  changeDirectionIfNecessary(x, y) {
    if (x < 0 || x > this.container.offsetWidth - this.size) {
      // if outside of container invert the direction
      this.xSpeed = -this.xSpeed;

      // if outside of container put the ball inside again
      if (x < 0) {
        this.x = 0;
      } else {
        this.x = this.container.offsetWidth - this.size;
      }
    }
    if (y < 0 || y > this.container.offsetHeight - this.size) {
      // if outside of container invert the direction
      this.ySpeed = -this.ySpeed;
      this.yPosition = -this.yPosition;

      // if outside of container put the ball inside again
      if (y < 0) {
        this.y = 0;
      } else {
        this.y = this.container.offsetHeight - this.size;
      }
    }
  }
}
