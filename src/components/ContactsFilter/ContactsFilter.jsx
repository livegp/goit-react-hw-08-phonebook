import { useSelector, useDispatch } from 'react-redux';

import Form from './ContactsFilter.styled';
import { selectFilter, setFilter } from '../../redux/filterSlice';

function ContactsFilter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterChange = event => {
    dispatch(setFilter(event.currentTarget.value));
  };

  return (
    <Form>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        type="search"
        name="filter"
        value={filter}
        onChange={handleFilterChange}
      />
    </Form>
  );
}

export default ContactsFilter;
