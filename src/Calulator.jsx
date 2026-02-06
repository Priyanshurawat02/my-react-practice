import { useState } from "react";

export default function Calulator() {

    const [num1, setNum1] =useState(0);
    const [num2, setNum2]= useState(0);

    return (
        <div>
            <h3>Calculator Component</h3>
            <div>
                <label>Number 1:</label>
            <input type="number" 
            value={num1}
            onChange={(e) => setNum1(Number(e.target.value))}
            ></input>
            </div>
            <div>
                <label>Number 2:</label>
            <input type="number"
            value={num2}
            onChange={(e) =>setNum2(Number(e.target.value))}
            ></input>
            </div>
            
            <h4>Results:</h4>
            <p>{num1} + {num2}={num1+num2}</p>
             <p>{num1} - {num2}={num1-num2}</p>
              <p>{num1} * {num2}={num1*num2}</p>
               <p>{num1} / {num2}={num2 !== 0 ? (num1 /num2).toFixed(2):"Cannot divide by zero"}</p>
        </div>
    )
}