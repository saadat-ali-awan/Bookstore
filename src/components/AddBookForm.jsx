import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import uniqid from 'uniqid';
import { addBook } from '../redux/books/books';
import styles from './AddBookForm.module.css';

function AddBookForm() {
  const [state, setState] = useState({
    title: '',
    author: '',
    category: '',
  });

  const dispatch = useDispatch();
  const list = useSelector((state) => state.booksReducer);

  function handleChange(e) {
    const { id } = e.target;
    console.log(state);
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
    dispatch(addBook(state.title, state.author, state.category, id));
    setState({
      title: '',
      author: '',
      category: '',
    });
  };

  return (
    <form className={styles.addBookForm}>
      <input className={styles.title} type="text" id="title" placeholder="Book title" name="title" value={state.title} onChange={handleChange} />
      <input className={styles.author} type="text" id="author" placeholder="Author" name="author" value={state.author} onChange={handleChange} />
      <select className={styles.category} name="cars" value={state.category} id="category" onChange={handleChange}>
        <option value="" disabled>Categories</option>
        <option value="Thriller">Thriller</option>
        <option value="Horror">Horror</option>
        <option value="Detective &amp; Mystery">Detective &amp; Mystery</option>
        <option value="Romance">Romance</option>
        <option value="Adventure">Adventure</option>
        <option value="Dystopian">Dystopian</option>
        <option value="Science Fiction">Science Fiction</option>
        <option value="Fantasy">Fantasy</option>
      </select>
      <button className={styles['add-button']} type="button" onClick={addBookToStore}>Add Book</button>
    </form>
  );
}

export default AddBookForm;
