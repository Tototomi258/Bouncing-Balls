counter.innerHTML = 0;

const container = new Container(
  document.getElementById("container"),
  document.getElementById("container").offsetHeight,
  document.getElementById("container").offsetWidth,
  (balls) => {
    counter.innerHTML = balls.length;
  }
);

document.getElementById("reset").addEventListener("click", (balls) => {
  container.reset();
});
