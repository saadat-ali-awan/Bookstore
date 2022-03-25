import { useState } from 'react';

function AddBookForm() {
  const [state, setState] = useState({
    title: '',
    author: '',
  });

  function handleChange(e) {
    const { id } = e.target;
    setState({
      ...state,
      [id]: e.target.value,
    });
  }
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
      <button type="submit">Add Book</button>
    </form>
  );
}

export default AddBookForm;
