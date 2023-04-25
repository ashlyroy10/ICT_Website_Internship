import React from 'react'
import HeaderMain from '../components/HeaderMain'
import Testimonialcarousel from '../components/Testimonialcarousel'
import Footer from '../components/Footer'
import Introcard from '../components/Introcard'
import Intropart from '../pages/Intropart'

const Home = () => {
  return (
    <div>
    <div className='row'>
      <div>
        <HeaderMain/>
      </div>
    </div>

    <div className='row'>
      <Intropart/>
    </div>

    <div className='row'>
      <Testimonialcarousel />
    </div>

    <div className='row'>
      <Introcard/>
    </div>

    <div className='row'>
    <Footer/>
    </div>
  </div>
  )
}

export default Home
