import React from 'react'
import '../assets/css/style.css'
import IT from '../assets/images/IT.png'
import GT from '../assets/images/GT.png'
import CT from '../assets/images/CT.png'

const Trainings = () => {
  return (
    <div className='font-link'>
      <br/><br/>
      <div className='trainings'>
        <div className='row'>
          <div className='col-md-3'><img src={IT} class="rounded float-start img-fluid" alt="img"/></div>
          <div className='col-md-9 pt-3'>
            <h1>Institutional Training</h1>
            <p>ICT Academy of Kerala collaborates with educational institutions across the state of Kerala to improve the employability skills of both faculty and students. 
                The educational institutions include Engineering, Arts & Science and Polytechnics.
                Apart from training programs, ICTAK provides customized solutions to improve the quality of the college education ecosystem of Kerala.</p>
          </div>
        </div>
      </div>
      <div className='trainings'>
        <div className='row'>
          <div className='col-md-9 pt-3'>
            <h1>Graduate Training</h1>
            <p>ICT Academy of Kerala provides Industry-focused ICT skill development programs for students. Project assignment related to capability building is also provided.</p>
          </div>
          <div className='col-md-3'><img src={GT} class="rounded float-end img-fluid" alt="img"/></div>
        </div>
      </div>
      <div className='trainings'>
        <div className='row'>
          <div className='col-md-3'><img src={CT} class="rounded float-start img-fluid" alt="img"/></div>
          <div className='col-md-9 pt-3'>
            <h1>Corporate Training</h1>
            <p>ICT Academy of Kerala provides world class training to the corporates which enables them to upskill their employees, reduce the cost and gain a competitive edge in the industry. 
               We create and conduct customized corporate training programs after understanding the needs of the companies.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trainings