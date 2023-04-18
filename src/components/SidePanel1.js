import React from 'react'
import '../assets/css/style.css'
import Trainings from './Trainings'
import Government from './Government'
import Partner from './Partner'
import Project from './Project'
import Events from './Events'

const SidePanel1 = () => {
  return (
    <div>
      <div className='container-fluid'> 
        <div className='row'>
          <div className='sidepane col-2 vh-100 sticky-lg-top'>
            <ul className='nav nav-tabs flex-column my-2' id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="sidebtn fw-bold btn nav-link active" id="train-tab" data-bs-toggle="tab" data-bs-target="#train-tab-pane" type="button" role="tab" aria-controls="train-tab-pane" aria-selected="true">Trainings</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="sidebtn fw-bold btn nav-link" id="govern-tab" data-bs-toggle="tab" data-bs-target="#govern-tab-pane" type="button" role="tab" aria-controls="govern-tab-pane" aria-selected="false">Govt. Program</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="sidebtn fw-bold btn nav-link" id="partner-tab" data-bs-toggle="tab" data-bs-target="#partner-tab-pane" type="button" role="tab" aria-controls="partner-tab-pane" aria-selected="false">Partner Program</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="sidebtn fw-bold btn nav-link" id="project-tab" data-bs-toggle="tab" data-bs-target="#project-tab-pane" type="button" role="tab" aria-controls="project-tab-pane" aria-selected="false">Our Projects</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="sidebtn fw-bold btn nav-link" id="event-tab" data-bs-toggle="tab" data-bs-target="#event-tab-pane" type="button" role="tab" aria-controls="event-tab-pane" aria-selected="false">Events</button>
              </li>
            </ul>
          </div>
          <div className="col-10">
            <div className="tab-content flex-grow-1" id="myTabContent">
              <div className="tab-pane fade show active" id="train-tab-pane" role="tabpanel" aria-labelledby="train-tab" tabindex="0"><Trainings/></div>
              <div className="tab-pane fade" id="govern-tab-pane" role="tabpanel" aria-labelledby="govern-tab" tabindex="0"><Government/></div>
              <div className="tab-pane fade" id="partner-tab-pane" role="tabpanel" aria-labelledby="partner-tab" tabindex="0"><Partner/></div>
              <div className="tab-pane fade" id="project-tab-pane" role="tabpanel" aria-labelledby="project-tab" tabindex="0"><Project/></div>
              <div className="tab-pane fade" id="event-tab-pane" role="tabpanel" aria-labelledby="event-tab" tabindex="0"><Events/></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SidePanel1