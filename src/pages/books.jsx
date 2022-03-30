import { useSelector, useDispatch } from 'react-redux';
import AddBookForm from '../components/AddBookForm';
import Book from '../components/Book';
import { removeBook } from '../redux/books/books';

function Books() {
  const list = useSelector((state) => state.booksReducer);

  const dispatch = useDispatch();

  const removeBookFromStore = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div>
      <ul>
        {
          list.map((book) => (
            <li key={`item-${book.id}`}>
              <Book title={`${book.name}`} author={`${book.author}`} />
              <button type="button" onClick={() => { removeBookFromStore(book.id); }}>Remove</button>
            </li>
          ))
        }
      </ul>
      <AddBookForm />
    </div>
  );
}

export default Books;
