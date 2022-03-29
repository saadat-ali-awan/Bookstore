const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const initialState = [];

export const addBook = (name, author) => ({
  type: ADD_BOOK,
  name,
  author,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

const booksReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: state.length,
          name: actions.name,
          author: actions.author,
        },
      ];
    case REMOVE_BOOK:
      return [
        ...state.filter((book) => book.id !== actions.id),
      ];
    default:
      return state;
  }
};

export default booksReducer;
