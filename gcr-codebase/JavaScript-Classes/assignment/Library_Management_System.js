"use strict";

class Book {
    constructor(title, author, ISBN, isIssued = false) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = isIssued;
    }

    issueBook() {
        if (this.isIssued) {
            console.log(`"${this.title}" is already issued.`);
            return false;
        }
        this.isIssued = true;
        console.log(`"${this.title}" has been issued.`);
        return true;
    }

    returnBook() {
        this.isIssued = false;
        console.log(`"${this.title}" has been returned.`);
    }
}

const books = [
    new Book("The Alchemist", "Paulo Coelho", "ISBN101"),
    new Book("Atomic Habits", "James Clear", "ISBN102"),
    new Book("Wings of Fire", "A. P. J. Abdul Kalam", "ISBN103", true)
];

console.log("Available books:");
books.filter(book => !book.isIssued)
    .forEach(book => console.log(`${book.title} | ${book.author} | ${book.ISBN}`));

function issueByISBN(isbn) {
    const book = books.find(item => item.ISBN === isbn);
    if (!book) {
        console.log("No book found with that ISBN.");
        return;
    }
    book.issueBook();
}

issueByISBN("ISBN102");
console.log("\nAvailable books after issuing:");
books.filter(book => !book.isIssued)
    .forEach(book => console.log(`${book.title} | ${book.ISBN}`));
