const btn = document.querySelector("button");
const nav = document.querySelector("nav ul");

btn.addEventListener("click", () => {
  nav.classList.toggle("active");
});
