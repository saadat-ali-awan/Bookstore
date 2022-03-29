import { createStore, combineReducers } from 'redux';
import booksReducer from './books/books';
import { checkStatus } from './categories/categories';

const rootReducer = combineReducers({
  booksReducer,
  checkStatus,
});

const store = createStore(rootReducer);

export default store;
