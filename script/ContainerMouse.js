class ContainerMouse {
    constructor(element,defaultBallSize, onClick) {
        const that = this;
        this.clickOnMove = false;
        this.oldX = 0;
        this.oldY = 0;
        this.oldTime = 0;
        this.getTimeReq=0;
        this.defaultBallSize=defaultBallSize;
        // Check for mousdown and change value of variable "moved" to false
        element.addEventListener("mousedown", function (e) {
            that.clickOnMove = false;
            that.oldX = e.pageX;
            that.oldY = e.pageY;
            that.oldTime = 0;

            function checkFrames() {
                that.oldTime++;
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

            let xSpeed;
            let ySpeed;
            if (that.clickOnMove) {
                that.totalTime = that.oldTime;
                xSpeed = (e.pageX - that.oldX) / that.totalTime;
                ySpeed = (e.pageY - that.oldY) / that.totalTime;
            } else {
                const genSpeed = () => {
                    const num = Math.floor(Math.random() * 4) + 1; // this will get a number between 1 and 99;
                    return num * (Math.round(Math.random()) ? 1 : -1);
                };
                xSpeed = genSpeed();
                ySpeed = genSpeed();
            }

            const containerRect = e.target.getBoundingClientRect();
            const x = e.clientX - containerRect.left - that.defaultBallSize / 2; //x position within the element.
            const y = e.clientY - containerRect.top - that.defaultBallSize / 2; //y position within the element.
        
            onClick(x,y,xSpeed,ySpeed);
        });

       //requestAnimationFrame (this.move.bind(this));
    }
}