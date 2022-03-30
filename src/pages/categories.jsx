import { useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

function Categories() {
  const dispatch = useDispatch();

  function checkStatusHandler() {
    dispatch(checkStatus());
  }

  return (
    <div>
      <div>Categories</div>
      <button type="button" onClick={checkStatusHandler}>Check Status</button>
    </div>
  );
}

export default Categories;
