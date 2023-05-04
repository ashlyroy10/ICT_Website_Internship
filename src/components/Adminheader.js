import React from 'react'
import ictlogo from '../assets/images/LOGO_ICTAK-White.png';
import '../assets/css/style.css'

const Adminheader = () => {
  return (  
    <div className='container-fluid sticky-top header-admin pt-4 bg-dark text-light font-link'>
      <div className='justify-content-between'>
      <div className='row w-100'>
        <div className='col-6 col-md-4 col-sm-2'>
          <img src={ictlogo} alt='ict logo and title' className='ictlogo' />
        </div>

        <div className='col-6 col-md-8 col-sm-10'>
            <h3>Administrator</h3>
        </div>     

      </div>
      </div>
    </div>
  )
}

export default Adminheader
