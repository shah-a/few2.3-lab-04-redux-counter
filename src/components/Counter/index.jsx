import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import './Counter.css';
import { inc, dec } from '../../actions';

function Counter({ index, count, step }) {
  const dispatch = useDispatch();
  return (
    <div className="Counter flex items-center px-5">
      <button type="button" onClick={() => dispatch(dec(index, step))}>
        -
      </button>
      <h2 className="text-7xl mx-10 leading-normal">{count}</h2>
      <button type="button" onClick={() => dispatch(inc(index, step))}>
        +
      </button>
    </div>
  );
}

Counter.propTypes = {
  index: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
};

export default Counter;
