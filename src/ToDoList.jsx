import React, { useState } from 'react'
import './ToDoList.css';

function ToDoList() {
  const [num, setNum] = useState(0);
  const [inp,setInp]=useState(0)

  const incNum = () => {
    setNum(num + 1);
  }

  const decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    } else {
      setNum(0)
    }
  }


  return (
    <>
    <div className="container">
      <div className="counter-machine">
        <h2>Counter App</h2>
        <h1>{num}</h1>
        <div className="inc-dec-btn">
          <button onClick={incNum}>Increment by 1</button>
          <button onClick={decNum}>Decrement by 1</button>
        </div>
        <button onClick={()=>{
          setNum(num+inp)
        }}>incrementer</button>
        <br />
        <input onChange={(e)=>{
          setInp(+e.target.value)
        }} type="number" name="num" id="incrementer" />
      </div>
    </div>
    </>
  )
}

export default ToDoList