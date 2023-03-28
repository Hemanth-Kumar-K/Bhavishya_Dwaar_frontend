import React , {Component} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import '../CSS/dashboard.css';


const StudDashboard = () => {

  const auth = localStorage.getItem("student");
  
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/Login");
  }

        return(
            <div id='dashboard_body'>
            <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-body-tertiary">
   
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
          <Link className="nav-link active" to='/StudentDash/CompanyList'>Companies</Link>
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
        <div className="container-fluid">

          <br/><br/>
          <br/>
          <div id="profile">
            <br />
            <div className="card" id='sty_1' >
              <div className="card-body">
                <div className='d-none d-md-block d-lg-block'> <img id="profileimage" src="https://cdn-icons-png.flaticon.com/512/149/149071.png?w=740&t=st=1676081222~exp=1676081822~hmac=467801bff8371b5cfe04491cd2f0d8ce854a076185c6a0250dd626c85ebd35a7" alt="profile"/> </div>
                <div id="profile_body">
                <h4 className="card-title"  > Name  : {JSON.parse(auth).name}</h4>
                
                <h4 className="card-title" > Roll No  : {JSON.parse(auth).rollno}</h4>
                
                <h4 className="card-title" > E-Mail  : {JSON.parse(auth).email}</h4>
                <br/><br/>
                <Link className="btn btn-primary" to='/StudentDash/EditProfile' id="editprof_1" ><b>Edit Profile</b></Link>
                <a href="#" className="btn btn-primary" id="editprof_2" ><b>Update Resume</b></a>
                </div>
              </div>
            </div>
          {/* </center> */}
          </div>
          <br/><br/>

            <div id="stud_appl">
                <br/>
                {/* <center> */}
                    <h2 id='sty_2'>My applications</h2>
                {/* </center> */}
                <br/>
                <div className="row">

                <div className="col col-lg-3 col-md-6">
                <div className="card jobcard" id='sty_31'>
                    <div className="card-body" id="cardBody">
                      <h5 className="card-title"><img src="https://play-lh.googleusercontent.com/kHRf85euDvW-Kg7ThXK2vv-J-Yye9uxoo6GQvUcAwudNRz1sQvXubAl_m2bu6KJofA" alt="img" className="compimg"/> Microsoft</h5>
                      <p className="card-text">Position : SDE-1 <br/> 
                        Location : Hyderabad <br/> 
                        Applied On : 15/08/2047 <br/>
                       </p>
                      <a href="#" className="btn btn-primary">View Details</a>
                    </div>
                  </div>
                </div>


                <div className="col col-lg-3 col-md-6">
                    <div className="card jobcard" id='sty_4'>
                        <div className="card-body" id="cardBody">
                          <h5 className="card-title"><img src="https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1" alt="img" className="compimg"/> Google</h5>
                          <p className="card-text">Position : SWE-1 <br/> 
                            Location : Hyderabad <br/> 
                            Applied On : 15/08/2047 <br/>
                           </p>
                          <a href="#" className="btn btn-primary">View Details</a>
                        </div>
                      </div>
                    </div>

                    <div className="col col-lg-3 col-md-6">
                        <div className="card jobcard" id='sty_5'>
                            <div className="card-body" id="cardBody">
                              <h5 className="card-title"><img src="https://pngimg.com/uploads/amazon/amazon_PNG5.png" alt="img" className="compimg"/> Amazon</h5>
                              <p className="card-text">Position : SDE-2 <br/> 
                                Location : Hyderabad <br/> 
                                Applied On : 15/08/2047 <br/>
                               </p>
                              <a href="#" className="btn btn-primary">View Details</a>
                            </div>
                          </div>
                        </div>
                    
                        <div className="col col-lg-3 col-md-6">
                            <div className="card jobcard" id='sty_6'>
                                <div className="card-body" id="cardBody">
                                  <h5 className="card-title"><img src="https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1" alt="img" className="compimg"/> Google</h5>
                                  <p className="card-text">Position : SWE-1 <br/> 
                                    Location : Bengaluru <br/> 
                                    Applied On : 15/08/2047 <br/>
                                   </p>
                                  <a href="#" className="btn btn-primary">View Details</a>
                                </div>
                              </div>
                            </div>
                        

                </div>
                <br/><br/>
                <div id='cen'>
                    <Link to='/StudentDash/Jobs'><button type="button" className="btn btn-light" id='sty_7'><b>Browse for jobs</b></button></Link>
                    </div>
            </div>
        </div>
    </main>

    <div>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
    

    </div>
        );
    
}
export default StudDashboard;
