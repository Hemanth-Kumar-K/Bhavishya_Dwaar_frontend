import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import '../CSS/RegisterSt.css';
import register from "../PIC/register.png";

const RegisterSt = () =>{

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rollno, setRollno] = useState("");
    const [phone, setPhone] = useState("");
    const navigate = useNavigate();
    const collectData = async () => {
        let result = await fetch('http://localhost:5000/registerStudent', {
            method : "post",
            body : JSON.stringify({name, email, password, rollno, phone}),
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


    // useEffect = () => {
    //   const auth = localStorage.getItem("user");
    //   if(auth){
    //     navigate("/StudentDash");
    //   }
    // }

        return(

            <><header>
                <div id='returnBG'>
                <div id='m_1'>
                    <Link to='/Register'  id='nolink_1'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-arrow-return-left" viewBox="0 0 16 16" href='https://www.w3schools.com'>
                      <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z" id='i_1'/>
                    </svg> Return</Link>
                    </div>
                    </div>
            </header>
            <main>
                    <br /><br />
                    <img src={register} id="register-img" alt="image" width="450vw" height="400vh" align="left" />
                    <div class="content">
                        <div class="space"><h2>Let's get started!</h2></div>
                        <br />
                        <form action="/action_page.php" method="get">
                            <div class="row">
                                <div class="col">
                                    <h6>&nbsp; Enter Full Name</h6>
                                    <input type="text" class="form-control" placeholder="Ankit Sharma" aria-label="First name" value={name} onChange={(event) => setName(event.target.value)} required />
                                </div>
                            </div>
                            <br />
                            <div class="row">
                                <div class="col">
                                    <h6>&nbsp; Enter Email Id</h6>
                                    <input type="email" class="form-control" placeholder="example@email.com" aria-label="First name" value={email} onChange={(event) => setEmail(event.target.value)} required />
                                </div>
                            </div>
                            <br />
                            <div class="row">
                                <div class="col">
                                    <h6>&nbsp; Enter Password</h6>
                                    <input type="password" class="form-control" placeholder="Must be atleast 6 characters" aria-label="First name" value={password} onChange={(event) => setPassword(event.target.value)} required />
                                </div>
                            </div>
                            <br />
                            <div class="container">
                               
                            <div class="row">
                                <div class="col">
                                    <h6>&nbsp; Enter Roll Number</h6>
                                    <input type="text" class="form-control" placeholder="21BD1A0001" aria-label="First name" value={rollno} onChange={(event) => setRollno(event.target.value)} required />
                                </div>
                            </div>

                            <br />

                            <div class="row">
                                <div class="col">
                                    <h6>&nbsp; Enter Phone Number</h6>
                                    <input type="number" class="form-control" placeholder="+91 9876543210" aria-label="First name" value={phone} onChange={(event) => setPhone(event.target.value)} required />
                                </div>
                            </div>
                                
                            <br />


                            <div class="row">
                                <div class="col">
                                    <h6>&nbsp;Upload Resume (.pdf file less than 2MB)</h6>
                                    <div class="input-group mb-3">
                                        <input type="file" class="form-control" id="inputGroupFile02" required />
                                        <label class="input-group-text" for="inputGroupFile02">Upload</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="gridCheck" required />
                                        <label class="form-check-label" for="gridCheck">
                                            By checking this box, you agree to our <a href="#">Terms and Conditions</a>.
                                        </label>
                                    </div>
                                    <br />
                                    <button type="submit" class="btn btn-dark" onClick={collectData}><b>Register Now</b></button>
                                </div>
                            </div>


                            </div>


                        </form>
                    </div>

                </main></>

    

        );
    
}
  export default RegisterSt;