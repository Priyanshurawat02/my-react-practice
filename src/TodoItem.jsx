import { useState } from "react"

export default function TodoItem() {

    const [todos, setTodos] = useState("")
    const [completed, setCompleted] = useState(false);

    return (
        <div style={{
            padding: '20px',
            border: '2px solid #e2e8f0',
            borderRadius: '10px',
            backgroundColor: '#f7fafc'
        }}>
            <h3>Todo Item</h3>
            
            <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '10px',
                marginBottom: '15px' 
            }}>
                <input 
                    type="checkbox" 
                    checked={completed} 
                    onChange={(e) => setCompleted(e.target.checked)}
                    style={{
                        width: '20px',
                        height: '20px',
                        cursor: 'pointer'
                    }}
                />
                <input 
                    type="text" 
                    value={todos} 
                    onChange={(e) => setTodos(e.target.value)}
                    placeholder="Enter your todo..."
                    style={{
                        flex: 1,
                        padding: '10px',
                        border: '2px solid #cbd5e0',
                        borderRadius: '5px',
                        fontSize: '16px'
                    }}
                />
            </div>

            <p style={{
                textDecoration: completed ? "line-through" : "none",
                color: completed ? "#a0aec0" : "#2d3748",
                fontSize: '18px',
                margin: '15px 0',
                minHeight: '25px',
                fontWeight: '500'
            }}>
                {todos || "Your todo will appear here..."}
            </p>

            <button 
                onClick={() => alert("Todo deleted!")}
                style={{
                    padding: '10px 20px',
                    backgroundColor: '#e53e3e',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    transition: 'background-color 0.3s'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#c53030'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#e53e3e'}
            >
                🗑️ Delete
            </button>
        </div>
    )
}