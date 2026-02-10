import { useState } from "react"

export default function TodoList() {

    const[todos, setTodos] =useState([
        {id:1, text:"Eat", completed: false},
        {id :2, text: "Sleep", completed: true} , 
        {id: 3 , text:"Code", completed:false}
    ]);
    const [inputText, setInputText] = useState("");

    const handleAdd= ()=> {
       if(inputText.trim() ==="")
        return;
        const newTodo ={
        id: Date.now(),
        text: inputText,
        completed:false,
        };
        setTodos([...todos, newTodo]);
        setInputText("");
    } 

    const handleToggle =(id)=>{
       setTodos(
        todos.map((todo) =>
         todo.id=== id ? {...todo, completed: !todo.completed} :todo
       )
       );
       }

    const handleDelete=(id)=>{
         setTodos(todos.filter((todo) =>
                todo.id !== id));
    }

    return (
        <div>
            <h3>My Todo List</h3>
            <div>
                <input type="text" 
                value={inputText} 
                onChange={(e) =>setInputText(e.target.value)}
                placeholder="Enter a todo..."></input>
                <button onClick={handleAdd}>Add</button>
            </div>
            {todos.map((todo) => (
                <div key={todo.id}>
                <input type="checkbox" checked={todo.completed}
                onChange={()=>handleToggle(todo.id)}></input>
                <span  style ={{textDecoration: todo.completed ? "line-through":"none"}}>
                    {todo.text}
                </span>
            <button onClick={()=>handleDelete(todo.id)}>Delete</button>
            </div>
            ))}
        </div>
    )
}