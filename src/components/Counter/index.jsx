import './Counter.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../actions';

function Counter() {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="Counter flex items-center px-5">
      <button type="button" onClick={() => dispatch(decrement(1))}>
        -
      </button>
      <h2 className="text-7xl mx-10 leading-normal">{count}</h2>
      <button type="button" onClick={() => dispatch(increment(1))}>
        +
      </button>
    </div>
  );
}

export default Counter;
