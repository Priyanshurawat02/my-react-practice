import { useState } from "react";

export default function Toggle() {

    const [isOn, setIsOn] =useState(false);

    const switchBtn= ()=>{
        setIsOn(!isOn);
    }

    return (
        <div style={{padding:"20px", textAlign:"center"}}>
            <h3>Status: {isOn ? "ON ✅" :"OFF ❌"}</h3>
            <button
             onClick={switchBtn} 
             style={{
                backgroundColor: isOn ?"green": "grey",
                color:"white",
                padding:"15px 30px",
                fontSize: "18px",
                border:"none",
                borderRadius:"8px",
                cursor:"pointer"
                }}>
                    {isOn ?"Turn Off " : "Turn on 💡"} 
                    </button>
        </div>
    )
}