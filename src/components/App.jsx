import { useSelector } from 'react-redux';
import './App.css';
import Counter from './Counter';
import Reset from './Reset';

function App() {
  const counters = useSelector((state) => state.counters);

  return (
    <div className="App theme min-h-screen flex flex-col items-center space-y-20">
      <h1 className="mt-20 text-4xl">Redux Counters</h1>
      <div className="flex flex-wrap divide-x-2 border rounded-lg">
        {counters.map((counter, index) => (
          <Counter
            key={counter.id}
            index={index}
            count={counter.count}
            step={counter.step}
          />
        ))}
      </div>
      <Reset />
    </div>
  );
}

export default App;
