import React from 'react';
import { useDispatch } from 'react-redux';
import style from './Book.module.css';
import { removeBook } from '../redux/books/books';

const Book = (prop) => {
  const dispatch = useDispatch();
  const { id, title, author } = prop;
  const removeBookitem = () => {
    dispatch(removeBook(id));
  };
  return (
    <div>
      <div className={style.bookcard}>
        <div className={style.itemBook}>
          <p>{title}</p>
          <p>{author}</p>
          <button type="button" className="btn btn-primary" onClick={removeBookitem}>Remove</button>
        </div>
      </div>
    </div>
  );
};

export default Book;
