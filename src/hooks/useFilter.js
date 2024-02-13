import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../redux/filter/filter-selectors';
import * as actions from '../redux/filter/filter-slice';

export const useFilter = () => {
  const dispatch = useDispatch();

  const filterValue = useSelector(getFilter);
  const setFilter = filterQuery => dispatch(actions.setFilter(filterQuery));

  return { filterValue, setFilter };
};
