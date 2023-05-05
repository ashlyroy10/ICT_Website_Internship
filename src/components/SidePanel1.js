import React from 'react'
import '../assets/css/style.css'
import { Link, Outlet } from 'react-router-dom'

const SidePanel1 = () => {
  return (
    <div>
      <div className='container-fluid d-flex justify-content-evenly'> 
        <div className='row'>
          <div className='sidepane col-lg-2 col-md-2 col-sm-2 col-12 vh-100 sticky-lg-top'>
            <ul className='nav nav-tabs my-2' id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
              <Link to={'/what_we_do/trainings'}><button className="sidebtn fw-bold btn nav-link active" id="train-tab" data-bs-toggle="tab" data-bs-target="#train-tab-pane" type="button" role="tab" aria-controls="train-tab-pane" aria-selected="true">Trainings</button></Link>
              </li>
              <li className="nav-item" role="presentation">
              <Link to={'/what_we_do/government_program'}><button className="sidebtn fw-bold btn nav-link" id="govern-tab" data-bs-toggle="tab" data-bs-target="#govern-tab-pane" type="button" role="tab" aria-controls="govern-tab-pane" aria-selected="false">Govt. Program</button></Link>
              </li>
              <li className="nav-item" role="presentation">
              <Link to={'/what_we_do/partner_program'}><button className="sidebtn fw-bold btn nav-link" id="partner-tab" data-bs-toggle="tab" data-bs-target="#partner-tab-pane" type="button" role="tab" aria-controls="partner-tab-pane" aria-selected="false">Partner Program</button></Link>
              </li>
              <li className="nav-item" role="presentation">
              <Link to={'/what_we_do/operating_units'}><button className="sidebtn fw-bold btn nav-link" id="ou-tab" data-bs-toggle="tab" data-bs-target="#ou-tab-pane" type="button" role="tab" aria-controls="ou-tab-pane" aria-selected="false">Operating Unit</button></Link>
              </li>
              <li className="nav-item" role="presentation">
              <Link to={'/what_we_do/projects'}><button className="sidebtn fw-bold btn nav-link" id="project-tab" data-bs-toggle="tab" data-bs-target="#project-tab-pane" type="button" role="tab" aria-controls="project-tab-pane" aria-selected="false">Our Projects</button></Link>
              </li>
              <li className="nav-item" role="presentation">
              <Link to={'/what_we_do/events'}><button className="sidebtn fw-bold btn nav-link" id="event-tab" data-bs-toggle="tab" data-bs-target="#event-tab-pane" type="button" role="tab" aria-controls="event-tab-pane" aria-selected="false">Events</button></Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-10 col-md-10 col-sm-10 col-0">
            <div className="tab-content flex-grow-1" id="myTabContent">
              <div className="tab-pane fade show active" id="train-tab-pane" role="tabpanel" aria-labelledby="train-tab" tabindex="0"><Outlet/></div>
              <div className="tab-pane fade" id="govern-tab-pane" role="tabpanel" aria-labelledby="govern-tab" tabindex="0"><Outlet/></div>
              <div className="tab-pane fade" id="partner-tab-pane" role="tabpanel" aria-labelledby="partner-tab" tabindex="0"><Outlet/></div>
              <div className="tab-pane fade" id="ou-tab-pane" role="tabpanel" aria-labelledby="ou-tab" tabindex="0"><Outlet/></div>
              <div className="tab-pane fade" id="project-tab-pane" role="tabpanel" aria-labelledby="project-tab" tabindex="0"><Outlet/></div>
              <div className="tab-pane fade" id="event-tab-pane" role="tabpanel" aria-labelledby="event-tab" tabindex="0"><Outlet/></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SidePanel1