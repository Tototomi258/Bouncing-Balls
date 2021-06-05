class Container {
    constructor(element, height, width, ballsUpdatedEvent) {
        const that = this;

        this.element = element;
        this.width = width;
        this.height = height;
        this.element.style.width = width;
        this.element.style.height = height;
        this.inputColor=null;
        this.moved = false;
        this.oldX = 0;
        this.oldY = 0;
        this.oldTime = 0;
        this.totalTime = 0;

        this.getTimeReq;

        this.timeFrame = 1000 / 60;
        this.balls = [];
        this.defaultBallSize = 40;
        

        this.clickOnMove = false;

        this.ballsUpdatedEvent = ballsUpdatedEvent;
        //Create instance of ContainerMouse for handle mouse click and ball creation
        this.containerMouse = new ContainerMouse(
            element,
            this.defaultBallSize, 
            /**
             * This function get executed when detects a click on 'element'(container)
             * @param {xcoordinated} x 
             * @param {ycoordinated} y 
             * @param {*} xSpeed 
             * @param {*} ySpeed 
             */
            function (x, y, xSpeed, ySpeed) {
            const randomColor = "#"+Math.floor(Math.random()*16777215).toString(16);

           
            const ball = new Ball(
                that.balls.length,
                x,
                y,
                xSpeed,
                ySpeed,
                that.inputColor || randomColor,
                that.defaultBallSize,
                that.element
            );
            that.balls.push(ball);
            that.ballsUpdatedEvent(that.balls);
        })
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

    setColorToAllBalls(color){
        this.inputColor=color;
        for(let i=0; i<this.balls.length;i++){
            this.balls[i].element.style.backgroundColor=color;
        }  
    }

    increaseBallSize(){
        for(let i=0; i<this.balls.length;i++){
            this.balls[i].setSize(this.balls[i].size+5);
        }
    }

    reset() {
        this.balls = [];
        this.ballsUpdatedEvent(this.balls);
    }  
}
