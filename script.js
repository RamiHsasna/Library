class Book {
  constructor(
    title = "Unknown",
    author = "Unknown",
    numberOfPages = "0",
    isRead = false
  ) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.isRead = isRead;
  }
}
class Library {
  constructor() {
    this.books = [];
  }

  addBook(newBook) {
    if (!this.isInLibrary(newBook)) {
      this.books.push(newBook);
    }
  }

  removeBook(title) {
    this.books = this.books.filter((book) => book.title !== title);
  }

  getBook() {
    return this.book.find((book) => book.title === title);
  }

  isInLibrary() {
    return this.books.some((book) => book.title === newBook.title);
  }
}
const Library = new Library();
