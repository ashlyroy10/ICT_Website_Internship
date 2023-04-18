import { Route, Routes } from 'react-router-dom';
import './App.css';
import HeaderMain from './components/HeaderMain'
import WhatWeDo from './pages/WhatWeDo';
import WhoWeAre from './pages/WhoWeAre';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
     <HeaderMain/>
     <Routes>
     <Route path='/' element={<Home/>}/>
      <Route path='/what_we_do' element={<WhatWeDo/>}/>
      <Route path='/who_we_are' element={<WhoWeAre/>}/>
     </Routes>
    </div>
  );
}

export default App;
