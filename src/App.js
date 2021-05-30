import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Parent from './Parent'
import ValueContext from './ValueContext';

function App() {
  let value=useState(90);
  return (
    <ValueContext.Provider value={value}>
    <div className="App">
      App.js
      <Parent></Parent>
      
    </div>
    </ValueContext.Provider>
  );
}

export default App;
