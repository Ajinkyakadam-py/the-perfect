const moon = document.getElementById("moon");
const text = document.getElementById("text");
const train = document.getElementById("train");
const desertMoon = document.getElementById("desert-moon"); // Corrected element id
const man = document.getElementById("man");

window.addEventListener("scroll", () => {
  const value = window.scrollY;
  moon.style.top = value * 0.1 + "px"; // Adjust speed as needed (0.1 for slower, 2 for faster)
  text.style.top = 80 - value * 0.2 + "%"; // Adjust speed as needed
  train.style.left = value * 1.2 + "px"; // Adjust speed as needed
  desertMoon.style.top = value * 0.3 + "px"; // Adjust speed as needed
  man.style.left = value * 0.8 + "px"; // Adjust speed as needed
});

const calScrollValue = () => {
  const scrollProgress = document.getElementById("progress");
  const pos = document.documentElement.scrollTop;
  const calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollValue = Math.round((pos * 100) / calcHeight);

  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }

  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });

  scrollProgress.style.background = `conic-gradient(#194eb9 ${scrollValue}%, #67ccff ${scrollValue}%)`;
};

window.onscroll = calScrollValue;
window.onload = calScrollValue;