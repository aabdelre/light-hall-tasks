import { useState } from 'react';
import './App.css';

function App() {
  //localStorage.clear();
  var [number, setCount] = useState(localStorage.getItem("count"));
  if(isNaN(localStorage.getItem("count"))) {
    number = 0;
  }
  
  //const storeCount = () => {
  //  localStorage.setItem("count", number);
  //  
  //};
  //setCount();
  //console.log(number);

  function increment () {
      localStorage.setItem("count", number);
      setCount(parseInt(number) + 1);
      console.log(number);
      
  };
  //if(localStorage.getItem("count")) {
  //  number = 0;
  //  setCount(number + 1);
  //}
    
  return (
    <>
    <div className="number">Count: {number}</div>
    <button className="button" onClick={increment}>+</button>
    </>
  );
}

export default App;
