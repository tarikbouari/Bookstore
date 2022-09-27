import { configureStore, combineReducers  } from "@reduxjs/toolkit";
import { bookReducer } from "./books/books";
import { statusReducer } from "./categories/categories";


const rootReducer = combineReducers({
    book: bookReducer,
    categories: statusReducer
})

const store = configureStore({reducer: rootReducer}) ;

export default store