import { useState } from 'react';
import './Counter.css';
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="counter-card">
      <h2 className="counter-title">Counter</h2>
      <p className="counter-value">{count}</p>
      <button
        className="counter-btn"
        onClick={() => setCount(prev => prev + 1)}
      >
        Increment
      </button>
      <button
        className="counter-btn"
        onClick={() => setCount(prev => prev - 1)}
      >
        Decrement
      </button>
    </div>
  );
}
export default Counter;
