import { Library } from "../library-skeleton";
import { RollupStateHandler } from "../config/rollup-state-handler";
import { libraryStorage } from "../library-database";

export class LibraryController {
  async createLibrary(data) {
    return await RollupStateHandler.advanceWrapper(() => {
      const newLibrary = new Library(data.owner);
      libraryStorage.addOne(newLibrary);

      return {
        ok: true,
        message: `Library created successfully!`,
        data: newLibrary.getData(),
      };
    });
  }

  async getAllLibraries() {
    return await RollupStateHandler.inspectWrapper(() =>
      libraryStorage.getAll()
    );
  }

  async getLibraryById(data) {
    const libraryId = data[0];
    const storageRequest = libraryStorage.getOneById(libraryId);

    if (!storageRequest?.id) {
      return await RollupStateHandler.handleReport({
        error: `Library not found for id '${libraryId}'.`,
      });
    }

    return await RollupStateHandler.inspectWrapper(() => ({
      data: {
        details: storageRequest.getData(),
        books: storageRequest.getBooks(),
      },
    }));
  }
}
