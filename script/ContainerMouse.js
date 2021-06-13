/** Class representing the mouse interaction */
class ContainerMouse {
  /**
   * Create a mouse interaction class
   * @param {Object} element - an object that represents the container node
   * @param {Number} defaultBallSize - the default size of the balls
   * @param {Function} onClick - it creates the ball on user's click event
   */
  constructor(element, defaultBallSize, onClick) {
    const that = this;
    this.oldX = 0;
    this.oldY = 0;
    this.oldTime = 0;
    this.getTimeReq = 0;
    this.defaultBallSize = defaultBallSize;

    this.moved = false;
    // Check for mousdown, grab current mouse position and start frame counter to calculate physics
    element.addEventListener("mousedown", function (e) {
      that.oldX = e.pageX;
      that.oldY = e.pageY;
      that.oldTime = 0;

      that.moved = false;

      /**
       * Checks the ammount of frames that that passed since the user clicks, until the user releases the click
       */
      function checkFrames() {
        that.oldTime += 2;
        that.getTimeReq = requestAnimationFrame(checkFrames);
      }

      that.getTimeReq = requestAnimationFrame(checkFrames);
    });

    element.addEventListener("mousemove", function (e) {
      that.moved = true;
    });

    element.addEventListener("mouseup", function (e) {
      cancelAnimationFrame(that.getTimeReq);

      let xSpeed;
      let ySpeed;

      if (!that.moved) {
        xSpeed = Math.floor(Math.random() * 9) - 5;
        ySpeed = Math.floor(Math.random() * 9) - 5;
      } else {
        that.totalTime = that.oldTime;
        xSpeed = (e.pageX - that.oldX) / that.totalTime;
        ySpeed = (e.pageY - that.oldY) / that.totalTime;
      }

      const x = e.pageX - that.defaultBallSize / 2; //x position within the element.
      const y = e.pageY - that.defaultBallSize / 2; //y position within the element.

      onClick(x, y, xSpeed, ySpeed);
    });
  }
}
