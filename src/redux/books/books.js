const initialState = [];

const nextTodoId = 0;
const ADD_BOOK = 'redux/books/book/ADD_BOOK';
const RMV_BOOK = 'redux/books/book/RMV_BOOK';

export const enterBook = (titleBook, author) => ({
  type: ADD_BOOK,
  id: nextTodoId + 1,
  titleBook,
  author,
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
        {
          title: action.titleBook,
          author: action.author,
          id: action.id,
        },
      ];
    case RMV_BOOK:
      return state.filter((item) => item.id !== action.id);

    default:
      return state;
  }
};
