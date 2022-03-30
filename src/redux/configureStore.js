import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import booksReducer from './books/books';
import statusReducer from './categories/categories';

const rootReducer = combineReducers({
  booksReducer,
  statusReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

export default store;
