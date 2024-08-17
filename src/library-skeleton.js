import crypto from 'node:crypto';

export class Library {
    id;
    owner;
    createdAt;
    books;

    constructor(owner) {
        this.id = crypto.randomUUID();
        this.owner = owner;
        this.createdAt = Date.now();
        this.books = new Map();
    }

    getData() {
        return {
            id: this.id,
            owner: this.owner,
            createdAt: this.createdAt,
        };
    }

    getBookById(id) {
        return this.books.get(id);
    }

    getBooks() {
        return Array.from(this.books.values());
    }

    addBook(book) {
        this.books.set(book.id, book);
    }
}
