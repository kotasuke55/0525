const humberger = document.getElementById("humberger-menu");
const menu = document.getElementById("menu");
humberger.addEventListener("click", () => {
  humberger.classList.toggle("open");
  menu.classList.toggle("in");
})


