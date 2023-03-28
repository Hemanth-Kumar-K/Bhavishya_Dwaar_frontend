import React from "react";
import {Link, useNavigate} from 'react-router-dom';

import '../CSS/loggednav.css';
import '../CSS/home.css';

const HomeNavComp = () => {

    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate("/Login");
    }

    return(
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-body-tertiary-dark" id='hemanthnav'>
        <div className="container-fluid">
          <Link className="navbar-brand navbar_text" to='/'>Bhavishya Dwaar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active navbar_text" aria-current="page" href="#bau_1">About Us</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link active navbar_text" aria-current="page" to='/CompanyDash/Jobs'>Jobs Posted</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link active navbar_text" href="#top_companies">Top Companies</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active navbar_text" href="https://www.kmit.in/placements/placement.php" target="_blank">Our Placements</a>
              </li>
            </ul>
            <div className="navbar-nav" id='sty1'>

            <div className="dropdown">
          <a
            className="text-reset me-3 dropdown-toggle hidden-arrow"
            href="#"
            id="navbarDropdownMenuLink"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fas fa-bell" id="bell"></i>
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
        </div>
      </nav>
      </div>
    );

}
export default HomeNavComp;