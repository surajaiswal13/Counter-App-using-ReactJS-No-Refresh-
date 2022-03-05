import React, { useState } from "react";

function App() {

  let initialState = 0
  const [state, setState] = useState(initialState) 



  return <div className="container">
    <h1>{state}</h1>
    <button onClick={decrease}>-</button>
    <button onClick={increase}>+</button>
  </div>
}

export default App;
