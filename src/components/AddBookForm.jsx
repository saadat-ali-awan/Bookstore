import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import uniqid from 'uniqid';
import { addBook } from '../redux/books/books';

function AddBookForm() {
  const [state, setState] = useState({
    title: '',
    author: '',
  });

  const dispatch = useDispatch();
  const list = useSelector((state) => state.booksReducer);

  function handleChange(e) {
    const { id } = e.target;
    setState({
      ...state,
      [id]: e.target.value,
    });
  }

  function getUniqueId() {
    const id = uniqid();
    if (list.filter((book) => book.id === id).length === 0) {
      return id;
    }
    return getUniqueId();
  }

  const addBookToStore = () => {
    const id = getUniqueId();
    dispatch(addBook(state.title, state.author, id));
    setState({
      title: '',
      author: '',
    });
  };

  return (
    <form>
      <label htmlFor="title">
        Name:
        <input type="text" id="title" name="title" value={state.title} onChange={handleChange} />
      </label>
      <label htmlFor="author">
        Author:
        <input type="text" id="author" name="author" value={state.author} onChange={handleChange} />
      </label>
      <button type="button" onClick={addBookToStore}>Add Book</button>
    </form>
  );
}

export default AddBookForm;
