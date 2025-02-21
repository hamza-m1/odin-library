const myLibrary = []

function Book(name, author, pages, haveRead) {
    this.name = name
    this.author = author
    this.pages = pages
    this.haveRead = haveRead
}

function addBookToLibrary(name, author, pages, haveRead) {
    myLibrary.push(new Book(name, author, pages, haveRead))
}

addBookToLibrary('duckling', 'James', 30, true)
addBookToLibrary('cat', 'Richard', 67, true)
addBookToLibrary('frog on a log', 'Harper', 119, false)

function displayBooks() {
    
}





console.log(myLibrary)