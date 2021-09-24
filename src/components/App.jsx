import { useSelector } from 'react-redux';
import './App.css';
import Counter from './Counter';
import Clicks from './Clicks';
import {
  increment, increment2, increment3,
  decrement, decrement2, decrement3,
} from '../actions';

function App() {
  const count = useSelector((state) => state.counter);
  const count2 = useSelector((state) => state.counter2);
  const count3 = useSelector((state) => state.counter3);

  return (
    <div className="App theme min-h-screen flex flex-col items-center space-y-20">
      <h1 className="mt-20 text-4xl">Redux Counters</h1>
      <div className="flex flex-wrap divide-x-2 border rounded-lg">
        <Counter count={count} increment={increment} decrement={decrement} val={1} />
        <Counter count={count2} increment={increment2} decrement={decrement2} val={5} />
        <Counter count={count3} increment={increment3} decrement={decrement3} val={10} />
      </div>
      <Clicks count={count} count2={count2} count3={count3} />
    </div>
  );
}

export default App;
