import baseUrl, { appId } from '../api_details';

const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const GET_BOOKS = 'GET_BOOKS';

const initialState = [];

export const addBook = (name, author, category, id) => async (dispatch) => {
  await fetch(`${baseUrl}/apps/${appId}/books`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: name,
      author,
      category,
      item_id: id,
    }),
  });
  dispatch({
    type: ADD_BOOK,
    name,
    author,
    category,
    id,
  });
};

export const removeBook = (id) => async (dispatch) => {
  const response = await fetch(`${baseUrl}/apps/${appId}/books/${id}`, {
    method: 'DELETE',
  });

  if (response.status === 201) {
    dispatch({
      type: REMOVE_BOOK,
      id,
    });
  }
};

export const getBooks = () => async (dispatch) => {
  const response = await fetch(`${baseUrl}/apps/${appId}/books`, {
    method: 'GET',
  });

  const responseJSON = await response.json();

  dispatch({
    type: GET_BOOKS,
    books: responseJSON,
  });
};

const booksReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: actions.id,
          name: actions.name,
          author: actions.author,
          category: actions.category,
        },
      ];
    case REMOVE_BOOK:
      return [
        ...state.filter((book) => book.id !== actions.id),
      ];
    case GET_BOOKS: {
      const books = [];
      Object.entries(actions.books).forEach(
        ([key, value]) => books.push({
          id: key,
          name: value[0].title,
          author: value[0].author,
          category: value[0].category,
        }),
      );
      return books;
    }
    default:
      return state;
  }
};

export default booksReducer;
