import React from 'react'
import HeaderMain from '../components/HeaderMain'
import Intropart from '../pages/Intropart'
import Footer from '../components/Footer'
import Testimonialcarousel from '../components/Testimonialcarousel'
import Introcard from '../components/Introcard'

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
        <Introcard />
      </div>

      <div className='row'>
      <Footer/>
      </div>
    </div>
  )
}

export default Home
