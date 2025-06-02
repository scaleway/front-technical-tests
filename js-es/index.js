const booksStore = []

// Should add addBook, getBooksByAuthor, getTitles
const library = {
}


// Should return title - author
function getFormatedTitle(book) {
  return ''
}

function fetchBooks() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const books = [
        { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
        { title: '1984', author: 'George Orwell', year: 1949 },
        { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 }
      ]
      resolve(books)
    }, 1000)
  })
}

// Exemple d'utilisation
(async () => {
  // add books to library with the fetchBooks return

  console.log(library.getTitles())
  console.log(library.getBooksByAuthor('George Orwell'))
})()
