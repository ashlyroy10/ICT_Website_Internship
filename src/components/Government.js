import React from 'react'
import '../assets/css/style.css'
import GCBP from '../assets/images/GCBP.png'

const Government = () => {
  return (
    <div className='font-link'>
      <br/><br/>
      <div className='govern'>
        <div className='row'>
          <div className='col-3'><img src={GCBP} class="rounded float-start" alt="img"/></div>
          <div className='col-9 pt-3'>
            <h1>Government Capacity Building Programme</h1>
            <p>ICT Academy has partnered with KSITM for a capability building programme for Govt. 
              Employees and Akshaya Entrepreneurs and with ASAP in the IT/ITeS skill sector for the last four years (since 2014) and have trained 3000+ students (100+ batches) in NSDC (NSQF aligned) certificate courses.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Government