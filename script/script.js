counter.innerHTML = 0;

const container = new Container(
  document.getElementById("container"),
  document.getElementById("container").offsetHeight,
  document.getElementById("container").offsetWidth,
  (balls) => {
    counter.innerHTML = balls.length;
  }
);

document.getElementById("reset").addEventListener("click", function(balls) {
  container.reset();
});

document.getElementById("inputcolor").addEventListener("change", function(e) {
  container.setColorToAllBalls(e.target.value);
});