const myLibrary = [];

class Books {
  constructor(name, author, pages, haveRead) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
    this.id = name;
  }
}

function addBookToLibrary(name, author, pages, haveRead) {
  myLibrary.push(new Books(name, author, pages, haveRead));
}

addBookToLibrary("The lord of the rings", "J.R.R. Tolkien", 1178, "yes");
addBookToLibrary(
  `Harry Potter and the Philosopher's Stone`,
  "J. K. Rowling",
  223,
  "no"
);
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 336, "yes");

const bookContainer = document.querySelector(".books-container");
const dialog = document.querySelector("dialog");
const closeBtn = document.getElementById("close-btn");
const confirmBtn = document.getElementById("confirm-btn");
const form = document.getElementById("form");

function displayBooks() {
  bookContainer.innerHTML = "";

  const addBookCard = document.createElement("div");
  addBookCard.classList.add("button-card");
  const addBookButton = document.createElement("button");
  addBookButton.setAttribute("id", "add-book-btn");
  addBookButton.textContent = "+";
  addBookCard.appendChild(addBookButton);
  bookContainer.appendChild(addBookCard);

  myLibrary.map((item, index, array) => {
    const newBookCard = document.createElement("div");
    newBookCard.classList.add(
      "book-card",
      `${item.name.replace(/\s+/g, "-").toLowerCase()}`
    );
    newBookCard.setAttribute("data-id", `${item.name}`);

    const closeBtn = document.createElement("button");
    closeBtn.classList.add("card-close-btn");
    closeBtn.textContent = "x";
    closeBtn.setAttribute("data-Btnid", `${item.name}`);

    const name = document.createElement("p");
    name.classList.add("name");
    name.textContent = `${item.name}`;

    const author = document.createElement("p");
    author.classList.add("author");
    author.textContent = `by ${item.author}`;

    const pages = document.createElement("p");
    pages.classList.add("pages");
    pages.textContent = `${item.pages} pages`;

    const haveRead = document.createElement("button");
    haveRead.classList.add("have-read");
    if (item.haveRead === "yes") {
      haveRead.textContent = `read`;
    } else {
      haveRead.textContent = `not read`;
    }
    haveRead.setAttribute("data-readbtnid", `${item.name}`);
    haveRead.setAttribute("haveRead", `${item.haveRead}`);

    newBookCard.appendChild(closeBtn);
    newBookCard.appendChild(name);
    newBookCard.appendChild(author);
    newBookCard.appendChild(pages);
    newBookCard.appendChild(haveRead);
    bookContainer.appendChild(newBookCard);
  });
  resetAddBookBtn();
  resetCardCloseBtn();
  resetHaveReadBtn();
}

const allBookCards = document.querySelectorAll("[data-id]");
const cardCloseBtns = document.querySelectorAll("[data-BtnId]");

function resetAddBookBtn() {
  const addBookBtn = document.getElementById("add-book-btn");
  addBookBtn.addEventListener("click", () => {
    dialog.showModal();
  });
}

function resetCardCloseBtn() {
  const cardCloseBtns = document.querySelectorAll("[data-BtnId]");
  cardCloseBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      myLibrary.map((item, index, array) => {
        if (item.id === btn.dataset.btnid) {
          myLibrary.splice(index, 1);
        }
      });
      displayBooks();
    });
  });
}

function resetHaveReadBtn() {
  const haveReadBtns = document.querySelectorAll("[data-readbtnid]");
  haveReadBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      myLibrary.map((item, index, array) => {
        if (item.id === btn.dataset.readbtnid) {
          if (item.haveRead === "yes") {
            item.haveRead = "no";
          } else if (item.haveRead === "no") {
            item.haveRead = "yes";
          }
        }
      });
      displayBooks();
    });
  });
}

closeBtn.addEventListener("click", (e) => {
  const name = document.getElementById("name");
  const author = document.getElementById("author");
  const pages = document.getElementById("pages");

  dialog.close();
  e.preventDefault();
  name.value = "";
  author.value = "";
  pages.value = "";
});

confirmBtn.addEventListener("click", (e) => {
  const name = document.getElementById("name");
  const author = document.getElementById("author");
  const pages = document.getElementById("pages");
  const haveRead = document.getElementById("have-read");

  if (name.value !== "" && author.value !== "" && pages.value !== "") {
    e.preventDefault();
    const formData = [name.value, author.value, pages.value, haveRead.value];
    addBookToLibrary(formData[0], formData[1], formData[2], formData[3]);
    name.value = "";
    author.value = "";
    pages.value = "";
    dialog.close(formData);
    displayBooks();
  }
});

displayBooks();
