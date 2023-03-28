import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';

const RegTemp=()=>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const collectData= async ()=>{
        console.warn(name,email,password);
        let result = await fetch("http://localhost:5000/register",{
            method : 'post',
            body : JSON.stringify({name, email, password}),
            headers : {
                mode: 'no-cors',
                'Content-Type' : 'application/json',
                "Access-Control-Allow-Origin" : "*",
                "Access-Control-Allow-Credentials" : true 
            }
        });
        result = await result.json();
        console.warn(result);
        localStorage.setItem("user", JSON.stringify(result));
        navigate('/StudentDash');
    }

    return(
        <div className="regtemp">
            <br />
            <h2>Register</h2>
            <br />
            <form action="#">
            <p>Username : <input type="text" placeholder="Enter UserName" value={name} onChange={(event)=>setName(event.target.value)}/></p>
            <p>E-mail : <input type="email" placeholder="Enter E-Mail" value={email} onChange={(event)=>setEmail(event.target.value)}/></p>
            <p>Password : <input type="password" placeholder="Enter Password" value={password} onChange={(event)=>setPassword(event.target.value)}/></p>
            <button type="submit" id="btn" onClick={collectData}>Submit</button>
            </form>
        </div>
    )
}
export default RegTemp;