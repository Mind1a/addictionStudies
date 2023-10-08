import { btnNav, container } from "./variables.js";

// Burger Menu Functionality
btnNav.addEventListener("click", function () {
  container.classList.toggle("nav-open");
});
