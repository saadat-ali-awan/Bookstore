import PropTypes from 'prop-types';

function Book({ title, author, category }) {
  return (
    <div>
      <div>{title}</div>
      <div>{author}</div>
      <div>{category}</div>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
