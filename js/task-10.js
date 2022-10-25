function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlsRef = document.querySelector("#controls");
const boxesWrapperRef = document.querySelector("#boxes");
const inputRef = controlsRef.firstElementChild;
const renderBtnRef = controlsRef.querySelector("button[data-create]");
const destroyBtnRef = controlsRef.querySelector("button[data-destroy]");

function createBoxes(amount) {
  destroyBoxes();

  for (let i = 0; i < amount; i += 1) {
    const newBoxRef = document.createElement("div");
    newBoxRef.style.cssText = `width: ${i * 10 + 30}px; height: ${
      i * 10 + 30
    }px; background: ${getRandomHexColor()}; border: solid 1px`;
    boxesWrapperRef.append(newBoxRef);
  }
}

function destroyBoxes() {
  const boxesRef = boxesWrapperRef.querySelectorAll("div");
  boxesRef.forEach((box) => box.remove());
}

renderBtnRef.addEventListener("click", () => createBoxes(inputRef.value));
destroyBtnRef.addEventListener("click", destroyBoxes);
