import React from 'react'
import '../assets/css/style.css'
import KKEM from '../assets/images/KKEM.png'
import YIP from '../assets/images/YIP.png'
import SDPK from '../assets/images/SDPK.png'
import NST from '../assets/images/NST.png'
import ABCD from '../assets/images/ABCD.png'

const Project = () => {
  return (
    <div className='project font-link'>
      <br/><br/>
      <h1> Our Projects</h1>
      <p>
        ICT Academy of Kerala is involved with a lot of projects aiming to allow the youth to upskill their talents.
         These projects involve both government and other private initiatives.</p>
      <br/>
      <div class=" grid gap-3 row row-cols-1 row-cols-md-2 g-4 float-center">
      <div class="card m-4">
        <div class="row g-0">
          <div class="col-md-4">
            <img src={KKEM} class="img-fluid rounded-start" alt="img"/>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">KKEM</h5>
              <p class="card-text">Kerala Knowledge Economy Mission</p>
            </div>
          </div>
        </div>
      </div>
      <div class="card m-4">
        <div class="row g-0">
          <div class="col-md-4">
            <img src={YIP} class="img-fluid rounded-start" alt="img"/>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">YIP</h5>
              <p class="card-text">Young Innovators Programme</p>
            </div>
          </div>
        </div>
      </div>
      <div class="card m-4">
        <div class="row g-0">
          <div class="col-md-4">
            <img src={SDPK} class="img-fluid rounded-start" alt="img"/>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">SDPK</h5>
              <p class="card-text">Skill Delivery Platform Kerala</p>
            </div>
          </div>
        </div>
      </div>
      <div class="card m-4">
        <div class="row g-0">
          <div class="col-md-4">
            <img src={NST} class="img-fluid rounded-start" alt="img"/>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">NST</h5>
              <p class="card-text">NORKA Skill Training</p>
            </div>
          </div>
        </div>
      </div>
      <div class="card m-4">
        <div class="row g-0">
          <div class="col-md-4">
            <img src={ABCD} class="img-fluid rounded-start" alt="img"/>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">ABCD</h5>
              <p class="card-text">Accelerated Blockchain Development Programme</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Project