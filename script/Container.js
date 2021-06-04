class Container {
  constructor(element, height, width, ballsUpdatedEvent) {
    const that = this;

    this.element = element;
    this.width = width;
    this.height = height;
    this.element.style.width = width;
    this.element.style.height = height;

    this.moved = false;
    this.oldX = 0;
    this.oldY = 0;
    this.oldTime = 0;
    this.totalTime = 0;

    this.getTimeReq;

    this.timeFrame = 1000 / 60;
    this.balls = [];
    this.defaultBallSize = 40;
    this.colors = ["blue", "red", "green"];

    this.clickOnMove = false;

    this.ballsUpdatedEvent = ballsUpdatedEvent;

    // Check for mousdown and change value of variable "moved" to false
    element.addEventListener("mousedown", function (e) {
      that.clickOnMove = false;
      that.oldX = e.pageX;
      that.oldY = e.pageY;
      that.oldTime = 0;

      function checkFrames() {
        that.oldTime++;

        console.log(that.oldTime);

        that.getTimeReq = requestAnimationFrame(checkFrames);
      }

      that.getTimeReq = requestAnimationFrame(checkFrames);
    });
    // Check for mousemove and change value of variable "moved" to true
    element.addEventListener("mousemove", function (e) {
      that.clickOnMove = true;
    });
    // If "moved" variable is set to true, then ball direction is equal to mouse movement
    // If "moved" variable is set to false, then ball direction is random
    element.addEventListener("mouseup", function (e) {
      cancelAnimationFrame(that.getTimeReq);

      if (that.clickOnMove) {
        that.totalTime = that.oldTime;
        console.log(`Total time is: ${that.totalTime}`);

        let directionX = (e.pageX - that.oldX) / that.totalTime;
        console.log(directionX, that.totalTime);
        let directionY = (e.pageY - that.oldY) / that.totalTime;

        const containerRect = e.target.getBoundingClientRect();
        const x = e.clientX - containerRect.left - that.defaultBallSize / 2; //x position within the element.
        const y = e.clientY - containerRect.top - that.defaultBallSize / 2; //y position within the element.
        const xSpeed = directionX;
        const ySpeed = directionY;
        const randomNumber = Math.floor(Math.random() * 3);
        const selectedColor = that.colors[randomNumber];

        const ball = new Ball(
          that.balls.length,
          x,
          y,
          xSpeed,
          ySpeed,
          selectedColor,
          that.defaultBallSize,
          that.element
        );
        that.balls.push(ball);
      } else {
        const genSpeed = () => {
          const num = Math.floor(Math.random() * 4) + 1; // this will get a number between 1 and 99;
          return num * (Math.round(Math.random()) ? 1 : -1);
        };
        const containerRect = e.target.getBoundingClientRect();
        const x = e.clientX - containerRect.left - that.defaultBallSize / 2; //x position within the element.
        const y = e.clientY - containerRect.top - that.defaultBallSize / 2; //y position within the element.
        const xSpeed = genSpeed();
        const ySpeed = genSpeed();
        const randomNumber = Math.floor(Math.random() * 3);
        const selectedColor = that.colors[randomNumber];

        const ball = new Ball(
          that.balls.length,
          x,
          y,
          xSpeed,
          ySpeed,
          selectedColor,
          that.defaultBallSize,
          that.element
        );
        that.balls.push(ball);
      }
      that.ballsUpdatedEvent(that.balls);
    });

    requestAnimationFrame(this.move.bind(this));
  }

  move() {
    this.element.innerHTML = "";
    for (let index = 0; index < this.balls.length; index++) {
      this.balls[index].move();
      this.element.appendChild(this.balls[index].element);
    }

    requestAnimationFrame(this.move.bind(this));
  }

  reset() {
    this.balls = [];
    this.ballsUpdatedEvent(this.balls);
  }
}
