const inputRef = document.querySelector("#validation-input");

function checkValidInput(string) {
  return string.length == inputRef.dataset.length;
}

inputRef.addEventListener("blur", (event) => {
  const value = event.currentTarget.value;

  if (checkValidInput(value)) {
    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
  } else {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  }
});
