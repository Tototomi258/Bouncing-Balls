// init counter value on HTML
counter.innerHTML = 0;

// init container that represents the animation area
const container = new Container(
  document.getElementById("container"),

  // the callback is invoked every time the balls are updated
  function (balls) {
    counter.innerHTML = balls.length;
  }
);


// TODO implements a class to manage the following dashboard logics


document.getElementById("reset").addEventListener("click", function (balls) {
  container.reset();
});

document.getElementById("inputcolor").addEventListener("change", function (e) {
  container.setColorToAllBalls(e.target.value);
});

document.getElementById("ballsizeplus").addEventListener("click", function (e) {
  container.increaseBallSize();
});

document.getElementById("ballsizeless").addEventListener("click", function (e) {
  container.decreaseBallSize();
});

document.getElementById("speedplus").addEventListener("click", function (e) {
  container.increaseBallsSpeed();
});

document.getElementById("speedless").addEventListener("click", function (e) {
  container.decreaseBallsSpeed();
});

document.getElementById("pause").addEventListener("click", function (balls) {
  container.pauseBall();
});

document.getElementById("play").addEventListener("click", function (balls) {
  container.pauseBall();
});

document.addEventListener("keydown", function (e) {
  if (e.key == "ArrowUp") {
    container.increaseBallSize();
  }
  if (e.key == "ArrowDown") {
    container.decreaseBallSize();
  }

  if (e.key == "ArrowRight") {
    container.increaseBallsSpeed();
  }

  if (e.key == "ArrowLeft") {
    container.decreaseBallsSpeed();
  }
});


