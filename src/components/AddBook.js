import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import style from './AddBook.module.css';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const [stateForm, setStateForm] = useState({
    title: '',
    author: '',
    category: '',

  });

  const changeFormState = (e) => {
    e.preventDefault();
    setStateForm({ ...stateForm, [e.target.name]: e.target.value });
  };

  const sendBookData = (e) => {
    e.preventDefault();
    if (!stateForm.title.trim() || !stateForm.author.trim()) return;

    const book = {
      item_id: uuidv4(),
      title: stateForm.title,
      author: stateForm.author,
      category: stateForm.category,

    };
    dispatch(addBook(book));

    setStateForm({ title: '', author: '', category: '' });
  };
  return (
    <div className={style.Books}>
      <form onSubmit={sendBookData}>
        <span name="book" className={style.adBook}> ADD NEW BOOK </span>
        <div className={style.BoxInput}>
          <input type="text" placeholder="Book title" name="title" onChange={changeFormState} value={stateForm.title} />
          <input type="text" placeholder="Author" name="author" onChange={changeFormState} value={stateForm.author} />
          <select
            value={stateForm.category}
            onChange={changeFormState}
            name="category"
          >
            <option className={style.bold}>Select Category</option>
            <option>Fiction</option>
            <option>Action</option>
            <option>Crime</option>
          </select>

          <button type="submit" className="btn btn-primary">ADD</button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
