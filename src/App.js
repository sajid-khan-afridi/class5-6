import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Parent from './Parent'
import ValueContext from './ValueContext';
import Child2 from "./Child2"

function App() {
  let value=useState(90);
  return (
    <div>
    <ValueContext.Provider value={value}>
    <div className="App">
      App.js
      <Parent></Parent>
      
    </div>
    </ValueContext.Provider>
    <Child2/>
    </div>
  );
}

export default App;
