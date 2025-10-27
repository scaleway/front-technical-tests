// TODO: You need to implement addBook, getBooksByAuthor, getTitles, openNewLibrary functions to make the code below works
const library = {
  booksStore: [],
};

// TODO: Should return title - author
function getFormatedTitle(book) {
  return "";
}

// You dont need to edit this function
function fetchBooks() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const books = [
        {
          title: "The Great Gatsby",
          author: "F. Scott Fitzgerald",
          year: 1925,
        },
        { title: "1984", author: "George Orwell", year: 1949 },
        { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
      ];
      resolve(books);
    }, 1000);
  });
}

(async () => {
  // TODO: Add books to library object with the fetchBooks return

  // This should output good values
  console.log(library.getTitles());
  console.log(library.getBooksByAuthor("George Orwell"));

  // Its a new library so its a copy of the old one but we can add book seperately in each of them
  const newLibrary = library.openNewLibrary();
  newLibrary.addBook({
    title: "Foundation",
    author: "Isaac Asimov",
    year: 1951,
  });

  // Should have 4 books in newLibrary and 3 books in library
  console.log(newLibrary.getTitles(), library.getTitles());
})();
