import pagesData from "./pages.json" assert { type: "json" };
import { btnNav, container, resursebiList, mainBox } from "./variables.js";

// Resursebi Page Functionality
function showResursebiPage(id) {
  let books = "";
  const dataBooks = pagesData[id].books;

  for (let book in dataBooks) {
    books += `
      <div class="main-box-texts-el">
        <div class="book">
          <a class="book-title" href="${dataBooks[book].link}" target="_blank">${dataBooks[book].title}</a>
          <img class="book-img" src="${dataBooks[book].img}" alt="${dataBooks[book].alt}">
        </div>
      </div>
    `;
  }

  const markup = `
    <h2 class="main-box-subtitle">${pagesData[id].title}</h2>
    <div class="main-box-line"></div>
    <div class="main-box-texts">
      ${books}
    </div>
  `;

  mainBox.innerHTML = markup;
}

resursebiList.addEventListener("click", (e) => {
  let listItem = e.target.closest("a");
  if (listItem) {
    let id = listItem.getAttribute("id");
    showResursebiPage(id);
  }
});

// Burger Menu Functionality
btnNav.addEventListener("click", function () {
  container.classList.toggle("nav-open");
});
