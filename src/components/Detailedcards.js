import React from 'react'
import coursedp from '../assets/images/coursepic.png'
import HeaderMain from './HeaderMain'
import { Link } from 'react-router-dom'

const Detailedcards = () => {
  return (
    <div>
      <HeaderMain/>
      <div class="row row-cols-1 row-cols-md-4 g-9 m-5 p-4">
  <div class="col p-3">
    <div class="card1 h-100 border border-black">
      <Link to={'/courses/singlepage'}><img src={coursedp} class="card-img-top" alt="..."/></Link>
      <div class="card-body p-3">
        <h5 class="card-title">Python Programming</h5>
      </div>
    </div>
  </div>
  <div class="col p-3">
    <div class="card1 h-100 border border-black">
    <Link to={'/courses/singlepage'}><img src={coursedp} class="card-img-top" alt="..."/></Link>
      <div class="card-body p-3">
        <h5 class="card-title">Python Programming</h5>
      </div>
    </div>
  </div>
  <div class="col p-3">
    <div class="card1 h-100 border border-black">
    <Link to={'/courses/singlepage'}><img src={coursedp} class="card-img-top" alt="..."/></Link>
      <div class="card-body p-3">
        <h5 class="card-title">Python Programming</h5>
      </div>
    </div>
  </div>
  <div class="col p-3">
    <div class="card1 h-100 border border-black">
    <Link to={'/courses/singlepage'}><img src={coursedp} class="card-img-top" alt="..."/></Link>
      <div class="card-body p-3">
        <h5 class="card-title">Python Programming</h5>
      </div>
    </div>
  </div>
  <div class="col p-3">
    <div class="card1 h-100 border border-black">
    <Link to={'/courses/singlepage'}><img src={coursedp} class="card-img-top" alt="..."/></Link>
      <div class="card-body p-3">
        <h5 class="card-title">Python Programming</h5>
      </div>
    </div>
  </div>
  <div class="col p-3">
    <div class="card1 h-100 border border-black">
    <Link to={'/courses/singlepage'}><img src={coursedp} class="card-img-top" alt="..."/></Link>
      <div class="card-body p-3">
        <h5 class="card-title">Python Programming</h5>
      </div>
    </div>
  </div>
  <div class="col p-3">
    <div class="card1 h-100 border border-black">
    <Link to={'/courses/singlepage'}><img src={coursedp} class="card-img-top" alt="..."/></Link>
      <div class="card-body p-3">
        <h5 class="card-title">Python Programming</h5>
      </div>
    </div>
  </div>
  <div class="col p-3">
    <div class="card1 h-100 border border-black">
    <Link to={'/courses/singlepage'}><img src={coursedp} class="card-img-top" alt="..."/></Link>
      <div class="card-body p-3">
        <h5 class="card-title">Python Programming</h5>
      </div>
    </div>
  </div>
  <div class="col p-3">
    <div class="card1 h-100 border border-black">
    <Link to={'/courses/singlepage'}><img src={coursedp} class="card-img-top" alt="..."/></Link>
      <div class="card-body p-3">
        <h5 class="card-title">Python Programming</h5>
      </div>
    </div>
  </div>
  
  
  
</div>
    </div>
  )
}

export default Detailedcards
