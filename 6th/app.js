const button = document.getElementById("special-button");
button.textContent = "버튼을 눌러주세요!";

const listItems = document.getElementsByClassName("item");
listItems[0].textContent = "1번항목";
listItems[1].textContent = "2번항목";

const title = document.createElement("h1");
title.textContent = "김멋사";
title.style.fontSize = "50px";

document.body.appendChild(title);

button.addEventListener("click", function onButtonClick() {
  alert("경고창 팝업");
});
