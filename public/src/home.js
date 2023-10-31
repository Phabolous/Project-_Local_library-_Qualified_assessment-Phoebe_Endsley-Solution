// Function to get total books count
function getTotalBooksCount(books) {
  return books.length;
}

// Function to get total accounts count
function getTotalAccountsCount(accounts) {
  return accounts.length;
}

// Function to get books borrowed count
function getBooksBorrowedCount(books) {
  return books.filter(book => !book.borrows[0].returned).length;
}

// Function to get most common genres
function getMostCommonGenres(books) {
  let genres = books.map(book => book.genre);
  let count = {};
  genres.forEach(genre => { count[genre] = (count[genre] || 0) + 1; });
  let sortedGenres = Object.entries(count).sort((a, b) => b[1] - a[1]);
  return sortedGenres.map(genre => ({ name: genre[0], count: genre[1] })).slice(0, 5);
}

// Function to get most popular books
function getMostPopularBooks(books) {
  let result = books.map(book => ({ name: book.title, count: book.borrows.length }));
  return result.sort((bookA, bookB) => bookB.count - bookA.count).slice(0, 5);
}

// Function to get most popular authors
function getMostPopularAuthors(books, authors) {
  let result = authors.map(author => {
    let authorBooks = books.filter(book => book.authorId === author.id);
    let totalBorrows = authorBooks.reduce((acc, book) => acc + book.borrows.length, 0);
    return { name: `${author.name.first} ${author.name.last}`, count: totalBorrows };
  });
  return result.sort((authorA, authorB) => authorB.count - authorA.count).slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};

