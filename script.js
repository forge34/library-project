let container = document.querySelector('.book-grid')
let btn = document.getElementById('btn')
let create = document.getElementById('create')

function Book(name , Author , pages){
    this.name = name
    this.author = Author
    this.pages = pages

}

function show_popup(){
    let popup = document.querySelector('.popup')

    popup.classList.add('show')

}

function add_book(book ,cont){
    let div = document.createElement('div')
    let name = document.createElement('h3')
    let author = document.createElement('h3')
    let pages = document.createElement('h3')

    let popup = document.querySelector('.popup')

    name.textContent = `Book Name : ${book.name}`
    author.textContent = `Author : ${book.author}`
    pages.textContent = `Pages : ${book.pages}`

    div.classList.add('card')

    div.append(name , author , pages)

    console.log(div)

    popup.classList.remove('show')

    cont.append(div)

}

function get_info(c){
    let name =  document.getElementById('name')
    let author = document.getElementById('author')
    let pages = document.getElementById('pages')

    console.log(name.value , author.value , pages.value)

    let book = new Book(name.value , author.value , pages.value)

    add_book(book , c)
}

btn.addEventListener('click' , show_popup)
create.addEventListener('click' , () => get_info(container))