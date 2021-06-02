class Ball {

    constructor(id, x, y, xSpeed, ySpeed, color, size, container) {
        this.x = x;
        this.y = y;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
        this.size=size;
        this.width = size;
        this.height = size;

        this.container = container;
        this.element = document.createElement("div");
        this.element.style.backgroundColor = color;
        this.element.style.width = this.width + "px";
        this.element.style.height = this.height + "px";
        this.element.className += "ball";
        this.element.style.left = this.x  + "px";
        this.element.style.top = this.y + "px";
        //this.onclick = console.log("presa");
        //adding a different id to every ball
        this.element.id = id;
        
        
    }
/* mettere funzione draw senza moveto,
    }*/

    move() {
        this.x+=this.xSpeed;
        this.y+=this.ySpeed;
        this.changeDirectionIfNecessary(this.x, this.y);

        this.element.style.left = this.x  + "px";
        this.element.style.top = this.y  + "px";
        // TODO: change to a requestAnimationFrame()

    }
    
    changeDirectionIfNecessary (x, y) {
    if (x < 0 || x > this.container.offsetWidth - this.size) {
      this.xSpeed = -this.xSpeed;
    }
    if (y < 0 || y > this.container.offsetHeight - this.size) {
      this.ySpeed = -this.ySpeed;
    }
    }
  }