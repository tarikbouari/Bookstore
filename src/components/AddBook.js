import React from 'react';
import { useDispatch } from 'react-redux';
import style from './AddBook.module.css';
import { enterBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  return (
    <div className={style.Books}>
      <form onSubmit={() => dispatch(enterBook())}>
        <span name="book" className="my-3"> ADD NEW BOOK</span>
        <div className={style.BoxInput}>
          <input type="text" placeholder="Book title" />
          <input type="text" placeholder="Author" />
          <button type="submit" className="btn btn-primary">Add </button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
