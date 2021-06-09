let mainNav = document.getElementById("app-menu");
let navBarToggle = document.getElementById("app-navbar-toggle");

navBarToggle.addEventListener("click", function() {
  mainNav.classList.toggle("active");
  navBarToggle.classList.toggle("open");
});