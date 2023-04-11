import { useState } from 'react';
import './App.css';

function App() {
  //localStorage.clear();
  var [number, setCount] = useState(parseInt(localStorage.getItem("count")) + 1);
  if(isNaN(localStorage.getItem("count"))) {
    number = 0;
  }

  function increment () {
      setCount(number)
      localStorage.setItem("count", number);
      setCount(parseInt(number) + 1);
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
