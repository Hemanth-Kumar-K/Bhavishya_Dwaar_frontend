import React, {useEffect} from "react";
import {Link, useNavigate} from 'react-router-dom';

import '../CSS/Register.css'
import student from'../PIC/RegisterSt.jpg';
import company from '../PIC/RegisterCmp.jpg';

const Register = () => {

    // const navigate = useNavigate();
    // useEffect = () => {
    //   const auth = localStorage.getItem("user");
    //   if(auth){
    //     navigate("/StudentDash");
    //   }
    // }  

        return(
            <div>
              <header>
              <div id='returnBG'>
                <div id='m_1'>
                    <Link to='/'  id='nolink_1'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-arrow-return-left" viewBox="0 0 16 16" href='https://www.w3schools.com'>
                      <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z" id='i_1'/>
                    </svg> Return</Link>
                    </div>
                    </div>
              </header>

            <main>
        <br/>
        <div class='register_page_css'>
    <div className="row"> 
        <div className="d-flex justify-content-center">
          <div className="col-6">
          <div className="card mx-auto regcard">
            <img src={student} className="card-img-top" alt="..."/>
            <div className="card-body">
              <Link to='/Register/RegisterSt' className="btn btn-outline-dark regbtn">Register</Link>
            </div>
          </div>
        </div>
          <div className="col-6">
            <div className="card mx-auto regcard">
              <img src={company} className="card-img-top" alt="..."/>
              <div className="card-body">
                <Link to='/Register/Companies' className="btn btn-outline-dark regbtn">Register</Link>
              </div>
            </div>
          </div>
        </div> 

    </div>
    </div>
  
    </main>
    </div>
        );
    
}
export default Register;