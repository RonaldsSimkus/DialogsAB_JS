const container = document.getElementById("container");
const text = document.getElementById("text");

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnimation();

function breathAnimation() {
  text.innerText = "Breathe In!";
  container.className = "container grow";

  setTimeout(() => {
    text.innerText = "Hold";

    setTimeout(() => {
      text.innerText = "Breathe Out!";
      container.className = "container shrink";
    }, holdTime);
  }, breatheTime);
}

setInterval(breathAnimation, totalTime);

const btn = document.querySelector("button");
const txt = document.querySelector("p");

btn.addEventListener("click", updateBtn);

var isOn = false;

const button = document.querySelector("#button");

const disableButton = () => {
  button.disabled = true;
};

button.addEventListener("click", disableButton);
