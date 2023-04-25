import { Route, Routes } from 'react-router-dom';
import './App.css';
import WhatWeDo from './pages/WhatWeDo';
import WhoWeAre from './pages/WhoWeAre';
import Course from './pages/Course';
import Home from './pages/Home';

import Admindashboard from './pages/Admindashboard';
import Adminlogin from './pages/Adminlogin';
import AddCourse from './components/AddCourse';
import AddStaff from './components/AddStaff';
import AddTestimonial from './components/AddTestimonial';
import SidePanel1 from './components/SidePanel1';
import Courselist from './pages/Courselist';
import Coursesection from './pages/Coursesection';

function App() {
  return (
    <div className="App">

      {/* <SidePanel1/> */}
      {/* <Courselist/> */}
      {/* <Home/> */}
      {/* <Coursesection/> */}
      
  
      <Routes>
     <Route path='/' element={<Home/>}/>
      <Route path='/what_we_do' element={<WhatWeDo/>}/>
      <Route path='/who_we_are' element={<WhoWeAre/>}/>
      <Route path='/courses' element={<Course/>}/>

      <Route path='/admindashboard' element={<Admindashboard/>} />
      <Route path='/adminlogin' element={<Adminlogin/>} />  
      <Route path='/admindashboard/addcourse' element={<AddCourse/>} />
      <Route path='/admindashboard/addstaff' element={<AddStaff/>} /> 
      <Route path='/admindashboard/addtestimonials' element={<AddTestimonial/>} /> 
      
    
     </Routes> 
     
    </div>
  );
}

export default App;
