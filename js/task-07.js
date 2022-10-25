const inputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

function changeTextFontSize() {
  textRef.style.fontSize = `${inputRef.value}px`;
}

inputRef.addEventListener("input", changeTextFontSize);
