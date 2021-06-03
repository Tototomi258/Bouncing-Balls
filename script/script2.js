

const container = new Container(
    document.getElementById("container"),
    document.getElementById("container").offsetHeight,
    document.getElementById("container").offsetWidth,
    
    () => {}
);


document.getElementById("reset").addEventListener("click", reset);
function reset() {
    container.reset();
    counter.innerHTML = 0;
  }