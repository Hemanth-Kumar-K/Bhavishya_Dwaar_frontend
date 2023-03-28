import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';

import '../CSS/CompanyJobs.css';

const CompanyJobs = () => {
  
    const auth = localStorage.getItem("company");
    const navigate = useNavigate();
    

    const name = JSON.parse(auth).name;
    const logo = JSON.parse(auth).logo;
    const location = JSON.parse(auth).location;

    const [position, setPosition] = useState("");
    const [gpa, setGpa] = useState("");
    const [date, setDate] = useState("");
    const [type, setType] = useState("");

    const [minq1, setMinq1] = useState("");
    const [minq2, setMinq2] = useState("");
    const [minq3, setMinq3] = useState("");

    const [preq1, setPreq1] = useState("");
    const [preq2, setPreq2] = useState("");
    const [preq3, setPreq3] = useState("");
    const [preq4, setPreq4] = useState("");

    const [abtJob, setAbtJob] = useState("");

    const [resp1, setResp1] = useState("");
    const [resp2, setResp2] = useState("");
    const [resp3, setResp3] = useState("");
    const [resp4, setResp4] = useState("");

    const collectData = async () => {
        let result = await fetch('http://localhost:5000/jobsPosted', {
            method : "post",
            body : JSON.stringify({
                name, logo, location, position, gpa, date, abtJob, type,
                minq : {
                    minq1, minq2, minq3
                },
                preq : {
                    preq1, preq2, preq3, preq4
                },
                resp : {
                    resp1, resp2, resp3, resp4
                }
            }),
            headers : {
                mode: 'no-cors',
                'Content-Type' : 'application/json',
                "Access-Control-Allow-Origin" : "*",
                "Access-Control-Allow-Credentials" : true 
            }
        });
        result = await result.json();
        window.alert("Added Job Successfully!");
        navigate('/CompanyDash');
        
    }


    return(
        <div class="comp-jobs-body">

            <main>
                
        <div>
            <br/>
            <h2 id="comp-jobs-heading">&nbsp; Add a Job</h2>
            
            <div id="comp-jobs-content-box">
                <div id="comp-jobs-content">
                    <br/>

                    <div className='row'>
                    <div className='col-6'>
                    <span>
                        <h4>Enter position name : </h4>
                        <input type="text" class="form-control" placeholder="Eg : Software Engineer II" value={position} onChange={(event) => setPosition(event.target.value)} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required/> <br/>
                    </span>
                    </div>
                    
                    <div className='col-6'>
                        <h4>Select the job type : </h4>
                        <select className="form-select" value={type} onChange={(event) => setType(event.target.value)} aria-label="Default select example">
                            <option selected>Job Type to be selected</option>
                            <option value="Full Time">Full Time</option>
                            <option value="Internship">Internship</option>
                        </select>
                    </div>

                    </div>

                    <div class="row">
                    <div class="col-6">
                        <br/>
                        <h4>Enter required GPA : </h4>
                        <input type="text" class="form-control" placeholder="Eg : >=8.0" value={gpa} onChange={(event) => setGpa(event.target.value)} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required/> <br/>
                    </div>

                    <div class="col-6">
                        <br/>
                        <h4>Enter Last Date to apply : </h4>
                        <input type="date" class="form-control" aria-label="Sizing example input" value={date} onChange={(event) => setDate(event.target.value)} aria-describedby="inputGroup-sizing-default" required/> <br/>
                    </div>
                    </div>

                    <div>
                        <br/>
                        <h4>Enter Minimum Qualifications : </h4>
                        <input type="text" class="form-control" placeholder="point 1 : About Education (Degree)" value={minq1} onChange={(event) => setMinq1(event.target.value)} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required/> <br/>
                        <input type="text" class="form-control" placeholder="point 2 : Year of study (Eg : penultimate year of study)" value={minq2} onChange={(event) => setMinq2(event.target.value)} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required/> <br/>
                        <input type="text" class="form-control" placeholder="point 3 :Preferred Languages for the interview (Eg : Java, C/C++, Python, JavaScript, Go, etc.)" value={minq3} onChange={(event) => setMinq3(event.target.value)} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required/> <br/>
                    </div>

                    <div>
                        <br/>
                        <h4>Enter Preferred Qualifications : </h4>
                        <input type="text" class="form-control" placeholder="point 1 : About expected/required skill set" value={preq1} onChange={(event) => setPreq1(event.target.value)} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required/> <br/>
                        <input type="text" class="form-control" placeholder="point 2 : About expected/required skill set" value={preq2} onChange={(event) => setPreq2(event.target.value)} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required/> <br/>
                        <input type="text" class="form-control" placeholder="point 3 : About expected/required skill set" value={preq3} onChange={(event) => setPreq3(event.target.value)} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required/> <br/>
                        <input type="text" class="form-control" placeholder="point 4 : About expected/required skill set" value={preq4} onChange={(event) => setPreq4(event.target.value)} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required/> <br/>
                    </div>

                    <div>
                        <br/>
                        <h4>Enter About the Job : </h4>
                        <textarea class="form-control" placeholder="About the product(s) or field(s) and the team(s) or any specifications to be given to the candidate regarding the job : (to be written in a paragraph)" value={abtJob} onChange={(event) => setAbtJob(event.target.value)} id="about-job" cols="30" rows="10" required></textarea>
                    </div>

                    <div>
                        <br/>
                        <h4>Enter Responsibilities : </h4>
                        <input type="text" class="form-control" placeholder="point 1 : Responsibilities to be taken up by the candidate" value={resp1} onChange={(event) => setResp1(event.target.value)} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required/> <br/>
                        <input type="text" class="form-control" placeholder="point 2 : Responsibilities to be taken up by the candidate" value={resp2} onChange={(event) => setResp2(event.target.value)} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required/> <br/>
                        <input type="text" class="form-control" placeholder="point 3 : Responsibilities to be taken up by the candidate" value={resp3} onChange={(event) => setResp3(event.target.value)} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required/> <br/>
                        <input type="text" class="form-control" placeholder="point 4 : Responsibilities to be taken up by the candidate" value={resp4} onChange={(event) => setResp4(event.target.value)} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required/> <br/>
                    </div>


                    <div class="row" id="addJobBtn">

                        <div class="col-5">
                            <Link to='/CompanyDash' class="btn btn-dark"><b>Cancel</b></Link>
                            <br/>
                        </div>
                        
                        <div class="col-7">
                            <button type='submit' class="btn btn-primary" onClick={collectData} ><b>Add Job</b></button>
                            <br/>
                        </div>
                        
                    </div>
                    <br/><br/>
                </div>
            </div>
        </div>
        <br/><br/><br/>
    </main>
        </div>
    );
}
export default CompanyJobs;