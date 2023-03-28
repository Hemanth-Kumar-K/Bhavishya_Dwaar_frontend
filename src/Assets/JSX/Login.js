import React, {useState} from 'react';
import "../CSS/login.css";
import {Link, useNavigate} from "react-router-dom";
import { useEffect } from 'react';

const Login = () =>
  {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handlelogin = async (e) =>{
      e.preventDefault();
      let result = await fetch("http://localhost:5000/login",{
        method : 'post',
        body : JSON.stringify({email,password}),
        headers : {
          mode: 'no-cors',
          'Content-Type' : 'application/json',
          "Access-Control-Allow-Origin" : "*",
          "Access-Control-Allow-Credentials" : true 
        }
      });
      result = await result.json();

      if(result.rollno){
        localStorage.setItem("student", JSON.stringify(result));
        navigate('/StudentDash');
      }
      else if(result.name){
        localStorage.setItem("company", JSON.stringify(result));
        navigate('/CompanyDash');
      }
      else{
        console.error("Not found!");
      }
      
    }


    const navigate = useNavigate();
    useEffect(() => {
      const auth = localStorage.getItem('student');
      if(auth){
        navigate('/StudentDash');
      }
    })


     return (
       <section className="background-radial-gradient overflow-hidden" id='background-radial-gradient'>
                    <div id='m_1'>
                    <Link  id='nolink_1' to='/'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-return-left" viewBox="0 0 16 16" href='https://www.w3schools.com'>
                      <path fillRule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z" id='i_1'/>
                    </svg> Return</Link>
                    </div>
                    
          <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
            <div className="row gx-lg-5 align-items-center mb-5">
              <div className="col-lg-6 mb-5 mb-lg-0" id='ok_2'>
              <div className='d-none d-lg-block d-md-block'>
                <h1 className="my-5 display-5 fw-bold ls-tight" id='ok_3'>
                  Opportunities don't<br />
                  <span id='ok_4'> happen, you create them</span>
                </h1>
                <p className="mb-4 opacity-70" id='ok_5'>
                  Welcome Back!
                  <br/>
                  Opportunities Awaiting You
                </p>
                </div>
              </div>
              
        
              <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
                <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
                <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>
        
                <div className="card bg-glass" id='bg-glass'>
                  <div className=" -body px-4 py-5 px-md-5">

                    <form>
                    
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example3">Email address</label>
                        <input type="email" id="form3Example3" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                        
                      </div>
        
                    
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example4">Password</label>
                        <input type="password" id="form3Example4" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <br />
                        <Link to = '/Login/OTP' target='_blank'>Forgot Password?</Link>
                      </div>

                      {/* <div className="form-check d-flex justify-content-center mb-4">
                          <input className="form-check-input me-2" type="checkbox" value="" id="flexCheckDefault"/>
                           <label className="form-check-label" htmlFor="flexCheckDefault">
                                 Remember me
                             </label>
                      </div> */}
        
    
                      <div className="text-center">
                      <button type="submit" className="btn btn-primary btn-block mb-4" onClick={(e) => handlelogin(e)}>
                        Sign In
                      </button>
                    </div>
        
                      <div className="text-center">
                        <p>Don't have an account? <Link to='/Register'>Register </Link></p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
    );
}
export default Login;