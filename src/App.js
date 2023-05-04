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
import SidePanel1 from './components/SidePanel1';
import Why_ICT_Course from './pages/Why_ICT_Course';
import EditStaff from './components/EditStaff';
import EditCourse from './components/EditCourse';
import Detailedcards from './components/Detailedcards';


function App() {
  return (
    <div className="App">
      
     {/* <Why_ICT_Course/> */}

     
     <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/what_we_do' element={<WhatWeDo/>}/>
      <Route path='/who_we_are' element={<WhoWeAre/>}/>
      <Route path='/courses' element={<Coursesection/>}/>
      <Route path='/courses/readmore' element={<Detailedcards/>}/>
      <Route path='/courses/singlepage' element={<Course/>}/>
      <Route path='/editstaff/:id' element={<EditStaff/>}/>
      <Route path='/editcourse/:id' element={<EditCourse/>}/>

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
