import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const ADD_BOOK = "bookstore/books/ADD_BOOK";
const RMV_BOOK = "bookstore/books/RMV_BOOK";
const GET_BOOK = "bookstore/books/GET_BOOKS"
urlApi = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/${key}/books`;
key= 'HNRWWKcb5eZvN9Tn2PtR';
export const bookReducer = (state = [], action) => {
  switch (action.type) {
    case 'bookstore/books/GET_BOOK/SUCCESS':
      return action.payload.book
    case 'bookstore/books/ADD_BOOK/SUCCESS':
      return[...state, action.payload.book]
    case 'bookstore/books/RMV_BOOK/SUCCESS':
      return [...state.filter((item) => item[0] !== action.payload.id);

    default:
      return state;
  }
};

export const getBooks = createAsyncThunk(GET_BOOK, async() => {
  const res = await axios.get(urlApi);
  return {books: Object.entries(res.data)}
});

export const addBook = createAsyncThunk(ADD_BOOK, async (book) => {
  const res = await axios.post(urlApi, 
    {
      item_id: book.item_id,
      title: book.title,
      author: book.author,
      category:book.category,

    })

    return {
      book:[
        book.item_id,
        [{
          author:book.author,
          title:book.title,
          category: book.category,

        }],
        
      ]
    }
})

export const removeBook = createAsyncThunk(RMV_BOOK, async(id) => {
    const res = await axios.delete(urlApi)
    return {id}
})