import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Parent from './Parent'
import ValueContext from './ValueContext';

function App() {
  let [number,setNumber]=useState(90);
  return (
    <ValueContext.Provider value={number}>
    <div className="App">
      App.js
      <Parent></Parent>
      <button onClick={()=>setNumber(++number)}>Update number
      </button>
    </div>
    </ValueContext.Provider>
  );
}

export default App;
