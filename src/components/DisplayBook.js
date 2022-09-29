import React from "react";
import { useSelector } from "react-redux";
import AddBook from "./AddBook";
import Book from "./Book";

const DisplayBook = () => {
  const books = useSelector((state) => state.book);
  return (
    <div>
      {books.map((book) => (
        <Book
          id={book.id}
          key={book.id}
          title={book.title}
          author={book.author}
        />
      ))}
      <AddBook />
    </div>
  );
};
export default DisplayBook;
