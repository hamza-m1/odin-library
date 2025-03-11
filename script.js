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

const bookContainer = document.querySelector('.books-container')

function displayBooks() {
    myLibrary.map((item, index, array) => {
        const newBookCard = document.createElement('div')
        console.log(newBookCard)

        // const removeSpaces = item.name.replace(/\s+/g, '-').toLowerCase()
        // `${removeSpaces}-card`
        newBookCard.classList.add('book-card')
        newBookCard.textContent = 'from the map'
        bookContainer.appendChild(newBookCard)
        return item
    })


    // for(let i=1; i<=myLibrary.length; i++) {
    //     const newBookCard = document.createElement('div')
    //     // console.log(newBookCard)

    //     // const removeSpaces = item.name.replace(/\s+/g, '-').toLowerCase()
    //     // `${removeSpaces}-card`
    //     newBookCard.classList.add('book-card')
    //     newBookCard.textContent = 'from the map'
    //     bookContainer.appendChild(newBookCard)
    // }
}







// console.log(myLibrary)
displayBooks()







    // const name = document.createElement('p')
    // name.textContent = item.name
    // name.appendChild(newBookCard)
    // console.log(item.name)