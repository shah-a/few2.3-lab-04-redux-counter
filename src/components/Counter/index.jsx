import './Counter.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

function Counter(props) {
  const {
    count, increment, decrement, val,
  } = props;

  const dispatch = useDispatch();

  return (
    <div className="Counter flex items-center px-5">
      <button type="button" onClick={() => dispatch(decrement(val))}>
        -
      </button>
      <h2 className="text-7xl mx-10 leading-normal">{count}</h2>
      <button type="button" onClick={() => dispatch(increment(val))}>
        +
      </button>
    </div>
  );
}

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  val: PropTypes.number.isRequired,
};

export default Counter;
