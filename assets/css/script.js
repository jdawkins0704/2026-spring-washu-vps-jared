function changeColor() {
  const colors = ["#e28975ff", "#a5f8b4ff", "#3357FF", "#e8a1edff", "#e8f25cff"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}

function updateClock() {
  const now = new Date();
  const clock = document.getElementById("clock");

  if (clock) {
    clock.innerText = now.toLocaleTimeString();
  }
}

setInterval(updateClock, 1000);

updateClock();