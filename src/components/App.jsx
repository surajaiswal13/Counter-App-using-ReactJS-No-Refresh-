import React, { useState } from "react";

function App() {

  let initialState = 0
  const [state, setState] = useState(initialState) 

  function increase() {
    setState(state + 1);
  }

  function decrease() {
    setState(state - 1);
  }

  return <div className="container">
    <h1>{state}</h1>
    <button onClick={decrease}>-</button>
    <button onClick={increase}>+</button>
  </div>
}

export default App;
