import { useSelector, useDispatch } from 'react-redux';

import Form from './Filter.styled';
import { selectFilter, setFilter } from '../../redux/filterSlice';

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterChange = evt => {
    dispatch(setFilter(evt.currentTarget.value));
  };

  return (
    <Form>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilterChange}
      />
    </Form>
  );
}

export default Filter;
