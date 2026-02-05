import { useState } from "react";

export default function Counter() {
    const [count, setCount] =useState(0);

    const incrementCount= ()=>{
       setCount(count+1);  
    } 
    const decrementCount= () =>{
        if(count < 1) {
            return
        }else{
             setCount(count-1);
        }
           
    }
     const resetCount= () =>{
        setCount(0);
    }
    return (
        <div>
            <h2>Count: {count}</h2>
           <button onClick={incrementCount}>Increment</button>
           <button onClick={decrementCount}>Decrement</button>
           <button onClick={resetCount}>Reset</button>
        </div>
    )
}