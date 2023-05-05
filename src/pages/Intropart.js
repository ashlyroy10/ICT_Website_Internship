import React from "react";
import Intropic from "../assets/images/Ictintro.png";
const Intropart = () => {
  return (
    <div>
      <div class="nice">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-6 col-md-12 p1">
        <br/>   
        <br/> 
          <h2>Build your Dream Career with ICTAK</h2>
          <h5>ICT Academy of Kerala (ICTAK) is a social enterprise officially launched on the 24th of June, 2014. The organization had a humble beginning providing skill training programs to selected academic institutions. Over the years, ICTAK has grown to a prime service provider of all ICT and innovation-related training and capacity-building programs in the state.</h5>
            
        
        <button type = "button" class = "btn btn-danger btn-lg fw-small">Know More</button>
            

        </div>
        <div class="col-lg-6 col-md-0 p2">
            <br/>
        <img src={Intropic}  alt="intropic of ICT" width="550" height="400"/>
        {/* <img src={Intropic}  alt="intropic of ICT" width="500" height="350" class="animationpic"/> */}
        
        </div>
      </div>
    </div>
</div>
    </div>
  )
}

export default Intropart;
