import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const ADD_BOOK = 'bookstore/books/ADD_BOOKS';
const RMV_BOOK = 'bookstore/books/RMV_BOOKS';
const GET_BOOK = 'bookstore/books/GET_BOOKS';
const key = 'HNRWWKcb5eZvN9Tn2PtR';
const urlApi = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${key}/books`;

export const bookReducer = (state = [], action) => {
  switch (action.type) {
    case 'bookstore/books/GET_BOOKS/fulfilled':
      return action.payload.book;
    case 'bookstore/books/ADD_BOOKS/fulfilled':
      return [...state, action.payload.book];
    case 'bookstore/books/RMV_BOOKS/fulfilled':
      return [...state.filter((item) => item[0] !== action.payload.id)];
    default:
      return state;
  }
};

export const getBooks = createAsyncThunk(GET_BOOK, async () => {
  const res = await axios.get(urlApi);
  return { book: Object.entries(res.data) };
});

export const addBook = createAsyncThunk(ADD_BOOK, async (booke) => {
  await axios.post(urlApi,
    {
      item_id: booke.item_id,
      title: booke.title,
      author: booke.author,
      category: booke.category,

    });

  return {
    book: [
      booke.item_id,
      [{
        author: booke.author,
        title: booke.title,
        category: booke.category,
      }],
    ],
  };
});
export const removeBook = createAsyncThunk(RMV_BOOK, async (id) => {
  await axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${key}/books/${id}`);
  return { id };
});
