import './Counter.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../actions';

function index() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="Counter flex items-end pt-10">
      <button type="button" onClick={() => dispatch(decrement(1))}>
        -
      </button>
      <h2 className="text-7xl mx-3 justify-self-center">{counter}</h2>
      <button type="button" onClick={() => dispatch(increment(1))}>
        +
      </button>
    </div>
  );
}

export default index;
