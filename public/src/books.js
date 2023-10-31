// Function to find author by id
function findAuthorById(authors, id) {
  return authors.find(author => author.id === id);
}

// Function to find book by id
function findBookById(books, id) {
  return books.find(book => book.id === id);
}

// Function to partition books by borrowed status
function partitionBooksByBorrowedStatus(books) {
  let borrowed = books.filter(book => book.borrows[0].returned === false);
  let returned = books.filter(book => book.borrows[0].returned === true);
  return [borrowed, returned];
}

// Function to get borrowers for a book
function getBorrowersForBook(book, accounts) {
  let borrowers = [];
  book.borrows.forEach(borrow => {
    let account = accounts.find(acc => acc.id === borrow.id);
    account.returned = borrow.returned;
    borrowers.push(account);
  });
  return borrowers.slice(0, 10); // Return only the first 10 borrowers
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
