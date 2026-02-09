import { useState } from "react"

export default function KeyExample() {

    const[ items, setItems] = useState([1,2,3,4,5]);
    const [useIndex, setUseIndex]= useState(true);

    const reverseItem =() =>{
        setItems([...items].reverse());
    }

    return(
         <div>
            {useIndex
             ? items.map((item,index) =><div key={index}>{item}</div>)
            : items.map((item) => <div key={item}>{item}</div>)}
            <button onClick={reverseItem}>Reverse</button>

            <button onClick={() =>setUseIndex(!useIndex)}>
                Switch key method (currently: {useIndex ? "Index":"Value"})
            </button>
         </div>
            
    )
}