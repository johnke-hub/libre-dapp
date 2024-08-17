import crypto from 'node:crypto';

export const BookContentType = {
    plainText: 'plainText',
    url: 'url',
    html: 'html',
};

export class Book {
    id;
    library;
    addedAt;
    title;
    description;
    content;
    contentType;
    borrower;
    borrowedAt;

    constructor({ library, title, description, content, contentType }) {
        this.library = library;
        this.title = title;
        this.id = crypto.randomUUID();
        this.addedAt = Date.now();
        this.description = description;
        this.content = content;

        if (contentType && BookContentType[contentType]) {
            this.contentType = BookContentType[contentType];
        } else if (contentType && !BookContentType[contentType]) {
            throw { error: 'Invalid content type.' };
        }
    }

    getData() {
        return {
            id: this.id,
            library: this.library,
            addedAt: this.addedAt,
            title: this.title,
            description: this.description,
            content: this.content,
            contentType: this.contentType,
            borrower: this.borrower,
            borrowedAt: this.borrowedAt,
        };
    }
}
