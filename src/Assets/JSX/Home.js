import React, {useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import "../CSS/home.css";
import '../CSS/footer.css';
import HomeNav from './HomeNav';
import HomeNavStud from './HomeNavStud';
import HomeNavComp from './HomeNavComp';

import Slide1 from '../PIC/Slide1.JPG';
import Slide2 from '../PIC/Slide2.JPG';
import Slide3 from '../PIC/Slide3.JPG';

const Home = () =>
  {

    const stud = localStorage.getItem("student");
    const comp = localStorage.getItem("company");

    
     return (
        <div className='homebody'>

        <header>
         {stud ? <HomeNavStud/> : comp ? <HomeNavComp/> : <HomeNav/>}
        </header>

      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active carousel-inner">
            <img src={Slide1} className="d-block w-100 car_img"  alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Slide2} className="d-block w-100 car_img" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={Slide3} className="d-block w-100 car_img" alt="..."/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    <br/>
    <br/>
    <br/>
    <br id="bau_1"/>
      <div id="aboutus">
        <h1 className="au_t">About Us</h1>
        <div>
            <p className="p_1">Established in 2007, KMIT is affiliated to Jawaharlal Nehru Technological University Hyderabad, and is approved by the All India Council for Technical Education (AICTE), New Delhi. KMIT strongly believes in encouraging learner autonomy which the administration and Faculty facilitate by building a learner centric environment. Also, continuous efforts are made towards modernising and upgrading its resources and teaching-learning processes in tandem with the latest technological trends.
              <br/>
              <br/>
              KMIT has continues to maintain the streak of record placements for 2022-2023 Batch. 95 companies have visited the campus thus far and 791 offers were made. 555* students got placed with an average salary of 8.76LPA. With 550 students registered for placements, we are pleased to announce that we attained 100% placement record..
  
              <br/>
              <br/>
              The Institute has a full-fledged placement office to look after Placement activities.The support services that it offers are in the form of arranging On-campus / Pooled-Campus Drives and grooming students to face the final test of their knowledge.
              </p>
              <br/>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
   
      <div id="top_companies">
        <h1 className="text-center top">TOP COMPANIES</h1>
        <div className="d-flex flex-row">
          <div className="row">
            <div className="col-12 col-lg-4 col-md-6">
            <div className="card card_sty"  id='sty2'>
                <div className="card-body" id="cardBody">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9GEUOGX33dVJ-hwhRcQIhZWadU8gJDG6iJA&usqp=CAU" className="card-img-top im_1" alt="..."/>
                    </div>
            </div>
  
            </div>
  
            <div className="col-12 col-lg-4 col-md-6">
              <div className="card card_sty" id='sty2'>
                  <div className="card-body" id="cardBody">
                      <img src="https://1000logos.net/wp-content/uploads/2021/04/Adobe-logo.png" className="card-img-top im_1" alt="..."/>
                      </div>
              </div>
              
              </div>
            
  
              <div className="col-12 col-lg-4 col-md-6">
                <div className="card card_sty" id='sty2'>
                    <div className="card-body" id="cardBody">
                        <img src="https://media.geeksforgeeks.org/wp-content/uploads/download-25.png" className="card-img-top im_1" alt="..."/>
                        </div>
                </div>
                
                </div>
  
  
                <div className="col-12 col-lg-4 col-md-6">
                  <div className="card card_sty" id='sty2'>
                      <div className="card-body" id="cardBody">
                          <img src="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_367cbd1c10ce25f44c5668f622c7c4fd/darwinbox.jpg" className="card-img-top im_1" alt="..."/>
                          </div>
                  </div>
                </div>
                <div className="col-12 col-lg-4 col-md-6">
                  <div className="card card_sty" id='sty2'>
                      <div className="card-body" id="cardBody">
                          <img src="https://lowes.co.in/wp-content/uploads/2020/07/Lowes-Logo.png" className="card-img-top im_1" alt="..."/>
                          </div>
                  </div>
                </div>
                <div className="col-12 col-lg-4 col-md-6">
                  <div className="card card_sty" id='sty2'>
                      <div className="card-body" id="cardBody">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1200px-Cisco_logo_blue_2016.svg.png" className="card-img-top im_1" alt="..."/>
                          </div>
                  </div>
                </div>
                <div className="col-12 col-lg-4 col-md-6">
                  <div className="card card_sty" id='sty2'>
                      <div className="card-body" id="cardBody">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Experian_logo.svg/800px-Experian_logo.svg.png" className="card-img-top im_1" alt="..."/>
                          </div>
                  </div>
                </div>
                <div className="col-12 col-lg-4 col-md-6">
                  <div className="card card_sty" id='sty2'>
                      <div className="card-body" id="cardBody">
                          <img src="https://mms.businesswire.com/media/20230117005979/en/746387/22/IBLogoNew.jpg" className="card-img-top im_1" alt="..."/>
                          </div>
                  </div>
                </div>
                <div className="col-12 col-lg-4 col-md-6">
                  <div className="card card_sty" id='sty2'>
                      <div className="card-body" id="cardBody">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/2560px-Salesforce.com_logo.svg.png" className="card-img-top im_1" alt="..."/>
                          </div>
                  </div>
                </div>
            </div>
  
        
        </div>
      </div>


      <footer className="bg-secondary text-center text-white">
    
    <h2 className="fo">Developers</h2>
    <div>
      <div className="row">
        <div className="col-6">
          <h4>Nagendra Kamesh M S</h4>
            <div className="container p-4">
              
              <div className="mb-4">
          
                
                <a className="btn btn-outline-light btn-floating m-1" href="mailto:kameshoncall@gmail.com"  role="button" target="_blank"><i className="fab fa-google"></i></a>
          
                
                <a className="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/thisiskamesh03/" role="button" target="_blank"><i className="fab fa-instagram"></i></a>
          
                
                <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/nagendra-kamesh-m-s-00964a204/" role="button" target="_blank"><i className="fab fa-linkedin-in"></i></a>
          
                
                <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/nagendrakamesh" role="button" target="_blank"><i className="fab fa-github"></i></a>
              </div>
              
              
            </div>
        </div>
        <div className="vl col-1"></div>
        <div className="col-5">
          <h4>Hemanth Kumar K</h4>
            <div className="container p-4">
              
              <div className="mb-4">
          
                
                <a className="btn btn-outline-light btn-floating m-1" href="mailto:hemanthkumar.kmit@gmail.com"  role="button" target="_blank"><i className="fab fa-google"></i></a>
          
                
                <a className="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/hemanth4976/" role="button" target="_blank"><i className="fab fa-instagram"></i></a>
          
                
                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-linkedin-in" target="_blank"></i></a>
          
                
                <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/Hemanth-Kumar-K" role="button" target="_blank"><i className="fab fa-github"></i></a>
              </div>
              
              
            </div>
        </div>
      </div>
    </div>
    
    <div className="text-center p-3" id='copyright'>  
      © 2023 Copyright
    </div>
    
  </footer>

    </div>
    );
}
export default Home;