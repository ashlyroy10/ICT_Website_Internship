import React from 'react'
import '../assets/css/style.css'
import AboutUs from './AboutUs'
import ShareHolders from './ShareHolders'
import Leaders from './Leaders'
import Team from './Team'


const SidePanel1 = () => {
  return (
    <div>
      <div className='container-fluid d-flex'> 
        <div className='row'>
          <div className='sidepane col-2 vh-100 sticky-lg-top'>
            <ul className='nav nav-tabs my-2' id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="sidebtn fw-bold btn nav-link active" id="about-tab" data-bs-toggle="tab" data-bs-target="#about-tab-pane" type="button" role="tab" aria-controls="about-tab-pane" aria-selected="true">About Us</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="sidebtn fw-bold btn nav-link" id="share-tab" data-bs-toggle="tab" data-bs-target="#share-tab-pane" type="button" role="tab" aria-controls="share-tab-pane" aria-selected="false">Share Holders</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="sidebtn fw-bold btn nav-link" id="leaders-tab" data-bs-toggle="tab" data-bs-target="#leaders-tab-pane" type="button" role="tab" aria-controls="leader-tab-pane" aria-selected="false">Our Leaders</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="sidebtn fw-bold btn nav-link" id="team-tab" data-bs-toggle="tab" data-bs-target="#team-tab-pane" type="button" role="tab" aria-controls="team-tab-pane" aria-selected="false"> Our Team</button>
              </li>
            </ul>
          </div>
          
          <div className="col-10">
            <div className="tab-content flex-grow-1" id="myTabContent">
              <div className="tab-pane fade show active" id="about-tab-pane" role="tabpanel" aria-labelledby="about-tab" tabindex="0"><AboutUs/></div>
              <div className="tab-pane fade" id="share-tab-pane" role="tabpanel" aria-labelledby="share-tab" tabindex="0"><ShareHolders/></div>
              <div className="tab-pane fade" id="leaders-tab-pane" role="tabpanel" aria-labelledby="leaders-tab" tabindex="0"><Leaders/></div>
              <div className="tab-pane fade" id="team-tab-pane" role="tabpanel" aria-labelledby="team-tab" tabindex="0"><Team/></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SidePanel1