import React from 'react'
import '../assets/css/style.css'
import techathlon from '../assets/images/techathlon.png'
import icset from '../assets/images/icset.png'

const Events = () => {
  return (
    <div className='font-link'>
      <br/>
        <h1>Events</h1>
        <br/>
        <div class="row row-cols-1 row-cols-md-4 g-4">
        <div class="col">
          <div class="card">
            <img src={techathlon} class="card-img-top" alt="img"/>
            <div class="card-custom card-body">
              <h5 class="card-title">TECHATHLON 2022</h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src={icset} class="card-img-top" alt="img"/>
            <div class="card-custom card-body">
              <h5 class="card-title">ICSET 2022</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Events