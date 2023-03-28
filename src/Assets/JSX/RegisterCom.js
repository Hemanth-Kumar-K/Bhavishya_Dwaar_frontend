import React, {useEffect, useState} from "react";
import {Link, useNavigate} from 'react-router-dom';

import '../CSS/RegisterCom.css';
import regimg from '../PIC/register2.png';

const RegisterCom = () =>{
    
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [logo, setLogo] = useState("");
  const navigate = useNavigate();
  const collectData = async () => {
    let result = await fetch('http://localhost:5000/registerCompany', {
        method : "post",
        body : JSON.stringify({name, email, password, phone, location, logo}),
        headers : {
            mode: 'no-cors',
            'Content-Type' : 'application/json',
            "Access-Control-Allow-Origin" : "*",
            "Access-Control-Allow-Credentials" : true 
        }
    });
    result = await result.json();
    navigate('/Login');
}

  // const navigate = useNavigate();
  useEffect = () => {
    const auth = localStorage.getItem("company");
    if(auth){
      navigate("/CompanyDash");
    }
  }


        return(
          <div>

          <header>
                <div id='returnBG'>
                <div id='return-comp'>
                    <Link to='/Register'  id='nolink_2'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-arrow-return-left" viewBox="0 0 16 16" href='https://www.w3schools.com'>
                      <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z" id='i_1'/>
                    </svg> Return</Link>
                    </div>
                    </div>
            </header>
    
        <main>
            <br/><br/>
            <img src={regimg} id="register_img" alt="image" width="400vw" height="350vh" align="left"/>
            <div className="content">
            <div className="space"><h2>Join our Talented Family!</h2></div>
            <br/>
            <form>
            <div className="row">
                <div className="col">
                    <h6>&nbsp; Enter Company's Name</h6>
                  <input type="text" className="form-control" placeholder="Google Inc" aria-label="First name" value={name} onChange={(event) => setName(event.target.value)} required />
                </div>
              </div>
              <br/>
              <div className="row">
                <div className="col">
                    <h6>&nbsp; Enter Email Id</h6>
                  <input type="email" className="form-control" placeholder="example@email.com" aria-label="First name" value={email} onChange={(event) => setEmail(event.target.value)} required />
                </div>
              </div>
              <br/>
              <div className="row">
                <div className="col">
                    <h6>&nbsp; Enter Password</h6>
                  <input type="password" className="form-control" placeholder="Must be atleast 6 characters" aria-label="First name" value={password} onChange={(event) => setPassword(event.target.value)} required />
                </div>
              </div>
              <br/>
    
              <div className="row">
                <div className="col">
                    <h6>&nbsp; Enter Phone Number</h6>
                  <input type="number" className="form-control" placeholder="+91 9876543210" aria-label="First name" value={phone} onChange={(event) => setPhone(event.target.value)} required />
                </div>
              </div>
              <br/>

              <div className="row">
                <div className="col">
                    <h6>&nbsp; Enter Loaction</h6>
                  <input type="text" className="form-control" placeholder="City, Country" aria-label="First name" value={location} onChange={(event) => setLocation(event.target.value)} required />
                </div>
              </div>
              <br/>
    
              
              <div className="row">
                <div className="col">
                    <h6>&nbsp; Enter Company's logo link (small square shapped logo)</h6>
                    <input type="link" className="form-control" placeholder="www.logolink.com/logoimage --> (Logo which is small, square shapped and having a white background)" aria-label="First name" value={logo} onChange={(event) => setLogo(event.target.value)} />
                    <br/>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" required />
                        <label className="form-check-label" for="gridCheck">
                          By checking this box, you agree to our <a href="#">Terms and Conditions</a>.
                        </label>
                      </div>
                      <br/>
                      <a href="#"><button type="submit" onClick={collectData} className="btn btn-dark"><b>Register Now</b></button></a>
                    </div>
              </div>
              
              </form>
            </div>
          
        </main>
      </div>
        );
    
}
export default RegisterCom;