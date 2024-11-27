import { useState } from 'react';
import './App.css'

function App() {

  const [num , setNum] = useState(0);

  return (
    <>
      <div>
        <p> {num}</p>
        <button onClick={()=>{setNum(num+1)}}>Increase</button>
        <br />
        <br />
        <button onClick={()=>{setNum(num-1)}}>Decrease</button>
      </div>
    </>
  )
}

export default App
