
const menuBtn = document.querySelector(".menuIcon");
const menu = document.querySelector(".navigation ul");

menuBtn.addEventListener("click", function () {
  menu.classList.toggle('show'); //Hace lo mismo que el if:
  /*if (menu.classList.contains("show")) {
    menu.classList.remove("show");
  } else {
    menu.classList.add("show");
  }*/
});
