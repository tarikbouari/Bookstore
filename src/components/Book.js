import React from 'react';
import { useDispatch } from 'react-redux';
import style from './Book.module.css';
import { removeBook } from '../redux/books/books';
import Status from './Status';
import Chapter from './Chapter';

const Book = (prop) => {
  const dispatch = useDispatch();
  const { id, title, author } = prop;
  const removeBookitem = () => {
    dispatch(removeBook(id));
  };
  return (
    <div>
      <div className={style.bookcard}>
        <div className={style.Card1}>
          <span className={style.lessonPanel}> Action</span>
          <div className={style.itemBook}>
            <span className={style.title}>{title}</span>
            <span className={style.author}>{author}</span>
            <button type="button" className="btn btn-primary" onClick={removeBookitem}>Remove</button>
          </div>
          <div className={style.actionBtn}>
            <span> Comments</span>
            <span> Remove</span>
            <span> Edit</span>
          </div>
        </div>

        <Status />
        <Chapter />
      </div>

    </div>
  );
};

export default Book;
