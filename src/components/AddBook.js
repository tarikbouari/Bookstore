import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import style from './AddBook.module.css';
import { enterBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const [stateForm, setStateForm] = useState({ title: '', author: '' });

  const changeFormState = (e) => {
    e.preventDefault();
    setStateForm({ ...stateForm, [e.target.name]: e.target.value });
  };

  const sendBookState = (e) => {
    e.preventDefault();
    if (!stateForm.title.trim() || !stateForm.author.trim()) return;

    const book = {
      title: stateForm.title,
      author: stateForm.author,
      id: uuidv4(),
    };

    dispatch(enterBook(book));
    setStateForm({ title: '', author: '' });
  };
  return (
    <div className={style.Books}>
      <form onSubmit={sendBookState}>
        <span name="book" className="my-3"> ADD NEW BOOK</span>
        <div className={style.BoxInput}>
          <input type="text" placeholder="Book title" name="title" onChange={changeFormState} value={stateForm.title} />
          <input type="text" placeholder="Author" name="author" onChange={changeFormState} value={stateForm.author} />
          <button type="submit" className="btn btn-primary">ADD BOOK</button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
