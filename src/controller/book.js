import { Book } from "../book-skeleton";
import { RollupStateHandler } from "../config/rollup-state-handler";
import { libraryStorage } from "../library-database";

export class BookController {
  async addBook(data) {
    if (!data.library || !data.title) {
      return await RollupStateHandler.handleReport({
        error: "Library id and title must be provided.",
      });
    }

    const library = libraryStorage.getOneById(data.library);

    if (!library.id) {
      return await RollupStateHandler.handleReport({
        error: `Library not found for id '${data.library}'`,
      });
    }

    return await RollupStateHandler.advanceWrapper(() => {
      const newBook = new Book(data);
      library.addBook(newBook);
      libraryStorage.updateOne(library);

      return {
        ok: true,
        message: `Book added successfully to library '${library.id}'!`,
        data: newBook.getData(),
      };
    });
  }

  async getBookById(data) {
    const libraryId = data[0];
    const library = libraryStorage.getOneById(libraryId);

    if (!library?.id) {
      return await RollupStateHandler.handleReport({
        error: `Library not found for id '${libraryId}'.`,
      });
    }

    const bookId = data[1];
    const book = library.getBookById(bookId);

    if (!book?.id) {
      return await RollupStateHandler.handleReport({
        error: `Book not found for id '${bookId}'.`,
      });
    }

    return await RollupStateHandler.inspectWrapper(() => ({
      details: book,
    }));
  }

  async borrowBook(data) {
    const libraryId = data.libraryId;
    const bookId = data.bookId;
    const userId = data.userId;

    const library = libraryStorage.getOneById(libraryId);
    if (!library?.id) {
      return await RollupStateHandler.handleReport({
        error: `Library not found for id '${libraryId}'.`,
      });
    }

    const book = library.getBookById(bookId);
    if (!book?.id || book.borrower) {
      return await RollupStateHandler.handleReport({
        error: `Book not available for id '${bookId}'.`,
      });
    }

    return await RollupStateHandler.advanceWrapper(() => {
      book.borrower = userId;
      book.borrowedAt = Date.now();
      libraryStorage.updateOne(library);

      return {
        ok: true,
        message: `Book borrowed successfully!`,
        data: book.getData(),
      };
    });
  }

  async returnBook(data) {
    const libraryId = data.libraryId;
    const bookId = data.bookId;

    const library = libraryStorage.getOneById(libraryId);
    if (!library?.id) {
      return await RollupStateHandler.handleReport({
        error: `Library not found for id '${libraryId}'.`,
      });
    }

    const book = library.getBookById(bookId);
    if (!book?.id || !book.borrower) {
      return await RollupStateHandler.handleReport({
        error: `Book not currently borrowed for id '${bookId}'.`,
      });
    }

    return await RollupStateHandler.advanceWrapper(() => {
      book.borrower = null;
      book.borrowedAt = null;
      libraryStorage.updateOne(library);

      return {
        ok: true,
        message: `Book returned successfully!`,
        data: book.getData(),
      };
    });
  }
}
