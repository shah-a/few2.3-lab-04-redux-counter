import './App.css';
import Counter from './Counter';
import Clicks from './Clicks';

function App() {
  return (
    <div className="App theme min-h-screen flex flex-col items-center space-y-20">
      <h1 className="mt-20 text-4xl">Redux Counter</h1>
      <div className="flex flex-wrap divide-x-2 border">
        <Counter />
        {/* <Counter /> */}
        {/* <Counter /> */}
      </div>
      <Clicks />
    </div>
  );
}

export default App;
