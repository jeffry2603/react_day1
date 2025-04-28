import React from 'react'
import { useState } from 'react';

const App = () => {
//useState syntax and example with count
let [count , setCount] = useState(0);

//state chnage causes re-render


  function handleClick(){
    setCount(count++);
    
  }

  return (
    <>
<h1>Count: {count}</h1> 
<button onClick={handleClick}>
  Increase
  </button>
</>
)
}

export default App