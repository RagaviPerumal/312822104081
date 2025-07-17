import React, { useState } from 'react';
import useLogger from './useLogger';

function App() {
  const [count, setCount] = useState(0);

  useLogger('Count changed to', count); 
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter Example</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default App;
