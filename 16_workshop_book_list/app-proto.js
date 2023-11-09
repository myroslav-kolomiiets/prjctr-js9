'use strict';

function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

function Ui() {}

Ui.prototype.addBookToList = function({title, author, isbn}) {
    const list = document.querySelector('.book-list');
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td><a href="#" class="delete">X</a></td>
    `;

    list.appendChild(row);
}

Ui.prototype.deleteBook = function(target) {
    target.parentElement.parentElement.remove();
}

Ui.prototype.clearFields = function() {
    document.querySelector('.title').value = '';
    document.querySelector('.author').value = '';
    document.querySelector('.isbn').value = '';
}

document.querySelector('.book-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const title = document.querySelector('.title').value;
    const author = document.querySelector('.author').value;
    const isbn = document.querySelector('.isbn').value;

    const book = new Book(title, author, isbn);

    const ui = new Ui();

    ui.addBookToList(book);
    ui.clearFields();
})

document.querySelector('.book-list').addEventListener('click', (event) => {
    const ui = new Ui();

    if(event.target.className === 'delete') {
        ui.deleteBook(event.target);
    }
})















