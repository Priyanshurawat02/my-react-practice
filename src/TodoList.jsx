import { useState } from "react"

export default function TodoList() {

    const[todos, setTodos] =useState([
        {id:1, text:"Eat", completed: false},
        {id :2, text: "Sleep", completed: true} , 
        {id: 3 , text:"Code", completed:false}
    ]);
    const [inputText, setInputText] = useState("");

    return (
        <div>
            <h3>My Todo List</h3>
            {todos.map((todo) => (
                <div key={todo.id}>
                <input type="checkbox" checked={todo.completed}
                onChange={()=>{}}></input>
                <span  style ={{textDecoration: todo.completed ? "line-through":"none"}}>
                    {todo.text}
                </span>
            <button onClick={() =>{}}>Delete</button>
            </div>
            ))}
           
        </div>
    )
}