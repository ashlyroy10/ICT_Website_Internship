import React from 'react'
import '../assets/css/style.css'
import chairman from '../assets/images/chairman.png'
import ceo from '../assets/images/ceo.png'

const Leaders = () => {
  return (
    <div className='font-link'>
      <br/><br/>
      <div className='leaders d-flex'>
        <div className='row'>
          <div className='col-3 px-2'><img src={chairman} class="rounded float-start" alt="img"/></div>
          <div className='info-box col-9 pt-3 px-3'>
            <h2>Meet our Chairman</h2>
            <p>"The ICT Academy of Kerala has emerged as a strategic partner for the industry, academia, and government in bridging the skills gap in the field of Information Communication Technology. Over the years, ICT Academy has successfully supported the industry and academia in talent needs and skills supply and has touched youths and professionals alike in fulfilling their career aspirations. We will continue to invest in building capabilities in the latest technology and business domains to help our beneficiaries. 
                  We shall work with the Government of Kerala in its mission for talent development and employment."</p>
            <p className='text-end fw-bold'>- Tony Thomas</p>
          </div>
        </div>
      </div>
      <br/><br/> <br/><br/>
      <div className='leaders'>
        <div className='row'>
          <div className='col-9 pt-3'>
            <h2>Meet our CEO</h2>
            <p>"The ICT Academy of Kerala has been a leader in providing digital technology skills to the youths in the state. With our portfolio of programs expanding into digital infrastructure, enterprise systems, and workforce enablement areas, we believe we are inching toward our vision of being the partner of choice in the ICT domain. 
              We are a professional team who live our passion for making a positive impact on the career aspirations of the youths and the talent requirements of the Industry."</p>
            <p className='text-end fw-bold'>- Santhosh C Kurup</p>
          </div>
          <div className='col-3'><img src={ceo} class="rounded float-end" alt="img"/></div>
        </div>
      </div>
    </div>
  )
}

export default Leaders