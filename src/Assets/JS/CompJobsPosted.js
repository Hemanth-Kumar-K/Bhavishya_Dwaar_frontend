import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

import '../CSS/StudJobs.css';
import Filterbox from './Filterbox';


const CompJobsPosted = () => {

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
        <div className='jobslist'>
           {
            jobs.map((item) => 
            <div className="col-lg-9" id="job_cards">
            <div id="card_holder">

                
            <div className="card jobcards ">
                <h5 className="card-header">{item.type}</h5>
                <div className="card-body">
                  <h5 className="card-title"><img src={item.logo} alt="img" className="compimg"/>&nbsp; {item.position}</h5>
                  <div className="card-text">
                    Company : {item.name} <br/>
                    Location : {item.location} <br/>
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
                      <hr/>
        
                      <div className="offcanvas-body">

                        <div>
                            <h4>Company : {item.name}</h4>
                            <h4>Location : {item.location}</h4>
                            <h4>Last Date to apply : {date_format(item.date)}</h4>
                            <h4>Required GPA : {item.gpa}</h4>
                            <br/>

                            <hr/>

                            <h5>Minimum qualifications:</h5>
                            <ul>
                                <li>{item.minq.minq1}</li>
                                <li>{item.minq.minq2}</li>
                                <li>{item.minq.minq3}</li>
                            </ul>
                            <br/>

                            <h5>Preferred qualifications:</h5>
                            <ul>
                                <li>{item.preq.preq1}</li>
                                <li>{item.preq.preq2}</li>
                                <li>{item.preq.preq3}</li>
                                <li>{item.preq.preq4}</li>
                            </ul>

                            <hr/>

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
                        <br/>
                        {/* <Link className="btn btn-outline-primary">Apply</Link> */}
                        <br/><br/>

                      </div>
                    </div>
                  </span>
                </div>
              </div>
              </div>
              </div>
            )
            }
        
        </div>
    );
}
export default CompJobsPosted;