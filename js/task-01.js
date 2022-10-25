const categoriesListRef = document.querySelector("#categories");
const categoriesRefs = document.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesListRef.children.length}`);

categoriesRefs.forEach((ref) => {
  console.log(`Category: ${ref.firstElementChild.textContent}`);
  console.log(`Elements: ${ref.lastElementChild.children.length}`);
});
