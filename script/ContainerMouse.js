class ContainerMouse {
  constructor(element, defaultBallSize, onClick) {
    const that = this;
    this.oldX = 0;
    this.oldY = 0;
    this.oldTime = 0;
    this.getTimeReq = 0;
    this.defaultBallSize = defaultBallSize;
    // Check for mousdown, grab current mouse position and start frame counter to calculate physics
    element.addEventListener("mousedown", function (e) {
      that.oldX = e.pageX;
      that.oldY = e.pageY;
      that.oldTime = 0;

      function checkFrames() {
        that.oldTime++;
        that.getTimeReq = requestAnimationFrame(checkFrames);
      }

      that.getTimeReq = requestAnimationFrame(checkFrames);
    });

    element.addEventListener("mouseup", function (e) {
      cancelAnimationFrame(that.getTimeReq);

      let xSpeed;
      let ySpeed;
      let yPosition;

      that.totalTime = that.oldTime;
      xSpeed = (e.pageX - that.oldX) / that.totalTime;
      yPosition = e.pageY - that.oldY;
      ySpeed = (e.pageY - that.oldY) / that.totalTime;

      const containerRect = e.target.getBoundingClientRect();
      const x = e.clientX - containerRect.left - that.defaultBallSize / 2; //x position within the element.
      const y = e.clientY - containerRect.top - that.defaultBallSize / 2; //y position within the element.

      onClick(x, y, xSpeed, ySpeed, yPosition);
    });

    // TODO: add eventLister to prevent propagation to the click of the ball
  }
}
