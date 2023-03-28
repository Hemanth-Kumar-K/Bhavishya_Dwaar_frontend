import React from "react";
import {Link} from 'react-router-dom';

import '../CSS/home.css';

const HomeNav = () => {

    return(
        <div className='navBg'>
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
                <Link className="nav-link active navbar_text" aria-current="page" to='/StudentDash/Jobs'>Jobs</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link active navbar_text" href="#top_companies">Top Companies</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active navbar_text" href="https://www.kmit.in/placements/placement.php" target="_blank">Our Placements</a>
              </li>
            </ul>
            <div className="navbar-nav" id='sty1'>


              <button className="nav-link active log_butt m-2" > <Link to="/Login" className="nolink">Login</Link></button>
              <button className="nav-link active sig_butt m-2" ><Link to="/Register" className="nolink">SignUp</Link></button>

            </div>
          </div>
        </div>
      </nav>
      </div>
    );

}
export default HomeNav;