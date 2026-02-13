import { useState } from "react"

export default function ContactForm() {

    const [names, setNames] =useState("");
    const [emails, setEmails] =useState("");
    const [messages, setMessages] =useState("");
    const [errors, setErrors] =useState({});
    const [submitted, setSubmitted] =useState(false);

    const Validate =()=>{
        const newErrors ={};
        if (names.length <2) {
        newErrors.name = "Name must be at least 2 characters";
        }
        if (!emails.includes("@")) {
             newErrors.email ="Please enter a valid email";
        }
       if (messages.length <10) {
        newErrors.message ="Message must be at least 10 characters";
       }
        return newErrors;
    }

    const handleSubmit= (e) =>{
        e.preventDefault();
        const result = Validate();

        if (Object.keys(result).length >0){
            setErrors(result) 
            setSubmitted(false);  
            } else {
                setErrors({});
                setSubmitted(true);  
                setNames("");
                setEmails("");
                setMessages(""); 
             }
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input placeholder="Enter your name" 
            type="text" 
            value={names}
            onChange={(e)=>setNames(e.target.value)}></input>
            
            {errors.name && <p style={{color:'red'}}>{errors.name}</p>}

            <label>Email:</label>
            <input placeholder="Enter your email"  
            value={emails}
            onChange={(e) =>setEmails(e.target.value)}></input>
            {errors.email && <p style={{color:'red'}}>{errors.email}</p>}

            <label>Message:</label>
            <textarea placeholder="Enter your message" 
            type="text" 
            value={messages}
            onChange={(e) =>setMessages(e.target.value)}></textarea>
            {errors.message && <p style={{color:'red'}}>{errors.message}</p>}



            {submitted && <p>Thank you {names}! We'll contact you at {emails}</p>}

            <button type="submit">Submit</button></form>
        </div>
    )
}