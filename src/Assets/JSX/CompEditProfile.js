import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';

import '../CSS/editProf.css'
import mechtree from '../PIC/mechtree.png'

const CompEditProfile = () => {

    const auth = localStorage.getItem("company");

    const _id = JSON.parse(auth)._id;
    const [name, setName] = useState(JSON.parse(auth).name);
    const [email, setEmail] = useState(JSON.parse(auth).email);
    const [location, setLocation] = useState(JSON.parse(auth).location);
    const [phone, setPhone] = useState(JSON.parse(auth).phone);
    const [logo, setLogo] = useState(JSON.parse(auth).logo);

    const navigate = useNavigate();

    const updateComp = async () => {
        let result = await fetch ('http://localhost:5000/companyedit', {
            method : 'post',
            body : JSON.stringify({_id, name, email, location, logo, phone}),
            headers : {
                mode: 'no-cors',
                'Content-Type' : 'application/json',
                "Access-Control-Allow-Origin" : "*",
                "Access-Control-Allow-Credentials" : true 
            }
        });
        result = await result.json();

        window.alert("Details Updated Successfully!");
        navigate('/CompanyDash');

    }


    return(

    <main id='StudEditProf_body' className='container-fluid'>
    
    <div className="row">

    <div className="col-lg-8">
    <div className="editprofile">
        <br />
        <h2 id="editHeading">&nbsp;&nbsp; Edit Profile</h2>
    <div className="align-edit-profile">

    <br/>
    <span><b>&nbsp; Company Name </b> </span>
    <div className="input-group">
        <input type="text" className="form-control" placeholder="Google Inc." value={name} onChange={(event) => setName(event.target.value)} aria-label="Dollar amount (with dot and two decimal places)"/>
    </div>

    <br/>
    <span><b>&nbsp; E-Mail  </b></span>
    <div className="input-group">
        <input type="email" className="form-control" placeholder="example@company.com" value={email} onChange={(event) => setEmail(event.target.value)} aria-label="Dollar amount (with dot and two decimal places)"/>
    </div>

    
    <br/>
    <span><b>&nbsp; Location  </b> </span>
    <div className="input-group">
        <input type="text" className="form-control" placeholder="Hyderabad, India" value={location} onChange={(event) => setLocation(event.target.value)} aria-label="Dollar amount (with dot and two decimal places)"/>
    </div>

    <br/>
    <span><b>&nbsp; Phone Number </b> </span>
    <div className="input-group">
        <input type="number" className="form-control" placeholder="9876543210" value={phone} onChange={(event) => setPhone(event.target.value)} aria-label="Dollar amount (with dot and two decimal places)"/>
    </div>

    <br/>
    <span><b>&nbsp; Logo Link </b> </span>
    <div className="input-group">
        <input type="link" className="form-control" placeholder="www.logolink.com" value={logo} onChange={(event) => setLogo(event.target.value)} aria-label="Dollar amount (with dot and two decimal places)"/>
    </div>

    <br/>

    <div className="input-group">
        <h5>&nbsp; To change the password, <Link to='/CompanyDash/ChangePassword'>click here</Link></h5>
    </div>

    <br/>

    <div className="row" id="editSave">

    <div className="col-4">
        <Link to='/CompanyDash' className="btn btn-dark"><b>Cancel</b></Link>
        <br/>
    </div>
    
    <div className="col-8">
        <button onClick={updateComp} className="btn btn-primary" ><b>Save Changes</b></button>
        <br/>
    </div>

    </div>
    <br/>
    <br/>
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
export default CompEditProfile;