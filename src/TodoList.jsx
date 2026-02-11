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
  <div className="todo-container">
    <h3 className="todo-heading">My Todo List</h3>
    
    <div className="todo-input-section">
      <input 
        type="text" 
        value={inputText} 
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter a todo..."
        className="todo-input"
      />
      <button onClick={handleAdd} className="todo-add-btn">
        Add
      </button>
    </div>
    
    {todos.length === 0 ? (
      <p className="todo-empty">No todos yet. Add one above! 🎯</p>
    ) : (
      todos.map((todo) => (
        <div key={todo.id} className="todo-item">
          <input 
            type="checkbox" 
            checked={todo.completed}
            onChange={() => handleToggle(todo.id)}
            className="todo-checkbox"
          />
          <span className={`todo-text ${todo.completed ? 'completed' : 'active'}`}>
            {todo.text}
          </span>
          <button 
            onClick={() => handleDelete(todo.id)}
            className="todo-delete-btn"
          >
            🗑️
          </button>
        </div>
      ))
    )}
  </div>
)
}