import { useState } from 'react';
import './App.css'


function App() {
  var [count, setCount] = useState(localStorage.getItem("Counter"));

  if (count === "Nan") {
    console.log("here");
    localStorage.setItem("Counter", 0);;
  } else {
    localStorage.setItem("Counter", count);
  }
  function handleClick() {
    setCount(parseInt(count) + 1);
    localStorage.setItem("Counter", count);
    console.log(count);
  }

  return (
    <div className="intro"> 
      <h1>Welcome to my App!</h1> 
        <button className="button" onClick={handleClick}> Click me more! Clicks: {localStorage.getItem("Counter")} </button>
    </div>
  );
}

export default App;