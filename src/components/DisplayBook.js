import React from 'react';
import AddBook from './AddBook';
import Book from './Book';

const DisplayBook = () => {
  const books = [
    { title: 'tarik', author: 'bouari', id: 1 },
    { title: 'dona', author: 'persie', id: 2 },
  ];

  return (
    <div>
      {books.map((book) => (
        <Book key={book.id} title={book.title} author={book.author} />
      ))}
      <AddBook />
    </div>
  );
};
export default DisplayBook;
