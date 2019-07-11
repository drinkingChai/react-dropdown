
import React from 'react';
import DropdownExample from './dropdown/example';
import Extension from './extension';

function App() {
  return (
    <div>
      <div>
        <h3>Vanilla</h3>
        <DropdownExample />
      </div>

      <div>
        <h3>As Extension</h3>
        <Extension />
      </div>
    </div>
  );
}

export default App;
