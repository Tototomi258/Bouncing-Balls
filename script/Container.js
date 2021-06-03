class Container {

    constructor(element, height, width, ballsUpdatedEvent) {
        const that=this;
        
        this.element = element;
        this.width = width;
        this.height = height;
        this.element.style.width = width;
        this.element.style.height = height;

        this.moved = false;

        this.timeFrame = 1000/60;
        this.balls=[];
        this.defaultBallSize=40;
        this.colors = ["blue", "red", "green"];

        this.clickOnMove=false;

        this.ballsUpdatedEvent = ballsUpdatedEvent;

        // Check for mousdown and change value of variable "moved" to false
        element.addEventListener("mousedown", function (e) {
            that.clickOnMove = false;
        });
        // Check for mousemove and change value of variable "moved" to true
        element.addEventListener("mousemove", function (e) {
            that.clickOnMove = true;
        });
        // If "moved" variable is set to true, then ball direction is equal to mouse movement
        // If "moved" variable is set to false, then ball direction is random
        element.addEventListener("mouseup", function (e) {
            if (that.clickOnMove) {
                // TODO: Direction based on mouse movement
                console.log("moved");
            } else {
                const genSpeed = () => {
                    const num = Math.floor(Math.random()*4) + 1; // this will get a number between 1 and 99;
                    return num * (Math.round(Math.random()) ? 1 : -1);
                }
                const containerRect = e.target.getBoundingClientRect();
                const x = (e.clientX - containerRect.left) - that.defaultBallSize/2; //x position within the element.
                const y = (e.clientY - containerRect.top) -  that.defaultBallSize/2;//y position within the element.
                //const x = (e.x - (window.innerWidth - container.width) / 2) + that.ballSize / 2;
                //const y = (e.y - (window.innerHeight - container.height) / 2)  + that.ballSize / 2;
                const xSpeed = genSpeed();
                const ySpeed = genSpeed();
                const randomNumber = Math.floor(Math.random() * 3);
                const selectedColor = that.colors[randomNumber];

                const ball=new Ball(that.balls.length, x, y, xSpeed, ySpeed, selectedColor, that.defaultBallSize, that.element);
                that.balls.push(ball);
            }
            that.ballsUpdatedEvent(that.balls);
        });

        setInterval(function () {
            that.element.innerHTML= '';
            for (let index = 0; index < that.balls.length; index++) {
                that.balls[index].move();
                that.element.appendChild(that.balls[index].element);
                console.log("stop");
            }
        }, this.timeFrame );
    
    }

    reset(){
       this.balls=[];
       this.ballsUpdatedEvent(this.balls);
    }

}
