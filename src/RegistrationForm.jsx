import { useState } from "react";

export default function RegistrationForm() {

    const[userNames, setUserNames] =useState("");
    const[emails,setEmails] =useState("");
    const[passwords,setPasswords] =useState("");
    const[confirmPasswords, setConfirmPasswords] =useState("");
    const[ages, setAges ] =useState("");
    const[termsChecked, setTermsChecked] =useState(false);
    const[errorObj, setErrorObj] =useState({});
    const[submitted, setSubmitted] =useState(false);
    const[successName, setSuccessName]=useState("");

    const Validate =()=>{
        const newErrors ={};
        if(userNames.length < 3 || userNames.length >15){
            newErrors.name ="Name Must be  between 3-15 characters"
        } if(!emails.includes("@")){
            newErrors.email ="Email Must contain @";
        } if(passwords.length < 8) {
            newErrors.password="Minimum 8 Characters Required";
        }if (passwords !==confirmPasswords){
            newErrors.confirmPass ="Password is not the same"
        } if(Number(ages) < 18){
            newErrors.age ="Age must be 18 or older";
        } if(!termsChecked) {
            newErrors.term= "All Terms should be checked";
        }
        return newErrors;
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        const result = Validate();
        if(Object.keys(result).length >0){
            setErrorObj(result);
        }else {
            setSuccessName(userNames);
            setSubmitted(true);
            setUserNames("")
            setErrorObj({});
            setEmails("");
            setPasswords("");
            setConfirmPasswords("");
            setAges("");
            setTermsChecked(false);
        }
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
            <label>Name: </label>
            <input placeholder="Enter your name" 
            value={userNames}
            type="text"
            onChange={(e) =>setUserNames(e.target.value)}/>
            {errorObj.name && <p style={{color:"red"}}>{errorObj.name}</p>}

            <label>Email: </label>
            <input placeholder="Enter your email"
            type="email" 
            value={emails}
            onChange={(e) =>setEmails(e.target.value)}/>
            {errorObj.email && <p style={{color:"red"}}>{errorObj.email}</p>}

            <label>Password: </label>
            <input placeholder="Enter the password"
            type="password" 
            value={passwords}
            onChange={(e) =>setPasswords(e.target.value)}/>
            <p>Strength:{
                passwords.length ===0 ? "":
                passwords.length < 8 ? "weak 🔴":
                passwords.length <=12 ? "Medium 🟡" :"Strong 🟢"
            }
            </p>
            {errorObj.password && <p style={{color:"red"}}>{errorObj.password}</p>}


            <label>Confirm Password: </label>
            <input placeholder="Confirm the password" 
            type="password"
            value={confirmPasswords}
            onChange={(e) =>setConfirmPasswords(e.target.value)}/>
            {errorObj.confirmPass && <p style={{color:"red"}}>{errorObj.confirmPass}</p>}
            
            <label>Age: </label>
            <input type="number" 
            placeholder="Enter your age" 
            value={ages}
            onChange={(e) =>setAges(e.target.value)}/>
            {errorObj.age && <p style={{color:"red"}}>{errorObj.age}</p>}

            <label>I agree to Terms & conditions</label>
            <input type="checkbox" 
            checked={termsChecked} 
            onChange={(e)=> setTermsChecked(e.target.checked)}/>
            {errorObj.term && <p style={{color:"red"}}>{errorObj.term}</p>}
            <button type="submit">Register</button>
            </form>
             {submitted && <p style={{color:"green"}}>Registration Successful! Welcome {successName}! 🎉</p>}
            
        </div>
    )
}