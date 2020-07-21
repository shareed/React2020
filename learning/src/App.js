import React from 'react';
import './App.css';

import Title from './components/Title';
import Title2 from './components/Title2';
import Counter from './components/Counter';
import Props from './components/props/Props';
import Props2 from './components/props2/Props2';
function App() {
  return (
    <div className="App">
      <div className = 'concept'>
        <Title />
      </div>
      <div className = 'concept'>
        <Title2 />
      </div>
      <div className = 'concept'>
        <Counter />
      </div>
      <div className = 'concept'>
        <Props />
      </div>
      <div className = 'concept'>
        <Props2 />
      </div>

    </div>
  );
}

export default App;
