import React from 'react'
import '../assets/css/style.css'
import Mridula from '../assets/images/Mridula.png'
import Nithya from '../assets/images/Nithya.png'
import Meera from '../assets/images/Meera.png'
import Remya from '../assets/images/Remya.png'

const Team = () => {
  return (
    <div className='font-link'>
      <br/>
      <div class="row row-cols-1 row-cols-md-4 g-4">
        <div class="col">
          <div class="card">
            <img src={Mridula} class="card-img-top" alt="img"/>
            <div class="card-custom card-body">
              <h5 class="card-title">Mridula Reghunath</h5>
              <p class="card-text">Senior Knowledge Officer</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src={Nithya} class="card-img-top" alt="img"/>
            <div class="card-custom card-body">
              <h5 class="card-title">Nithya Jose</h5>
              <p class="card-text">Asst. Manager - Project & Key Accounts</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src={Meera} class="card-img-top" alt="img"/>
            <div class="card-custom card-body">
              <h5 class="card-title">Meera Mathew</h5>
              <p class="card-text">Lead Knowledge Officer</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src={Remya} class="card-img-top" alt="img"/>
              <div class="card-custom card-body">
                <h5 class="card-title">Remya U.L.</h5>
                <p class="card-text">Senior Knowledge Officer</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  
  )
}

export default Team