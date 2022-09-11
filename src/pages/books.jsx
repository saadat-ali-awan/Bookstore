import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddBookForm from '../components/AddBookForm';
import Book from '../components/Book';
import { getBooks } from '../redux/books/books';

function Books() {
  const list = useSelector((state) => state.booksReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <div className="bookSection">
      <ul>
        {
          list.map((book) => (
            <li key={`item-${book.id}`}>
              <Book title={`${book.name}`} author={`${book.author}`} category={`${book.category}`} id={`${book.id}`} />
            </li>
          ))
        }
      </ul>
      <div className="add-book">ADD NEW BOOK</div>
      <AddBookForm />
    </div>
  );
}

export default Books;
