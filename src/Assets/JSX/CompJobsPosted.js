import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';

import '../CSS/StudJobs.css';
import Filterbox from './Filterbox';


const CompJobsPosted = () => {


  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/Login");
  }

    const auth = localStorage.getItem("company");
    // const [search,setSearchParam] = useState([""]);
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        getJobs();
    }, []);

    const getJobs = async() => {
       const auth = localStorage.getItem('company');
       const compName = JSON.parse(auth).name;
        let result = await fetch (`http://localhost:5000/jobs/${compName}`)
        result = await result.json()
            setJobs(result);
            // setSearchParam(result);
          
    }
    // console.warn(jobs);

    const target_value = (val) => {
      return ('#id' + String(val));
    }

    const id_value = (val) => {
      return ('id'+String(val));
    }

    const date_format = (date) => {
      let temp = "";
      temp = temp + date.charAt(8) + date.charAt(9) + "-" + date.charAt(5) + date.charAt(6) + "-";
      temp = temp + date.charAt(0) + date.charAt(1) + date.charAt(2) + date.charAt(3);
      return (temp);
      
    }

    return(
      <div id='studjobs'>
      <header>
       <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">

<div className="container-fluid">
 <button
   className="navbar-toggler"
   type="button"
   data-mdb-toggle="collapse"
   data-mdb-target="#navbarSupportedContent"
   aria-controls="navbarSupportedContent"
   aria-expanded="false"
   aria-label="Toggle navigation"
 >
   <i className="fas fa-bars"></i>
 </button>

 
 <div className="collapse navbar-collapse" id="navbarSupportedContent">
   
   <Link className="navbar-brand mt-2 mt-lg-0" to='/'>
     Bhavishya Dwar
   </Link>
   
   <ul className="navbar-nav me-auto mb-2 mb-lg-0">
     <li className="nav-item">
       <Link to='/CompanyDash/JobsPosted' className="nav-link active">Jobs Posted</Link>
     </li>
     <li className="nav-item">
       <a className="nav-link active" href="#">Companies</a>
     </li>
   </ul>
   
 </div>
 

 <div className="d-flex align-items-center">
   
   


   <div className="dropdown">
     <a
       className="text-reset me-3 dropdown-toggle hidden-arrow"
       href="#"
       id="navbarDropdownMenuLink"
       role="button"
       data-bs-toggle="dropdown"
       aria-expanded="false"
     >
       <i className="fas fa-bell"></i>
       <span className="badge rounded-pill badge-notification bg-danger">2</span>
     </a>
     <ul
       className="dropdown-menu dropdown-menu-end"
       aria-labelledby="navbarDropdownMenuLink"
     >
       <li>
         <a className="dropdown-item" href="#">Some news</a>
       </li>
       <li>
         <a className="dropdown-item" href="#">Another news</a>
       </li>
       <li>
         <a className="dropdown-item" href="#">Something else here</a>
       </li>
     </ul>
   </div>
   
   <div className="dropdown">
     <a
       className="dropdown-toggle d-flex align-items-center hidden-arrow"
       href="#"
       id="navbarDropdownMenuAvatar"
       role="button"
       data-bs-toggle="dropdown"
       aria-expanded="false"
     >
       <img
         src="https://t3.ftcdn.net/jpg/01/18/01/98/360_F_118019822_6CKXP6rXmVhDOzbXZlLqEM2ya4HhYzSV.jpg"
         className="rounded-circle"
         height="25"
         alt="Black and White Portrait of a Man"
         loading="lazy"
       />
     </a>
     <ul
       className="dropdown-menu dropdown-menu-end"
       aria-labelledby="navbarDropdownMenuAvatar"
     >
       <li>
         <Link to='/CompanyDash' className="dropdown-item">My profile</Link>
       </li>
       <li>
       <Link className="dropdown-item" onClick={logout} to="/Login">Logout</Link>
       </li>
     </ul>
   </div>
 </div>
 
</div>

</nav>
</header>
 
     <main>
         <br />
         <br />
         <hr />
         <div className="row container">
             
            <div className='col-lg-3 filterbox d-none d-lg-block d-md-block'> <Filterbox/> </div>


       
       <div className="col-lg-9" id="job_cards">
       <div id="card_holder">

       {
       jobs.map((item) => 
           
       <><><div className="card jobcards-lg jobcards-sm">
           <h5 className="card-header">{item.type}</h5>
           <div className="card-body">
             <h5 className="card-title"><img src={item.logo} alt="img" className="compimg" />&nbsp; {item.position}</h5>
             <div className="card-text">
               Company : {item.name} <br />
               Location : {item.location} <br />
             </div>

             <span className="view_button">
               <div className='d-flex flex-row'>
                 <button className="btn btn-outline-primary m-2" type="button" data-bs-toggle="offcanvas" data-bs-target={target_value(item._id)} aria-controls="offcanvasWithBothOptions">View Details</button>

                 <button className="btn btn-outline-danger m-2" type="button"  aria-controls="offcanvasWithBothOptions">Delete</button>
               </div>


               <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id={id_value(item._id)} aria-labelledby="offcanvasWithBothOptionsLabel">
                 <div className="offcanvas-header">
                   <h3 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">{item.position}</h3>
                   <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                 </div>
                 <hr />

                 <div className="offcanvas-body">

                   <div>
                     <h4>Company : {item.name}</h4>
                     <h4>Location : {item.location}</h4>
                     <h4>Last Date to apply : {date_format(item.date)}</h4>
                     <h4>Required GPA : {item.gpa}</h4>
                     <br />

                     <hr />

                     <h5>Minimum qualifications:</h5>
                     <ul>
                       <li>{item.minq.minq1}</li>
                       <li>{item.minq.minq2}</li>
                       <li>{item.minq.minq3}</li>
                     </ul>
                     <br />

                     <h5>Preferred qualifications:</h5>
                     <ul>
                       <li>{item.preq.preq1}</li>
                       <li>{item.preq.preq2}</li>
                       <li>{item.preq.preq3}</li>
                       <li>{item.preq.preq4}</li>
                     </ul>

                     <hr />

                     <div className="accordion accordion-flush" id="accordionFlushExample">
                       <div className="accordion-item">
                         <h2 className="accordion-header" id="flush-headingOne">
                           <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                             <h4>About the job</h4>
                           </button>
                         </h2>
                         <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                           <div className="accordion-body">

                             {item.abtJob}

                           </div>
                         </div>
                       </div>
                       <div className="accordion-item">
                         <h2 className="accordion-header" id="flush-headingTwo">
                           <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                             <h4>Responsibilities</h4>
                           </button>
                         </h2>
                         <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                           <div className="accordion-body">

                             <ul>
                               <li>{item.resp.resp1}</li>
                               <li>{item.resp.resp2}</li>
                               <li>{item.resp.resp3}</li>
                               <li>{item.resp.resp4}</li>
                             </ul>

                           </div>
                         </div>
                       </div>
                     </div>
                   </div>
                   <br />

                 </div>
               </div>
             </span>
           </div>
         </div><br /></><br /></>
         )
         }
         </div>
         </div>
       
           
             
         </div>
 
     </main>
 </div>
    );
}
export default CompJobsPosted;