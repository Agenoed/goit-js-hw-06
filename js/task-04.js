const counterRef = document.querySelector("#counter");
const counterValue = document.querySelector("#value");
const decrementBtn = counterRef.firstElementChild;
const incrementBtn = counterRef.lastElementChild;

function increment() {
  counterValue.textContent = Number(counterValue.textContent) + 1;
}

function decrement() {
  counterValue.textContent = Number(counterValue.textContent) - 1;
}

decrementBtn.addEventListener("click", decrement);
incrementBtn.addEventListener("click", increment);
