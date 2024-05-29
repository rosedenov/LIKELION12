document.querySelector("button").addEventListener("click", (e) => {
  console.log(e);
});

document.querySelector("input").addEventListener("input", (e) => {
  console.log(e);
});

const input = document.querySelector("input");
const h1 = document.querySelector("h1");

input.addEventListener("input", (e) => {
  h1.innerText = input.value;
});
