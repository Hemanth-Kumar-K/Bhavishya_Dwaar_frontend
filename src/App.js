import {Routes, Route} from 'react-router-dom';
import Home from './Assets/JSX/Home';
import RegisterSt from './Assets/JSX/RegisterSt';
import Login from './Assets/JSX/Login';
import StudDashboard from './Assets/JSX/StudDashboard';
import Register from './Assets/JSX/Register';
import OTP from './Assets/JSX/OTP';
import CompanyDash from './Assets/JSX/CompanyDash';
import StudJobs from './Assets/JSX/StudJobs';
import RegisterCom from './Assets/JSX/RegisterCom';
import StudPrivateContent from './Assets/JSX/StudPrivateContent';
import CompPrivateContent from './Assets/JSX/CompPrivateContent';
import StudEditProfile from './Assets/JSX/StudEditProfile';
import CompEditProfile from './Assets/JSX/CompEditProfile';
import CompanyAddJobs from './Assets/JSX/CompanyAddJobs';
import CompJobsPosted from './Assets/JSX/CompJobsPosted';
import CompPassword from './Assets/JSX/CompPassword';
import StudPassword from './Assets/JSX/StudPassword';
import CompList from './Assets/JSX/CompList';


function App() {
  return (
    <div className="App">
      <Routes>

        <Route element={<StudPrivateContent/>}>
        <Route path='/StudentDash/Jobs' element={<StudJobs/>}></Route>
        <Route path='/StudentDash/EditProfile' element={<StudEditProfile/>}></Route>
        <Route path='/StudentDash' element={<StudDashboard/>}></Route>
        <Route path='/StudentDash/ChangePassword' element={<StudPassword/>}></Route>
        <Route path='/StudentDash/CompanyList' element={<CompList/>}></Route>
        </Route>

        <Route element={<CompPrivateContent/>}>
        <Route path='/CompanyDash' element={<CompanyDash/>}></Route>
        <Route path='/CompanyDash/EditProfile' element={<CompEditProfile/>}></Route>
        <Route path='/CompanyDash/AddJob' element={<CompanyAddJobs/>}></Route>
         <Route path='/CompanyDash/JobsPosted' element={<CompJobsPosted/>}></Route>
         <Route path='/CompanyDash/ChangePassword' element={<CompPassword/>}></Route>
        </Route>


        <Route path='/' element={<Home/>}></Route>
        <Route path='/Register/RegisterSt' element={<RegisterSt/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Register' element={<Register/>}></Route>
        <Route path='/Login/OTP' element={<OTP/>}></Route>
        <Route path='/Register/Companies' element={<RegisterCom/>}></Route>
        


      </Routes>
    </div>
  );
}

export default App;
