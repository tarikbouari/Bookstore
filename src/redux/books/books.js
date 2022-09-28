const initialState = [{ title: 'tarik', author: 'bouari', id: 1 },
  { title: 'dona', author: 'persie', id: 2 }];

const ADD_BOOK = 'redux/books/book/ADD_BOOK';
const RMV_BOOK = 'redux/books/book/RMV_BOOK';

export const enterBook = (book) => ({
  type: ADD_BOOK,
  book,
});

export const removeBook = (id) => ({
  type: RMV_BOOK,
  id,
});

export const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [ 
        ...state,
        action.book,
      ];
    case RMV_BOOK:
      return state.filter((item) => item.id !== action.id);

    default:
      return state;
  }
};
