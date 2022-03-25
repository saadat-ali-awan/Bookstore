import AddBookForm from '../components/AddBookForm';
import Book from '../components/Book';

function Books() {
  const list = [
    {
      key: 'Item1',
      title: 'Book 1',
      author: 'Author 1',
    },
    {
      key: 'Item2',
      title: 'Book 2',
      author: 'Author 1',
    },
    {
      key: 'Item3',
      title: 'Book 3',
      author: 'Author 2',
    },
  ];
  return (
    <div>
      <ul>
        {
          list.map((book) => (
            <li key={book.key}>
              <Book title={`${book.title}`} author={`${book.author}`} />
              <button type="button">Remove</button>
            </li>
          ))
        }
      </ul>
      <AddBookForm />
    </div>
  );
}

export default Books;
