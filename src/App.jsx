import { useState } from 'react'

import './App.css'

function App() {
  const name = "Ram";
  const last = "Singh";
  const age = 20;
  const city = "Delhi";
  const isStudent = false;

  const a = 6;
  const b = 4;

  const arrHobbies = ["Gym", "Cricket", "Singing"];
  const fullName = `${name} ${last}`;
  
  const Greeting = () => {
    const time = new Date().getHours();
    if(time < 12){
      return "Good Morning ☀️"
    } else if(time < 18){
      return "Good Afternoon 🌤️"
    } else {
      return "Good Evening 🌙"
    }
  }

  return (
    <div className="App">
      <h1>Welcome to React</h1>
      
      <div className='profile-card'>
        <img src='https://via.placeholder.com/150' alt='profile'/>
        <h2>{fullName}</h2>
        
        <div className="info-section">
          <div className="info-item">
            <span className="info-label">Age</span>
            <span className="info-value">{age} years</span>
          </div>
          <div className="info-item">
            <span className="info-label">Birth Year</span>
            <span className="info-value">{2024 - age}</span>
          </div>
          <div className="info-item">
            <span className="info-label">City</span>
            <span className="info-value">{city}</span>
          </div>
        </div>

        <span className="badge">
          {isStudent ? "🎓 Student" : "💼 Professional"}
        </span>
        
        <p className="greeting">{Greeting()}</p>
        
        <h4 className="section-title">Calculator</h4>
        <div className="calculator-grid">
          <div className="calc-item">
            <p>{a} + {b} = {a + b}</p>
          </div>
          <div className="calc-item">
            <p>{a} - {b} = {a - b}</p>
          </div>
          <div className="calc-item">
            <p>{a} × {b} = {a * b}</p>
          </div>
          <div className="calc-item">
            <p>{a} ÷ {b} = {(a / b).toFixed(2)}</p>
          </div>
        </div>
        
        <h4 className="section-title">Hobbies</h4>
        <div className="hobbies-list">
          {arrHobbies.join(" • ")}
        </div>
      </div>
    </div>
  )
}

export default App;