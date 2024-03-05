import React, {useState} from 'react';
export default function Counter() {
 const[count, setCount]=useState(0);
 function handelincrement(){
    setCount(prev => prev + 1);
 }
 function handeldecrement(){
    if(count > 0)
     setCount(prev => prev - 1);
     }
 function reset(){
    setCount(0);
 }
  return (
    <div>
        <h1>Count--{count} </h1>
        <br></br>
        <button onClick={handelincrement}>Increase</button>
        <button onClick={handeldecrement}>Decrement</button>
        <button onClick={reset}>Reset</button>


    </div>
  );
}
