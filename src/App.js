import React, { useState } from 'react';
import Counter from './Counter';

function App() {
  const [state, setState] = useState(false);
  let obj = {
    name: 'suphin',
    age: 20
  };

  return (
    <div>
      <h1 onClick={() => setState(!state)}>Show / Hide</h1>
      {state ? <Counter {...obj} /> : null}
    </div>
  );
}

export default App;
