import React from 'react'
import coursedp from '../assets/images/coursepic.png'
import HeaderMain from './HeaderMain'
import { Link } from 'react-router-dom'
import Footer from './Footer'

const Detailedcards = () => {
  return (
    <div>
      <HeaderMain/>
      <div class="row row-cols-1 row-cols-md-4 g-9 m-5 p-4">
  <div class="col p-3">
    <div class="card1 h-100 border border-light-subtle rounded-3 border-4">
      <img src={coursedp} class="card-img-top" alt="..."/>
      <div class="card-body p-3">
      <Link to={'/courses/singlepage'}><h6 class="card-title">Python Programming</h6></Link>
      </div>
    </div>
  </div>
  <div class="col p-3">
    <div class="card1 h-100 border border-light-subtle rounded-3 border-4">
      <img src={coursedp} class="card-img-top" alt="..."/>
      <div class="card-body p-3">
      <Link to={'/courses/singlepage'}><h6 class="card-title">Python Programming</h6></Link>
      </div>
    </div>
  </div>
  <div class="col p-3">
    <div class="card1 h-100 border border-light-subtle rounded-3 border-4">
      <img src={coursedp} class="card-img-top" alt="..."/>
      <div class="card-body p-3">
      <Link to={'/courses/singlepage'}><h6 class="card-title">Python Programming</h6></Link>
      </div>
    </div>
  </div>
  <div class="col p-3">
    <div class="card1 h-100 border border-light-subtle rounded-3 border-4">
      <img src={coursedp} class="card-img-top" alt="..."/>
      <div class="card-body p-3">
      <Link to={'/courses/singlepage'}><h6 class="card-title">Python Programming</h6></Link>
      </div>
    </div>
  </div>
  <div class="col p-3">
    <div class="card1 h-100 border border-light-subtle rounded-3 border-4">
      <img src={coursedp} class="card-img-top" alt="..."/>
      <div class="card-body p-3">
      <Link to={'/courses/singlepage'}><h6 class="card-title">Python Programming</h6></Link>
      </div>
    </div>
  </div>
  <div class="col p-3">
    <div class="card1 h-100 border border-light-subtle rounded-3 border-4">
      <img src={coursedp} class="card-img-top" alt="..."/>
      <div class="card-body p-3">
      <Link to={'/courses/singlepage'}><h6 class="card-title">Python Programming</h6></Link>
      </div>
    </div>
  </div>
  
  
  
</div>
<Footer/>
    </div>
  )
}

export default Detailedcards
