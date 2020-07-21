import React from 'react';
import './App.css';

import Title from './components/Title';
import Title2 from './components/Title2';
import Counter from './components/Counter';


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

    </div>
  );
}

export default App;
