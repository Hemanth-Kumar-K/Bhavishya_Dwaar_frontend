import React from 'react';
import "../CSS/OTP.css";


const Home = () =>
  {

     return (  
            
     <div className="container height-100 d-flex justify-content-center align-items-center">
      
      <div className="position-relative"> 
        <div className="card p-2 text-center" id='cpd'>
          <h6>An OTP has been sent to the Registered Mobile Number *******683</h6>
         <div id="otp" className="inputs d-flex flex-row justify-content-center mt-2">
            
            <input className="m-2 text-center form-control rounded" type="text" id="first" maxlength="1" />
            <input className="m-2 text-center form-control rounded" type="text" id="second" maxlength="1" />
             <input className="m-2 text-center form-control rounded" type="text" id="third" maxlength="1" /> 
             <input className="m-2 text-center form-control rounded" type="text" id="fourth" maxlength="1" /> 
             <input className="m-2 text-center form-control rounded" type="text" id="fifth" maxlength="1" /> 
             <input className="m-2 text-center form-control rounded" type="text" id="sixth" maxlength="1" /> 
          </div>
         <div className="mt-4">
          <button className="btn btn-danger px-4 validate">Submit</button>
         </div>
         </div> 
         <div className=""> 
         <div className="content ">
           <span>Didn't get the code</span> 
           <a href="#" className="text-decoration-none ms-3">Resend(1/3)</a> 
           </div>
            </div> 
            </div>



     </div>
   );
}
export default Home;