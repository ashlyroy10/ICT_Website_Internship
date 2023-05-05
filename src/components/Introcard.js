import React from "react";
import coursedp from "../assets/images/coursepic.png";
import { Link } from "react-router-dom";

// import Testimonal2 from '../assets/image/Testimonal2nd.jpg'
// import Testimonal3 from '../assets/image/Testimonal3rd.jpg'
// import Testimonal4 from '../assets/image/Testimonal4th.jpg'

const Introcard = () => {
  return (
    <div class="row row-cols-1 row-cols-md-3 g-4 text-center">
      <div class="col">
        <div class="card1  border border-light-subtle rounded-3 border-4">
          <img src={coursedp} class="card-img-top" alt="..."/>
          <div class="card-body p-3">
            <Link to={'/courses/singlepage'}><h6 class="card-title">Python Programming</h6></Link>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card1  border border-light-subtle rounded-3 border-4">
          <img src={coursedp} class="card-img-top" alt="..."/>
          <div class="card-body p-3">
            <Link to={'/courses/singlepage'}><h6 class="card-title">Python Programming</h6></Link>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card1  border border-light-subtle rounded-3 border-4">
          <img src={coursedp} class="card-img-top" alt="..."/>
          <div class="card-body p-3">
            <Link to={'/courses/singlepage'}><h6 class="card-title">Python Programming</h6></Link>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card1  border border-light-subtle rounded-3 border-4">
          <img src={coursedp} class="card-img-top" alt="..."/>
          <div class="card-body p-3">
            <Link to={'/courses/singlepage'}><h6 class="card-title">Python Programming</h6></Link>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card1  border border-light-subtle rounded-3 border-4">
          <img src={coursedp} class="card-img-top" alt="..."/>
          <div class="card-body p-3">
            <Link to={'/courses/singlepage'}><h6 class="card-title">Python Programming</h6></Link>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card1  border border-light-subtle rounded-3 border-4">
          <img src={coursedp} class="card-img-top" alt="..."/>
          <div class="card-body p-3">
            <Link to={'/courses/singlepage'}><h6 class="card-title">Python Programming</h6></Link>
          </div>
        </div>
      </div>
     
  
    </div>
  );
};

export default Introcard;
