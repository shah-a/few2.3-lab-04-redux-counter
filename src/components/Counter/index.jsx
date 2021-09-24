import './Counter.css';
import { useSelector } from 'react-redux';

function index() {
  return (
    <div className="Counter flex items-end pt-10">
      <button type="button">-</button>
      <h2 className="text-7xl mx-3 justify-self-center">17</h2>
      <button type="button">+</button>
    </div>
  );
}

export default index;
