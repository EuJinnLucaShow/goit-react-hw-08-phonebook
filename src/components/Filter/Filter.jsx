import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';
import { Input, Title } from './Filter.styled';

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value.trim()));
  };

  return useSelector(selectContacts).length < 1 ? (
    <Title>Add your first contact</Title>
  ) : (
    <Input
      type="text"
      name="filter"
      placeholder="Search by name"
      value={filter}
      onChange={handleFilterChange}
    />
  );
}

export default Filter;
