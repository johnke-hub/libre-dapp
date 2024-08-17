import { BookController } from "./book";
import { LibraryController } from "./library";

const libraryController = new LibraryController();
const bookController = new BookController();

export const controller = {
  createLibrary: libraryController.createLibrary,
  getAllLibraries: libraryController.getAllLibraries,
  getLibraryById: libraryController.getLibraryById,
  addBook: bookController.addBook,
  getBookById: bookController.getBookById,
  borrowBook: bookController.borrowBook,
  returnBook: bookController.returnBook,
};
