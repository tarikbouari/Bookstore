import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBooks } from '../redux/books/books';
import AddBook from './AddBook';
import Book from './Book';
// import { getBooks } from '../redux/books/books';

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
