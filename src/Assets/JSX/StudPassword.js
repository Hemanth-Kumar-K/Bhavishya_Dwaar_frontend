import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';

import '../CSS/passwordChange.css';

const StudPassword = () => {

    const auth = localStorage.getItem("student");

    const _id = JSON.parse(auth)._id;
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    const navigate = useNavigate();

    const updateStudPass = async () => {
        let result = await fetch ('http://localhost:5000/editstudpswd', {
            method : 'post',
            body : JSON.stringify({_id, password}),
            headers : {
                mode: 'no-cors',
                'Content-Type' : 'application/json',
                "Access-Control-Allow-Origin" : "*",
                "Access-Control-Allow-Credentials" : true 
            }
        });
        result = await result.json();

        window.alert("Password Updated Successfully!");
        navigate('/StudentDash');

    }

    return(

        <div className="changepswd">
            <br />
            <div className='pswdbox'>
                <div id='pswdcontent'>
                    <br/>
                    <span><b>&nbsp; New Password  </b></span>
                    <div className="input-group">
                        <input type="password" className="form-control" value={password} onChange={(event) => setPassword(event.target.value)} aria-label="Dollar amount (with dot and two decimal places)"/>
                    </div>


                    <br/>
                    <span id="re-enter"><b>&nbsp; *Re-enter the above password</b></span>
                    <div className="input-group">
                        <input type="password" className="form-control" value={password2} onChange={(event) => setPassword2(event.target.value)} aria-label="Dollar amount (with dot and two decimal places)"/>
                    </div>

                    <br />
                    <div className="row" id="editSave">

                    <div className="col-4">
                        <Link to='/CompanyDash/EditProfile' className="btn btn-dark"><b>Cancel</b></Link>
                        <br/>
                    </div>
                    
                    <div className="col-8">
                        <button onClick={updateStudPass} className="btn btn-primary" ><b>Save Changes</b></button>
                        <br/>
                    </div>

                    </div>

                    <br /><br /><br />
                </div>
            </div>
            <br />
        </div>

    );
}
export default StudPassword;