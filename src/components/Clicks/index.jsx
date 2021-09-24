import { useSelector, useDispatch } from 'react-redux';
import { reset } from '../../actions';

function Clicks() {
  const clicks = useSelector((state) => state.clicks);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col space-y-3">
      <p className="text-xl">
        Total clicks so far:
        {' '}
        {clicks}
      </p>
      <button type="button" className="border rounded-lg" onClick={() => dispatch(reset())}>
        Reset clicks
      </button>
    </div>
  );
}

export default Clicks;
