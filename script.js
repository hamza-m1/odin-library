const myLibrary = []

function Book(name, author, pages, haveRead) {
    this.name = name
    this.author = author
    this.pages = pages
    this.haveRead = haveRead
    this.id = name
}

function addBookToLibrary(name, author, pages, haveRead) {
    myLibrary.push(new Book(name, author, pages, haveRead))
}



addBookToLibrary('duckling', 'James', 30, true)
addBookToLibrary('cat', 'Richard', 67, true)
addBookToLibrary('frog on a log', 'Harper', 119, false)

const bookContainer = document.querySelector('.books-container')
// const addBookBtn = document.getElementById('add-book-btn')
const dialog = document.querySelector('dialog')
const closeBtn = document.getElementById('close-btn')
const confirmBtn = document.getElementById('confirm-btn')
const form = document.getElementById('form')

// const allBookCards = document.querySelectorAll('[data-id]')
// const cardCloseBtns = document.querySelectorAll('[data-btn-id]')

// const allBookCards = document.querySelectorAll('.book-card')

function displayBooks() {
    // const allBookCards = document.querySelectorAll('.book-card')
    bookContainer.innerHTML = ''

    const addBookCard = document.createElement('div')
    addBookCard.classList.add('button-card')
    const addBookButton = document.createElement('button')
    addBookButton.setAttribute('id', 'add-book-btn')
    addBookButton.textContent = '+'
    addBookCard.appendChild(addBookButton)
    bookContainer.appendChild(addBookCard)


    myLibrary.map((item, index, array) => {
        // let check = false
        // for(let i=0; i<allBookCards.length; i++) {
        //     if (allBookCards[i].firstChild.firstChild.data === item.name) {
        //         check = true
        //     }
        // }
        // if (check === false) {
        // }  
        const newBookCard = document.createElement('div')
            newBookCard.classList.add('book-card', `${item.name.replace(/\s+/g, '-').toLowerCase()}`)
            newBookCard.setAttribute('data-id', `${item.name}`)

            const closeBtn = document.createElement('button')
            closeBtn.classList.add('card-close-btn')
            closeBtn.textContent = 'x'
            closeBtn.setAttribute('data-Btnid', `${item.name}`)


            const name = document.createElement('p')
            name.classList.add('name')
            name.textContent = `${item.name}`

            const author = document.createElement('p')
            author.classList.add('author')
            author.textContent = `${item.author}`

            const pages = document.createElement('p')
            pages.classList.add('pages')
            pages.textContent = `${item.pages} pages`

            const haveRead = document.createElement('button')
            haveRead.classList.add('have-read')
            if (item.haveRead) {
                haveRead.textContent = `read`
            } else {
                haveRead.textContent = `not read`
            }
            haveRead.setAttribute('data-readbtnid', `${item.name}`)

            newBookCard.appendChild(closeBtn)
            newBookCard.appendChild(name)
            newBookCard.appendChild(author)
            newBookCard.appendChild(pages)
            newBookCard.appendChild(haveRead)
            bookContainer.appendChild(newBookCard)
    })
    // let addBookBtn = document.getElementById('add-book-btn')
    // console.log(allBookCards)
    resetAddBookBtn()
    resetCardCloseBtn()
    resetHaveReadBtn()
}

displayBooks()

const allBookCards = document.querySelectorAll('[data-id]')
const cardCloseBtns = document.querySelectorAll('[data-BtnId]')

function resetAddBookBtn() {
    const addBookBtn = document.getElementById('add-book-btn')
    addBookBtn.addEventListener('click', () => {
        dialog.showModal()
    })
}

function resetCardCloseBtn() {
    const cardCloseBtns = document.querySelectorAll('[data-BtnId]')
    cardCloseBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            myLibrary.map((item, index, array) => {
                if (item.id === btn.dataset.btnid) {
                    myLibrary.splice(index, 1)
                }
            })
            displayBooks()
        })
    })
}

function resetHaveReadBtn() {
    const haveReadBtns = document.querySelectorAll('[data-readbtnid]')
    // console.log(haveReadBtns)
    haveReadBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            myLibrary.map((item, index, array) => {
                if (item.id === btn.dataset.readbtnid) {
                    item.haveRead = !item.haveRead
                }
            })
            displayBooks()
        })
    })
}


closeBtn.addEventListener('click', (e) => {
    const name = document.getElementById('name')
    const author = document.getElementById('author')
    const pages = document.getElementById('pages')
    dialog.close()
    e.preventDefault()
    name.value = ''
    author.value = ''
    pages.value = ''
})

confirmBtn.addEventListener('click', (e) => {
    const name = document.getElementById('name')
    const author = document.getElementById('author')
    const pages = document.getElementById('pages')
    const haveRead = document.getElementById('have-read')

    if (name.value !== '' && author.value !== '' && pages.value !== '') {
        e.preventDefault()
        const formData = [name.value, author.value, pages.value, haveRead.value]
        addBookToLibrary(formData[0],formData[1],formData[2],formData[3])
        name.value = ''
        author.value = ''
        pages.value = ''
        dialog.close(formData)
        // console.log(dialog.returnValue)
        displayBooks()
    }
})

// cardCloseBtns.forEach((btn) => {
//     btn.addEventListener('click', () => {
//         // console.log(btn.dataset.btnid)
//         myLibrary.map((item, index, array) => {
//             if (item.id === btn.dataset.btnid) {
//                 console.log(item.id)
//                 myLibrary.splice(index, 1)
//             }
//         })
//         displayBooks()
//     })
// })

// console.log(cardCloseBtns)



// console.log(myLibrary)
// displayBooks()







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