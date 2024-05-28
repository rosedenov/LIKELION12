const makeRandColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

function colorize() {
  this.style.backgroundColor = makeRandColor();
  this.style.color = makeRandColor();
}

const buttons = document.querySelectorAll("button");

for (let button of buttons) {
  button.addEventListener("mouseover", colorize);
}

const ps = document.querySelectorAll("p");

for (let p of ps) {
  p.addEventListener("mouseover", colorize);
}

const as = document.querySelectorAll("a");

for (let a of as) {
  a.addEventListener("mouseover", colorize);
}

function colorize() {
  this.style.backgroundColor = makeRandColor();
  this.style.color = makeRandColor();
}
