import { useState } from 'react'
import Greeting from './components/Greeting';
import Info from './components/Info';
import Welcome from './components/Welcome';
import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import Card from './components/Card';


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
  
  const GetTimeGreeting = () => {
    const time = new Date().getHours();
    if(time < 12){
      return "Good Morning ☀️"
    } else if(time < 18){
      return "Good Afternoon 🌤️"
    } else {
      return "Good Evening 🌙"
    }
  }

  <Card/>
  

  return (
    <div className="App">
       <Header/>

       <Welcome/>
       <Greeting/>
       <Info/>
      
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
        
        <p className="greeting">{GetTimeGreeting()}</p>
        
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
      <div className="cards-container">
          <Card
          title="React Basics"
          description ="Learning JSX, components, and props"/>
          <Card
          title ="State Management"
          description ="Coming up next with useState hook!"/>
          <Card
          title="Styling" 
          description="Making beautiful UIs with CSS"/>
          </div>

           <Footer/>
    </div>
  )
}

export default App;