import { useState } from 'react';
import './App.css'


function App() {
  const [count, setCount] = useState(localStorage.getItem("Counter"));
  localStorage.setItem("Counter", count);
  function handleClick() {
    setCount(parseInt(count) + 1);
    localStorage.setItem("Counter", count);
  }

  return (
    <div className="intro"> 
      <h1>Welcome to my App!</h1> 
        <button className="button" onClick={handleClick}> Click me more! Clicks: {localStorage.getItem("Counter")} </button>
    </div>
  );
}

export default App;