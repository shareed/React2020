import React from 'react';
import './App.css';

import SignUpForm from './components/SignUpForm.js';
import SignUpFormHooks from './components/SignUpFormHooks.js';
import SignUpFormHooks1 from './components/SignUpFormHooks1.js';

function App() {
  return (
    <div className="App">
      <h1>Custom Hooks are Magic 🧙‍♂️</h1>
      <SignUpForm />
      <SignUpFormHooks />
      <SignUpFormHooks1 />
    </div>
  );
}

export default App;