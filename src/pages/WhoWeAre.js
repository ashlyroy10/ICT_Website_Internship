import React from 'react'
import SidePanel2 from '../components/SidePanel2'
import { Route, Routes } from 'react-router-dom'
import AboutUs from '../components/AboutUs'

const WhoWeAre = () => {
  return (
    <div>
      <SidePanel2/>
      <Routes>
      <Route exact path='/who_we_are/about_us' component={AboutUs} />
      </Routes>
    </div>
  )
}

export default WhoWeAre
