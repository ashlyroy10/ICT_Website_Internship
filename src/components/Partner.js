import React from 'react'
import '../assets/css/style.css'
import PP from '../assets/images/PP.png'

const Partner = () => {
  return (
    <div className='font-link'>
      <br/><br/>
      <div className='partner'>
        <div className='row'>
          <div className='col-md-3'><img src={PP} class="rounded float-start img-fluid" alt="img"/></div>
          <div className='col-md-9 pt-3'>
            <h1>Partner Programme</h1>
            <p>We in association with worldwide MNC companies and other stakeholders conduct various industry as well as academic relevant training programmes for students, faculties and working professionals.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Partner