// init counter value on HTML
let counter = document.querySelector("#counter span");
counter.textContent = 0;

// init container that represents the animation area
const container = new Container(
  document.getElementById("container"),

  // the callback is invoked every time the balls are updated
  function (balls) {
    counter.textContent = balls.length;
  }
);

document.getElementById("reset").addEventListener("click", function (balls) {
  container.reset();
});

document.getElementById("inputcolor").addEventListener("change", function (e) {
  container.setColorToAllBalls(e.target.value);
});

document.getElementById("gravity").addEventListener("change", function (e) {
  container.newGravity = Number(e.target.value);
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

document.getElementById("pause").addEventListener("click", function () {
  container.pause = true;
});

document.getElementById("play").addEventListener("click", function () {
  container.pause = false;
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

// music play
const music = document.getElementById("backgroundMusic");
const musicButtonPlay = document.getElementById("musicPlay");
musicButtonPlay.addEventListener("click", function () {
  music.play();
});

// music pause
const musicButtonPause = document.getElementById("musicPause");
musicButtonPause.addEventListener("click", function () {
  music.pause();
});

// alert info
let info = document.getElementById("info");

info.addEventListener("click", function () {
  window.alert(
    `Bouncing Balls

Game Info: 
- Click or drag on the container to create a ball
- Use "Speed +" and "Speed -" to increase and decrease the balls speeds
- Use "BallSize +" and "BallSize -" to increase and decrease the balls sizes
- Use "Pause" and "Play" to stop and resume the game
- Use "Reset" to delete all the balls in the container
- Use the palette to change the colours of the balls
- Use the slider to adjust the gravity of the container
- Use "🎵" and "🔇" to play and pause the music`
  );
});
