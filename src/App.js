import { Route, Routes} from 'react-router-dom';
import './App.css';
import WhatWeDo from './pages/WhatWeDo';
import WhoWeAre from './pages/WhoWeAre';
import Home from './pages/Home';

import Admindashboard from './pages/Admindashboard';
import Adminlogin from './pages/Adminlogin';
import AddCourse from './components/AddCourse';
import AddStaff from './components/AddStaff';
import AddTestimonial from './components/AddTestimonial';


function App() {
  return (
    <div className="App min-vw-100">
     <Routes>
     <Route path='/' element={<Home/>}/>
      <Route path='/what_we_do' element={<WhatWeDo/>}/>
      <Route path='/who_we_are' element={<WhoWeAre/>}/>

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
