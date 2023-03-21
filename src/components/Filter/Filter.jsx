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
    <section>
      <h2>Contacts</h2>
      <label>
        Find contacts by name <br />
        <UserInput
          style={{ margin: 0 }}
          onChange={e => {
            dispatch(setFilterValue(e.target.value));
          }}
          // All state goes to useSelector(), not only filter!
          value={useSelector(selectFilter)}
        />
      </label>
    </section>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
