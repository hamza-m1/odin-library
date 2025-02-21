const myLibrary = []

function Book(name, author) {
    this.name = name
    this.author = author
}

function addBookToLibrary(name, author) {
    myLibrary.push(new Book(name, author))
}


// addBookToLibrary('duckling', 'james')
// console.log(myLibrary)