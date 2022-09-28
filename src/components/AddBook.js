import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import style from './AddBook.module.css';
import { enterBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const [stateForm, setStateForm] = useState({title:"", author:""});
  
  const changeFormState = (e) => {
    e.preventDefault();
    setStateForm({...stateForm, [ e.target.name]: e.target.value})
  } 

  const sendBookState = (e) => {
    let idBook =0;
    e.preventDefault();
    if(!stateForm.title.trim() || !stateForm.author.trim()) return alert ("Add title and Author");
    
    const book = {
      title: stateForm.title,
      author:stateForm.author,
      id: idBook+1
    }
    dispatch(enterBook(book))
    setStateForm({title:'',author:''})
  } 

  return (
    <div className={style.Books}>
      <form onSubmit={sendBookState()}>
        <span name="book" className="my-3"> ADD NEW BOOK</span>
        <div className={style.BoxInput}>
          <input type="text" placeholder="Book title" name= "title"  onChange={changeFormState()}  value={stateForm.title}/>
          <input type="text" placeholder="Author" name= "author" value={stateForm.author}/>
          <button type="submit" className="btn btn-primary">ADD BOOK</button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
