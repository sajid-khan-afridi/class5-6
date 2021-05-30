import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Parent from './Parent'

function App() {
  let [number,setNumber]=useState(45);
  return (
    <div className="App">
      App.js
      <Parent num={number}></Parent>
      <button onClick={()=>setNumber(++number)}>Update number
      </button>
    </div>
  );
}

export default App;
