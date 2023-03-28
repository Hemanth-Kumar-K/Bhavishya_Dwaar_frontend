import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';

import '../CSS/complist.css';

const CompList = () => {

    const [company, setCompany] = useState([]);

    useEffect(() => {
        getComp();
    }, []);

    const getComp = async () => {
        let result = await fetch('http://localhost:5000/companylist');
        result = await result.json();
        setCompany(result);
    }

    const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/Login");
  }

    return(
        <div className="complist">
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
            <br /><br />
            <div className='complistbox'>
                <div>

                    <main>
                        <br />
                        <div>
                            <table>
                            <br />
                            <tr className='listcontent'>
                                <th>S No.</th>
                                &nbsp;
                                <th>Company Name</th>
                                &nbsp;
                                <th>Location</th>
                            </tr>
                            {
                                company.map((item, index) =>
                                    
                                    <tr className='listcontent'>
                                        <td><b>{index+1}</b></td>
                                        &nbsp;
                                        <td><b>{item.name}</b></td>
                                        &nbsp;
                                        <td><b>{item.location}</b></td>
                                    </tr>
                                )
                            }
                            <br />
                            </table>
                            </div> 
                            <br /> 
                    </main>
                </div>
            </div>
            <br /><br /><br /><br /><br /><br />
        </div>
    );
}
export default CompList;