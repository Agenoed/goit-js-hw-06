function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const spanTextRef = document.querySelector(".color");
const buttonRef = document.querySelector(".change-color");

const onButtonClick = () => {
  const bodyColor = getRandomHexColor();
  spanTextRef.textContent = bodyColor;
  document.body.setAttribute("style", `background-color: ${bodyColor}`);
};

buttonRef.addEventListener("click", onButtonClick);
