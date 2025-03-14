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
        newBookCard.classList.add('book-card')

        const name = document.createElement('p')
        name.classList.add('name')
        name.textContent = `${item.name}`

        const author = document.createElement('p')
        author.classList.add('author')
        author.textContent = `${item.author}`

        const pages = document.createElement('p')
        pages.classList.add('pages')
        pages.textContent = `${item.pages} pages`

        const haveRead = document.createElement('p')
        haveRead.classList.add('have-read')
        haveRead.textContent = `Have read: ${item.haveRead}`

        newBookCard.appendChild(name)
        newBookCard.appendChild(author)
        newBookCard.appendChild(pages)
        newBookCard.appendChild(haveRead)
        bookContainer.appendChild(newBookCard)
        return item
    })
}

const addBookBtn = document.getElementById('add-book-btn')
const dialog = document.querySelector('dialog')
const closeBtn = document.getElementById('close-btn')
const confirmBtn = document.getElementById('confirm-btn')
const form = document.getElementById('form')


addBookBtn.addEventListener('click', () => {
    dialog.showModal()
})

closeBtn.addEventListener('click', (e) => {
    e.preventDefault()
    dialog.close()
})

confirmBtn.addEventListener('click', (e) => {
    const name = document.getElementById('name')
    const author = document.getElementById('author')
    const pages = document.getElementById('pages')
    const haveRead = document.getElementById('have-read')

    if (name.value !== '' && author.value !== '' && pages.value !== '') {
        const formDataArray = [name.value, author.value, pages.value, haveRead.value]
        e.preventDefault()
        dialog.close(formDataArray)
        console.log(dialog.returnValue)
    }
})

// dialog.addEventListener('close', (e) => {
//     addBookToLibrary()
// })



// console.log(myLibrary)
displayBooks()







    // const name = document.createElement('p')
    // name.textContent = item.name
    // name.appendChild(newBookCard)
    // console.log(item.name)



    // for(let i=1; i<=myLibrary.length; i++) {
    //     const newBookCard = document.createElement('div')
    //     // console.log(newBookCard)

    //     // const removeSpaces = item.name.replace(/\s+/g, '-').toLowerCase()
    //     // `${removeSpaces}-card`
    //     newBookCard.classList.add('book-card')
    //     newBookCard.textContent = 'from the map'
    //     bookContainer.appendChild(newBookCard)
    // }