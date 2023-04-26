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

    <div className='row d-flex vh-100'>
      <span className='align-middle'>
        <Testimonialcarousel />
      </span>
    </div>

    <div className='row vh-100'>
      <Introcard/>
    </div>

    <div className='row'>
    <Footer/>
    </div>
  </div>
  )
}

export default Home
