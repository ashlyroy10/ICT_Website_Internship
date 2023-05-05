import { Route, Routes} from 'react-router-dom';
import './App.css';
import WhatWeDo from './pages/WhatWeDo';
import WhoWeAre from './pages/WhoWeAre';
import Course from './pages/Course';
import Coursesection from './pages/Coursesection';
import Home from './pages/Home';

import Admindashboard from './pages/Admindashboard';
import Adminlogin from './pages/Adminlogin';
import AddCourse from './components/AddCourse';
import AddStaff from './components/AddStaff';
import AddTestimonial from './components/AddTestimonial';
import EditStaff from './components/EditStaff';
import EditCourse from './components/EditCourse';
import Detailedcards from './components/Detailedcards';
import AboutUs from './components/AboutUs';
import ShareHolders from './components/ShareHolders';
import Leaders from './components/Leaders';
import Trainings from './components/Trainings';
import Government from './components/Government';
import Partner from './components/Partner';
import Project from './components/Project';
import OperatingUnit from './components/OperatingUnit';
import Events from './components/Events';
import Team from './components/Team';
import AdminTestimonial from './pages/AdminTestimonial';
import Adminstaff from './pages/Adminstaff';
import Admincourse from './pages/Admincourse';
import EditTestimonial from './components/EditTestimonial';
import Tempworkshop from './pages/Tempworkshop';






function App() {
  return (
    <div className="App">
      
     {/* <Why_ICT_Course/> */}

     
     <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/what_we_do' element={<WhatWeDo/>}>
        <Route path='/what_we_do/trainings' element={<Trainings/>}/>
        <Route path='/what_we_do/government_program' element={<Government/>}/>
        <Route path='/what_we_do/partner_program' element={<Partner/>}/>
        <Route path='/what_we_do/operating_units' element={<OperatingUnit/>}/>
        <Route path='/what_we_do/projects' element={<Project/>}/>
        <Route path='/what_we_do/events' element={<Events/>}/>
      </Route>

      <Route path='/who_we_are' element={<WhoWeAre/>}>
        <Route path='/who_we_are/about_us' element={<AboutUs/>}/>
        <Route path='/who_we_are/share_holders' element={<ShareHolders/>}/>
        <Route path='/who_we_are/our_leaders' element={<Leaders/>}/>
        <Route path='/who_we_are/our_team' element={<Team/>}/>
      </Route>

      <Route path='/courses' element={<Coursesection/>}/>
      <Route path='/courses/:code' element={<Detailedcards/>}/>
      <Route path='/courses/:code/:id' element={<Course/>}/>
    
      
      <Route path='/editstaff/:id' element={<EditStaff/>}/>
      <Route path='/editcourse/:id' element={<EditCourse/>}/>
      <Route path='/edittestimonial/:id' element={<EditTestimonial/>}/>

      <Route path='/admindashboard' element={<Admindashboard/>} >
        <Route path='/admindashboard/course_details' element={<Admincourse/>}/>
        <Route path='/admindashboard/staff_details' element={<Adminstaff/>}/>
        <Route path='/admindashboard/testimonials' element={<AdminTestimonial/>}/>
      </Route>
      <Route path='/adminlogin' element={<Adminlogin/>} />  
      <Route path='/admindashboard/addcourse' element={<AddCourse/>} />
      <Route path='/admindashboard/addstaff' element={<AddStaff/>} /> 
      <Route path='/admindashboard/addtestimonials' element={<AddTestimonial/>} /> 

      {/* temporary */}
      <Route path='/workshop' element={<Tempworkshop/>} /> 
    
     </Routes>
     
    </div>
  );
}

export default App;
