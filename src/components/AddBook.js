import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import style from './AddBook.module.css';
import { enterBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const [stateForm, setStateForm] = useState({title:"", author:""});
  
  const ChangeFormState = (e) => {
    e.preventDefault;
    setStateForm({...stateForm, [ e.target.name]: e.target.value})
  } 

  return (
    <div className={style.Books}>
      <form onSubmit={() => dispatch(enterBook())}>
        <span name="book" className="my-3"> ADD NEW BOOK</span>
        <div className={style.BoxInput}>
          <input type="text" placeholder="Book title" name= "title" />
          <input type="text" placeholder="Author" name= "author" />
          <button type="submit" className="btn btn-primary">Add </button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
