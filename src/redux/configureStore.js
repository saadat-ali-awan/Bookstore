import { createStore, combineReducers } from 'redux';
import booksReducer from './books/books';
import statusReducer from './categories/categories';

const rootReducer = combineReducers({
  booksReducer,
  statusReducer,
});

const store = createStore(
  rootReducer,
);

export default store;
