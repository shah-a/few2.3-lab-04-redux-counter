import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { reset } from '../../actions';

function Clicks({ count, count2, count3 }) {
  const clicks = useSelector((state) => state.clicks);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center">
      <p className="text-xl">
        Total value:
        {' '}
        {count + count2 + count3}
      </p>
      <p className="text-xl mt-3">
        Total clicks so far:
        {' '}
        {clicks}
      </p>
      <button type="button" className="mt-10 px-5 text-2xl leading-loose border rounded-lg" onClick={() => dispatch(reset())}>
        Reset
      </button>
    </div>
  );
}

Clicks.propTypes = {
  count: PropTypes.number.isRequired,
  count2: PropTypes.number.isRequired,
  count3: PropTypes.number.isRequired,
};

export default Clicks;
