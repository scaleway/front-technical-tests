// Should add addBook, getBooksByAuthor, getTitles, openNewLibrary
const library = {
  booksStore: [],
};

// Should return title - author
function getFormatedTitle(book) {
  return "";
}

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
  // add books to library with the fetchBooks return

  console.log(library.getTitles());
  console.log(library.getBooksByAuthor("George Orwell"));

  const newLibrary = library.openNewLibrary();
  newLibrary.addBook({
    title: "Foundation",
    author: "Isaac Asimov",
    year: 1951,
  });

  console.log(newLibrary.getTitles(), library.getTitles());
})();
