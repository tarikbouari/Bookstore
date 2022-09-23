import React from 'react';
import style from './Book.module.css';

const Book = (props) => {
  const { title, author } = props;
  return (

    <div>
      <div className={style.bookcard}>
        <div className={style.itemBook}>
          <p>{title}</p>
          <p>{author}</p>
          <button type="button" className="btn btn-primary">Remove</button>
        </div>
      </div>
    </div>
  );
};

export default Book;
