import './App.css';
import Counter from './Counter';

function App() {
  return (
    <div className="App theme min-h-screen flex flex-col items-center space-y-3">
      <h1 className="mt-20 text-4xl">Redux Counter</h1>
      <Counter />
    </div>
  );
}

export default App;
