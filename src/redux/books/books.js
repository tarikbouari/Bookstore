import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


const ADD_BOOK = "bookstore/books/ADD_BOOK";
const RMV_BOOK = "bookstore/books/RMV_BOOK";
const GET_BOOK = "bookstore/books/GET_BOOKS"

export const bookReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case RMV_BOOK:
      return state.filter((item) => item.id !== action.id);

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
  id,
});
