import { useState } from "react"

export default function SurveyForm() {


    const [name, setName] =useState("");
    const [genders, setGenders] =useState("");
    const [ageRange, setAgeRange] =useState("");
    const [interests, setInterests] =useState([]);
    const [satisfaction, setSatisfaction] =useState(5);
    const [feedback, setFeedback] =useState("");
    const [submitted, setSubmitted] =useState(false);

    const handleSubmit =(e) =>{
        e.preventDefault();
        setSubmitted(true);
        // setInterests([]);
        // setGenders("");
        // setSatisfaction(5);
        // setAgeRange("");
        // setName("");
        // setFeedback("");
    }

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

            <label>
                <input
                type="checkbox"
                checked={interests.includes("sports")}
                onChange={(e) =>{
                    if(e.target.checked) {
                        setInterests([...interests,"sports"])
                    }else {
                        setInterests(interests.filter(i =>i !== "sports"))
                    }
                }}></input>
                Sports
            </label>

              <label>
                <input
                type="checkbox"
                checked={interests.includes("music")}
                onChange={(e) =>{
                    if(e.target.checked) {
                        setInterests([...interests,"music"])
                    }else {
                        setInterests(interests.filter(i =>i !== "music"))
                    }
                }}></input>
                Music
            </label>

              <label>
                <input
                type="checkbox"
                checked={interests.includes("reading")}
                onChange={(e) =>{
                    if(e.target.checked) {
                        setInterests([...interests,"reading"])
                    }else {
                        setInterests(interests.filter(i =>i !== "reading"))
                    }
                }}></input>
                Reading
            </label>

              <label>
                <input
                type="checkbox"
                checked={interests.includes("gaming")}
                onChange={(e) =>{
                    if(e.target.checked) {
                        setInterests([...interests,"gaming"])
                    }else {
                        setInterests(interests.filter(i =>i !== "gaming"))
                    }
                }}></input>
                Gaming
            </label>

              <label>
                <input
                type="checkbox"
                checked={interests.includes("cooking")}
                onChange={(e) =>{
                    if(e.target.checked) {
                        setInterests([...interests,"cooking"])
                    }else {
                        setInterests(interests.filter(i =>i !== "cooking"))
                    }
                }}></input>
                Cooking
            </label>

              <label>
                <input
                type="checkbox"
                checked={interests.includes("travel")}
                onChange={(e) =>{
                    if(e.target.checked) {
                        setInterests([...interests,"travel"])
                    }else {
                        setInterests(interests.filter(i =>i !== "travel"))
                    }
                }}></input>
                Travel
            </label>
            <input 
            type="range"
            min="1"
            max="10"
            value={satisfaction}
            onChange={(e) =>setSatisfaction(e.target.value)}
            />
            <span>{satisfaction}/10</span>

            <textarea placeholder="Write your feedback"
            value={feedback}
            onChange={(e) =>setFeedback(e.target.value)}
            rows={4}></textarea>
            <button onClick={handleSubmit}>Submit</button>
            {submitted && (
                <div>
                    <h3>Thank you {name}!</h3>
                    <p>Gender: {genders}</p>
                    <p>Age Range: {ageRange}</p>
                    <p>Interests: {interests.join(",")}</p>
                    <p>Satisfaction:{satisfaction}</p>
                    <p>Feedback: {feedback}</p>
                    </div>
            )}
        </div>
    )
}