import React from 'react'
import HeaderMain from '../components/HeaderMain'
import Testimonialcarousel from '../components/Testimonialcarousel'
import Footer from '../components/Footer'
import Introcard from '../components/Introcard'
import Intropart from '../pages/Intropart'
import '../assets/css/style.css'

const Home = () => {
  return (
    <div className='font-link'>
    <div className='row'>
      <div>
        <HeaderMain/>
      </div>
    </div>

    <div className='row'>
      <Intropart/>
    </div>

    <div className="home-container container font-link">
            <div className="home-box bg-light">
            <h1 className='pb-4'><strong>Testimonials</strong></h1>
        <Testimonialcarousel />
      </div>
    </div>

    <div className="home-container container font-link">
            <div className="home-box bg-light">
            <h1 className='pb-4'><strong>Popular Courses</strong></h1>
            <Introcard/>
            </div>
    </div>
    <div className='row vh-50'>
     
    </div>

    <div className='row'>
    <Footer/>
    </div>
  </div>
  )
}

export default Home
