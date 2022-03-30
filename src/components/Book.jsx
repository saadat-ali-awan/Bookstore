import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import styles from './Book.module.css';

function Book({
  title, author, category, id,
}) {
  const dispatch = useDispatch();
  const removeBookFromStore = (id) => {
    dispatch(removeBook(id));
  };
  return (
    <div className={styles.book}>
      <div className={styles['left-col']}>
        <div className={styles.category}>{category}</div>
        <div className={styles.Title}>{title}</div>
        <div className={styles.Author}>{author}</div>
        <div className={styles.actions}>
          <button type="button">Comments</button>
          <button type="button" onClick={() => { removeBookFromStore(id); }}>Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className={styles['center-col']}>
        <div className={styles.progress} />
        <div>
          <div className={styles['Percent-Complete']}>64%</div>
          <div className={styles.Completed}>Completed</div>
        </div>
      </div>
      <div className={styles.border} />
      <div className={styles['right-col']}>
        <div>
          <div className={styles.chapter}>CURRENT CHAPTER</div>
          <div className={styles['chapter-number']}>CHAPTER 17</div>
        </div>
        <button type="button" className={styles['update-progress']}>UPDATE PROGRESS</button>
      </div>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
