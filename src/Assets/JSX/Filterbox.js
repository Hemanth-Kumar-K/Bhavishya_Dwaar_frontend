import React from 'react';
import '../CSS/StudJobs.css';

const Filterbox = () => {
    return(

        <div className="mt-5" >
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

    );
}
export default Filterbox;