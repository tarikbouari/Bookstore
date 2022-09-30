import React from 'react';
import { useSelector } from 'react-redux';
import AddBook from './AddBook';
import Book from './Book';

const DisplayBook = () => {
  const books = useSelector((state) => state.book);

  return (
    <div>
      {books.map((book) => (
        <Book
          key={book[0]}
          id={book[0]}
          title={book[1][0].title}
          author={book[1][0].author}
        />
      ))}
      <AddBook />
    </div>
  );
};
export default DisplayBook;
