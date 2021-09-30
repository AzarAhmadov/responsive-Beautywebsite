const toogleBtn = document.querySelector("#toogle-btn");
const sidebar = document.querySelector("nav");
const closeBtn = document.querySelector(".close-button");

toogleBtn.addEventListener("click", openmenu);

function openmenu(e) {
  sidebar.classList.add("active");
}

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("active");
});

window.addEventListener("scroll", backNav);
let logo = document.querySelector('.logo')
function backNav() {
  const windowValue = window.scrollY;
  const headerNav = document.querySelector("#back-navbar");
  if (windowValue < 150) {
    logo.style.color = "white"
    headerNav.classList.remove("header-back");
  } else {
    headerNav.classList.add("header-back");
    logo.style.color = "black"
  }
}

let navLink = document.querySelectorAll('.navLink');

navLink.forEach(el => {
  el.addEventListener('click',() => {
    sidebar.classList.remove("active");
  })
})