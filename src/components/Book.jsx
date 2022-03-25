import PropTypes from 'prop-types';

function Book({ title, author }) {
  return (
    <div>
      <div>{title}</div>
      <div>{author}</div>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
