import React from 'react'
import coursedp from '../assets/image/coursepic.png'
// import Testimonal2 from '../assets/image/Testimonal2nd.jpg'
// import Testimonal3 from '../assets/image/Testimonal3rd.jpg'
// import Testimonal4 from '../assets/image/Testimonal4th.jpg'


const Introcard = () => {
  return (
    
    
    <div class="row row-cols-1 row-cols-md-3 g-4">
        
  <div class="col">
    <div class="card h-100">
      <img src={coursedp} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
     {/* </img> <div class="card-footer"> */}
        {/* <small class="text-body-secondary">Last updated 3 mins ago</small> */}
      {/* </div> */}
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={coursedp} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      {/* <div class="card-footer"> */}
        {/* <small class="text-body-secondary">Last updated 3 mins ago</small> */}
      {/* </div> */}
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={coursedp} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      {/* <div class="card-footer"> */}
        {/* <small class="text-body-secondary">Last updated 3 mins ago</small> */}
      {/* </div> */}
    </div>
  </div>
</div>

  )
}

export default Introcard
