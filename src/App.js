import { useState } from 'react';
import './App.css';

function App() {
  //localStorage.clear();
  var [number, setCount] = useState(0);
  if(localStorage.getItem("count")) {
    number = parseInt(localStorage.getItem("count"));
  }

  function increment () {
      //setCount(number)
      //localStorage.setItem("count", number);
      number++;
      setCount(parseInt(number));
      localStorage.setItem("count", number);
      console.log(number);
  }; 
  return (
    <>
    <div className="number">Count: {number}</div>
    <button className="button" onClick={increment}>+</button>
    </>
  );
}

export default App;
