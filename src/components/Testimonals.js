import React from 'react'
import Testimonal1 from '../assets/image/Testimonal1st.jpg'
import Testimonal2 from '../assets/image/Testimonal2nd.jpg'
import Testimonal3 from '../assets/image/Testimonal3rd.jpg'
import Testimonal4 from '../assets/image/Testimonal4th.jpg'

const Testimonals = () => {
  return (
    <div className='vh-100'>
      
    <div id="demo" class="carousel slide" data-ride="carousel">
<ul class="carousel-indicators">
  <li data-target="#demo" data-slide-to="0" class="active"></li>
  <li data-target="#demo" data-slide-to="1"></li>
  <li data-target="#demo" data-slide-to="2"></li>
  <li data-target="#demo" data-slide-to="3"></li>
</ul>
<div class="carousel-inner">
  <div class="carousel-item active">
    <img src={Testimonal1} alt="Testimonal1" width="1100" height="500"/>
  </div>
  <div class="carousel-item">
    <img src={Testimonal2} alt="Testimonal2" width="1100" height="500"/>
  </div>
  <div class="carousel-item">
    <img src={Testimonal3} alt="Testimonal3" width="1100" height="500"/>
  </div>
  <div class="carousel-item">
    <img src={Testimonal4} alt="Testimonal4" width="1100" height="500"/>
  </div>
</div>
<a class="carousel-control-prev" href="#demo" data-slide="prev">
  <span class="carousel-control-prev-icon"></span>
</a>
<a class="carousel-control-next" href="#demo" data-slide="next">
  <span class="carousel-control-next-icon"></span>
</a>
</div>

  </div>

  )
}

export default Testimonals
