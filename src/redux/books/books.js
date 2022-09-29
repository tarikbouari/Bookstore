import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const ADD_BOOK = "bookstore/books/ADD_BOOK";
const RMV_BOOK = "bookstore/books/RMV_BOOK";
const GET_BOOK = "bookstore/books/GET_BOOKS"


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

export const enterBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const removeBook = (id) => ({
  type: RMV_BOOK,
  payload:id,
});
