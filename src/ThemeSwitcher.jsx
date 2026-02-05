import { useState } from "react"

export default function ThemeSwitcher(){

    const [isDark, setIsDark] =useState(false);


    const toggleTheme= () =>{
        setIsDark(!isDark);
    }
    return (

        <div style={{backgroundColor: isDark ? "black": "white",
                     color: isDark ?"white" : "black",
                     padding:"40px",
                     minHeight:"300px",
                     borderRadius: "12px",
                     textAlign: "center"
                     }}>
            <h2>{isDark ? "🌙 DarkMode" : "☀️LightMode"}</h2>
            <button onClick={toggleTheme} style={{
            backgroundColor: isDark ? "#764ba2" : "#667eea",
            color: "white",
            border: "none",
            padding: "12px 24px",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
            marginTop: "20px"}}>
                {isDark ? "Switch to Light" : "Switch to Dark"}</button>
        </div>
    )
}