import { useState } from "react"

export default function SurveyForm() {


    const [name, setName] =useState("");
    const [genders, setGenders] =useState("");
    const [ageRange, setAgeRange] =useState("");
    const [interests, setInterests] =useState([]);
    const [satisfaction, setSatisfaction] =useState(5);
    const [feedback, setFeedback] =useState("");
    const [submitted, setSubmitted] =useState(false);

    return (
        <div>
            <input type="text" 
            value={name}
            onChange={(e) =>setName(e.target.value)}></input>
            <label>
            <input type="radio" 
            name="gender"
            value="male"
            checked={genders ==="male"}
            onChange={(e)=>setGenders(e.target.value)}></input>
            Male </label>

            <label>
             <input type="radio" 
            name="gender"
            value="female"
            checked={genders ==="female"}
            onChange={(e)=>setGenders(e.target.value)}></input>
            Female</label>
            
            <label>
             <input type="radio" 
            name="gender"
            value="other"
            checked={genders ==="other"}
            onChange={(e)=>setGenders(e.target.value)}></input>
            other </label> 
            <br></br> <br></br>
            <select value={ageRange}
            onChange={(e) =>setAgeRange(e.target.value)}>
                <option value="">Select age range...</option>
                <option value="18-25">18-25</option>
                <option value="26-35">26-35</option>
                <option value="36-45">36-45</option>
                <option value="46+">46+</option>
            </select>

        </div>
    )
}