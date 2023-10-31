// Function to find account by id
function findAccountById(accounts, id) {
  return accounts.find(account => account.id === id);
}

// Function to sort accounts by last name
function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) => accountA.name.last > accountB.name.last ? 1 : -1);
}

// Function to get total number of borrows for an account
function getTotalNumberOfBorrows(account, books) {
  let totalBorrows = 0;
  books.forEach(book => {
    book.borrows.forEach(borrow => {
      if(borrow.id === account.id) {
        totalBorrows++;
      }
    });
  });
  return totalBorrows;
}

// Function to get books possessed by an account
function getBooksPossessedByAccount(account, books, authors) {
  let booksPossessed = [];
  books.forEach(book => {
    if(book.borrows.find(borrow => borrow.id === account.id && !borrow.returned)) {
      book.author = authors.find(author => author.id === book.authorId);
      booksPossessed.push(book);
    }
  });
  return booksPossessed;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};

