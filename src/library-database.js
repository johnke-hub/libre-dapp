export class LibraryStorage {
    libraries;

    constructor() {
        this.libraries = new Map();
    }

    getAll() {
        return Array.from(this.libraries.values());
    }

    addOne(library) {
        this.libraries.set(library.id, library);
    }

    getOneById(id) {
        return this.libraries.get(id);
    }

    updateOne(library) {
        this.libraries.set(library.id, library);
    }
}

export const libraryStorage = new LibraryStorage();
