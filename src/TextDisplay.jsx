import { useState } from "react"

export default function TextDisplay() {

    const [text, setText] =useState("");

    const Reset =() =>{
        setText("");
    }
    

    return (
        <div>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)}></input>
            {text === "" ?<p>Type Something...</p> : <p>You typed: {text}</p>}
            <p>Character count: {text.length}</p>
            <button onClick={Reset}>Reset</button>
        </div>
    )
}