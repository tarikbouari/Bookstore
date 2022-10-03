import React from 'react';
import { useDispatch } from 'react-redux';
import style from './Book.module.css';
import { removeBook } from '../redux/books/books';
import Status from './Status';
import Chapter from './Chapter';

const Book = (prop) => {
  const dispatch = useDispatch();
  const {
    id, title, author, category,
  } = prop;
  const removeBookitem = () => {
    dispatch(removeBook(id));
  };
  return (
    <div>
      <div className={style.bookcard}>
        <div className={style.card1}>
          <span className={style.lessonPanel}>{category}</span>
          <div className={style.itemBook}>
            <span className={style.title}>{title}</span>
            <span className={style.author}>{author}</span>
          </div>
          <div className={style.actionBtn}>
            <button type="button"> Comments</button>
            <div className={style.line2} />
            <button type="button" onClick={removeBookitem}> Remove</button>
            <div className={style.line2} />
            <button type="button"> Edit</button>
          </div>
        </div>

        <Status />

        <Chapter />
      </div>

    </div>
  );
};

export default Book;
