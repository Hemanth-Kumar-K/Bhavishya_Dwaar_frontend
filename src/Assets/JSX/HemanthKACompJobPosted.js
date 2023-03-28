import React, {Component} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import '../CSS/StudJobs.css';


const StudJobs = () => {
    
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/Login");
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
            <Link to='/StudentDash/Jobs' className="nav-link active">Jobs</Link>
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
              <Link to='/StudentDash' className="dropdown-item">My profile</Link>
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
      
                  <div className="col-lg-3 mt-5" >
                    <h2>All Filters</h2>
                    <input className="form-control" 
                           id="txtInputAnything" 
                           type="text"
                           placeholder="Search for Companies,Location....."/>
                    <div>
                      <a href="#" id="clr">Clear Filters</a>
                    </div>
                    <div id="myWeb" className="mt-3 x">
                        <a href="#">Google</a>
                        <br/>
                        <a href="#">Software</a>
                        <br/>
                        <a href="#">Enginner</a>
                        <br/>
                        <br/>
                    </div>
                    
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                      <div className="accordion-item">
                        <h3 className="accordion-header" id="flush-headingOne">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            <h4>Location</h4>
                          </button>
                        </h3>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">
                              
                            <input className="form-control p-3" 
                            id="txtInputAnything" 
                            type="text"
                            placeholder="Search for Location....."/>
                         <div className="form-check">
                           <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>
                           <label className="form-check-label" for="flexCheckChecked">
                             Hyderabad
                           </label>
                         </div>
                         <div className="form-check">
                           <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>
                           <label className="form-check-label" for="flexCheckChecked">
                             Bengaluru
                           </label>
                         </div>
      
                          </div>
                        </div>
                      </div>
                    </div>
      
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                      <div className="accordion-item">
                        <h3 className="accordion-header" id="flush-headingFour">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                            <h4>Job Types</h4>
                          </button>
                        </h3>
                        <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">
                              
                            <div className="d-flex flex-row">
                              <div className="d-flex flex-column mr-5">
                              <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>
                                <label className="form-check-label" for="flexCheckChecked">
                                  FullTime
                                </label>
                              </div>
                              
                              </div>
                              <div>
                              <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>
                                <label className="form-check-label" for="flexCheckChecked">
                                  Intern
                                </label>
                              </div>
                              
                              </div>
                            </div>
                            
                  
                          </div>
                        </div>
                      </div>
                    </div>
      
                    
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                      <div className="accordion-item">
                        <h3 className="accordion-header" id="flush-headingThree">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            <h4>Organisations</h4>
                          </button>
                        </h3>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">
                              
                            <div className="d-flex flex-row">
                              <div className="d-flex flex-column mr-5">
                              <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>
                                <label className="form-check-label" for="flexCheckChecked">
                                  Google
                                </label>
                              </div>
                              <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>
                                <label className="form-check-label" for="flexCheckChecked">
                                  Amazon
                                </label>
                              </div>
                              </div>
                              <div>
                              <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>
                                <label className="form-check-label" for="flexCheckChecked">
                                  Microsoft
                                </label>
                              </div>
                              <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>
                                <label className="form-check-label" for="flexCheckChecked">
                                  YouTube
                                </label>
                              </div>
                              </div>
                            </div>
      
        
                            
                          </div>
                        </div>
                      </div>
                    </div>
                    
                  </div>
      
                
                  <div className="col-lg-9" id="job_cards">
                      <div id="card_holder">
      
                          
                      <div className="card jobcards ">
                          <h5 className="card-header">Internship</h5>
                          <div className="card-body">
                            <h5 className="card-title"><img src="https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1" alt="img" className="compimg"/>&nbsp; Software Engineer Intern</h5>
                            <p className="card-text">
                              Company : Google <br/>
                              Location : Bengaluru <br/>
                            </p>
                            
                            <span className="view_button">
                                <div className='d-flex flex-row'>
                              <button className="btn btn-outline-primary m-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#off1" aria-controls="offcanvasWithBothOptions">View Details</button>

                              <button className="btn btn-outline-danger m-2" type="button"  aria-controls="offcanvasWithBothOptions">Delete</button>
                              </div>


                              <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="off1" aria-labelledby="offcanvasWithBothOptionsLabel">
                                <div className="offcanvas-header">
                                  <h3 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Software Engineer Intern</h3>
                                  <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <hr/>
                  
                                <div className="offcanvas-body">
      
                                  <p>
                                      <h4>Company : Google</h4>
                                      <h4>Location : Bengaluru</h4>
                                      <h4>Last Date to apply : 15/08/2047</h4>
                                      <h4>Required GPA : {'>'}=8.0</h4>
                                      <br/>
      
                                      <hr/>
      
                                      <h5>Minimum qualifications:</h5>
                                      <ul>
                                          <li>Currently pursuing a Bachelor's, Master's, or PhD degree in Computer Science or a related technical field.</li>
                                          <li>Currently in your penultimate year of study.</li>
                                          <li>Experience with one or more general purpose programming languages (e.g., Java, C/C++, Python, JavaScript, Go, etc.).</li>
                                      </ul>
                                      <br/>
      
                                      <h5>Preferred qualifications:</h5>
                                      <ul>
                                          <li>Experience in computer science.</li>
                                          <li>Proficiency with data structures, algorithms, and software design.</li>
                                          <li>Knowledge of Unix/Linux and APIs.</li>
                                          <li>Familiarity with TCP/IP and network programming.</li>
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
                                                  
                                                  <p>As a Software Engineering Intern, you will work on our core products and services as well as those which support critical functions of our engineering operations. You will develop and present ideas, striving for an understanding of our products to continually improve upon them. We focus on being a collaborative, global organization consisting of engineers with technical depth, programming skills, and a keen eye for quality.</p>
                                                  <p>Google is and always will be an engineering company. We hire people with a broad set of technical skills who are ready to address some of technology's greatest challenges and make an impact on millions, if not billions, of users. At Google, engineers not only revolutionize search, they routinely work on massive scalability and storage solutions, large-scale applications and entirely new platforms for developers around the world. From Google Ads to Chrome, Android to YouTube, Social to Local, Google engineers are changing the world one technological achievement after another.</p>
      
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
                                                      <li>Research, create, and develop software applications to extend and improve on Google's product offering.</li>
                                                      <li>Contribute to a wide variety of projects utilizing natural language processing, artificial intelligence, data compression, machine learning, and search technologies.</li>
                                                      <li>Collaborate on scalability issues involving access to massive amounts of data and information.</li>
                                                      <li>Work-in and support a productive and innovative team with peers, managers, and cross-functional teams.</li>
                                                  </ul>
      
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                  </p>
                                  <br/>
                                  <a href="" className="btn btn-outline-primary">Apply</a>
                                  <br/><br/>
      
                                </div>
                              </div>
                            </span>
                          </div>
                        </div>
      
      
      
                        <br/><br/>
      
                      
                        <div className="card jobcards">
                          <h5 className="card-header">Full Time</h5>
                          <div className="card-body">
                            <h5 className="card-title"><img src="https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1" alt="img" className="compimg"/>&nbsp; Software Engineer II</h5>
                            <p className="card-text">
                              Company : Google <br/>
                              Location : Hyderabad <br/>
                            </p>
                            
                            <span className="view_button">
                            <div className='d-flex flex-row'>
                              <button className="btn btn-outline-primary m-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#off1" aria-controls="offcanvasWithBothOptions">View Details</button>

                              <button className="btn btn-outline-danger m-2" type="button"  aria-controls="offcanvasWithBothOptions">Delete</button>
                              </div>

                              <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="off2" aria-labelledby="offcanvasWithBothOptionsLabel">
                                <div className="offcanvas-header">
                                  <h3 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Software Engineer II</h3>
                                  <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <hr/>
                  
                                <div className="offcanvas-body">
                                  
                                  <p>
                                      <h4>Company : Google</h4>
                                      <h4>Location : Hyderabad</h4>
                                      <h4>Last Date to apply : 15/08/2047</h4>
                                      <h4>Required GPA : {'>'}=8.0</h4>
                                      <br/>
      
                                      <hr/>
      
                                      <h5>Minimum qualifications:</h5>
                                      <ul>
                                          <li>Bachelor’s degree or equivalent practical experience.</li>
                                          <li>1 year of experience with software development in one or more programming languages (e.g., Python, C, C++, Java, JavaScript).</li>
                                      </ul>
                                      <br/>
      
                                      <h5>Preferred qualifications:</h5>
                                      <ul>
                                          <li>Master's degree or PhD in Computer Science or related technical field.</li>
                                          <li>Experience developing accessible technologies.</li>
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
                                                  
                                                  <p>Google's software engineers develop the next-generation technologies that change how billions of users connect, explore, and interact with information and one another. Our products need to handle information at massive scale, and extend well beyond web search. We're looking for engineers who bring fresh ideas from all areas, including information retrieval, distributed computing, large-scale system design, networking and data storage, security, artificial intelligence, natural language processing, UI design and mobile; the list goes on and is growing every day. As a software engineer, you will work on a specific project critical to Google’s needs with opportunities to switch teams and projects as you and our fast-paced business grow and evolve. We need our engineers to be versatile, display leadership qualities and be enthusiastic to take on new problems across the full-stack as we continue to push technology forward.</p>
                                                  <p>With your technical expertise you will manage project priorities, deadlines, and deliverables. You will design, develop, test, deploy, maintain, and enhance software solutions. Learning is the ongoing quest for understanding, and we made it our mission more than 20 years ago to organize the world’s information to make it universally accessible and useful. The learning landscape is changing, and the Learning and Education team's mission is to help everyone in the world learn anything in the world. We provide the information, tools, and services that help people gain knowledge, fuel curiosity, and prepare for what’s next. We focus our work to add the most value for users to enable learning for school, work, and life. We believe everyone can and should have access to quality learning experiences to reach their full potential.</p>
                                                  
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
                                                      <li>Write product or system development code.</li>
                                                      <li>Participate in, or lead design reviews with peers and stakeholders to decide amongst available technologies.</li>
                                                      <li>Review code developed by other developers and provide feedback to ensure best practices (e.g., style guidelines, checking code in, accuracy, testability, and efficiency).</li>
                                                      <li>Contribute to existing documentation or educational content and adapt content based on product/program updates and user feedback.</li>
                                                      <li>Triage product or system issues and debug/track/resolve by analyzing the sources of issues and the impact on hardware, network, or service operations and quality.</li>
                                                  </ul>
      
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                  </p>
                                  <br/>
                                  <a href="" className="btn btn-outline-primary">Apply</a>
                                  <br/><br/>
      
                                </div>
      
                              </div>
                            </span>
                          </div>
                        </div>
      
      
      
      
                      </div>
                  </div>
      
              </div>
      
          </main>
      </div>
        );
    
}
export default StudJobs;