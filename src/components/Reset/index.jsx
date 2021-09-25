import { useSelector, useDispatch } from 'react-redux';
import { res } from '../../actions';

function Reset() {
  const counters = useSelector((state) => state.counters);
  const clicks = useSelector((state) => state.clicks);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center">
      <p className="text-xl">
        Total value:
        {' '}
        {counters.reduce((acc, counter) => acc + counter.count, 0)}
      </p>
      <p className="text-xl mt-3">
        Total clicks so far:
        {' '}
        {clicks}
      </p>
      <button
        type="button"
        className="mt-10 px-5 text-2xl leading-loose border rounded-lg"
        onClick={() => dispatch(res())}
      >
        Reset
      </button>
    </div>
  );
}

export default Reset;
