import React from 'react';
import style from './AddBook.module.css';
// import 'bootstrap/dist/css/bootstrap.css';
const AddBook = () => (
  <div className={style.Books}>
    <form>
      <span name="book" className="my-3"> ADD NEW BOOK</span>
      <div className={style.BoxInput}>
        <input type="text" placeholder="Book title" />
        <input type="text" placeholder="Author" />
        <button type="button" className="btn btn-primary ">Add </button>
      </div>
    </form>
  </div>
);

export default AddBook;
