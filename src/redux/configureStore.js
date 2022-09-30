import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { bookReducer } from './books/books';
import { statusReducer } from './categories/categories';

const rootReducer = combineReducers({
  book: bookReducer,
  categories: statusReducer,
});

const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));

export default store;
