import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';

import '../CSS/editProf.css'
import mechtree from '../PIC/mechtree.png'


const StudEditProfile = () => {

    const auth = localStorage.getItem("student");

    const _id = JSON.parse(auth)._id;
    const [name, setName] = useState(JSON.parse(auth).name);
    const [email, setEmail] = useState(JSON.parse(auth).email);
    const [rollno, setRoll] = useState(JSON.parse(auth).rollno);
    const [phone, setPhone] = useState(JSON.parse(auth).phone);

    const navigate = useNavigate();

    const updateSt = async () => {
        let result = await fetch ('http://localhost:5000/studentedit', {
            method : 'post',
            body : JSON.stringify({_id, name, email, rollno, phone}),
            headers : {
                mode: 'no-cors',
                'Content-Type' : 'application/json',
                "Access-Control-Allow-Origin" : "*",
                "Access-Control-Allow-Credentials" : true 
            }
        });
        result = await result.json();

        window.alert("Details Updated Successfully!");
        navigate('/StudentDash');

    }


    return(

    <main id='StudEditProf_body' className='container-fluid'>
    
    <div className="row">

    <div className="col-lg-8">
    <div className="editprofile">
        <br /><br />
        <h2 id="editHeading">&nbsp;&nbsp; Edit Profile</h2>
    <div className="align-edit-profile">

    <br/>
    <span><b>&nbsp; Full Name </b> </span>
    <div className="input-group">
        <input type="text" className="form-control" placeholder="Ankit Sharma" value={name} onChange={(event) => setName(event.target.value)} aria-label="Dollar amount (with dot and two decimal places)"/>
    </div>

    <br/>
    <span><b>&nbsp; E-Mail  </b></span>
    <div className="input-group">
        <input type="email" className="form-control" placeholder="example@email.com" value={email} onChange={(event) => setEmail(event.target.value)} aria-label="Dollar amount (with dot and two decimal places)"/>
    </div>

    {/* <br/>
    <span><b>&nbsp; New Password  </b></span>
    <div className="input-group">
        <input type="password" className="form-control" value={password} onChange={(event) => setPassword(event.target.value)} aria-label="Dollar amount (with dot and two decimal places)"/>
    </div>


    <br/>
    <span id="re-enter"><b>&nbsp; *Re-enter the above password</b></span>
    <div className="input-group">
        <input type="password" className="form-control" value={password2} onChange={(event) => setPassword2(event.target.value)} aria-label="Dollar amount (with dot and two decimal places)"/>
    </div> */}

    <br/>
    <span><b>&nbsp; Roll Number  </b> </span>
    <div className="input-group">
        <input type="text" className="form-control" placeholder="21BD1A0000" value={rollno} onChange={(event) => setRoll(event.target.value)} aria-label="Dollar amount (with dot and two decimal places)"/>
    </div>

    <br/>
    <span><b>&nbsp; Phone Number </b> </span>
    <div className="input-group">
        <input type="number" className="form-control" placeholder="9876543210" value={phone} onChange={(event) => setPhone(event.target.value)} aria-label="Dollar amount (with dot and two decimal places)"/>
    </div>

    <br/>

    <div className="input-group">
        <h5>&nbsp; To change the password, <Link to='/StudentDash/ChangePassword'>click here</Link></h5>
    </div>

    <br/>

    <div className="row" id="editSave">

    <div className="col-4">
        <Link to='/StudentDash' className="btn btn-dark"><b>Cancel</b></Link>
        <br/>
    </div>
    
    <div className="col-8">
        <button type='button' className="btn btn-primary" onClick={updateSt} ><b>Save Changes</b></button>
        <br/>
    </div>

    </div>
    <br/>
    <br/>
    <br />
    </div>
    </div>

    </div>



    <div className="col-lg-4">
        <br/><br/>
        <div className='d-none d-lg-block'>
            <img src={mechtree} alt="pic" id="mechtree"/>
        </div>
    </div>

    </div>
    <br />
    <br />
    </main>


    );
}
export default StudEditProfile;