import {
  default as PropTypes,
  UserInput,
  useDispatch,
  useSelector,
  setFilterValue,
} from '../../components';
import { selectFilter } from '../../redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <>
      <h1>Contacts</h1>
      <label>
        Find contacts by name <br />
        <UserInput
          onChange={e => {
            dispatch(setFilterValue(e.target.value));
          }}
          // All state goes to useSelector(), not only filter!
          value={useSelector(selectFilter)}
        />
      </label>
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
