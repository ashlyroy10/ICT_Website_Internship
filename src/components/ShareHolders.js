import React from 'react'
import '../assets/css/style.css'
import goi from '../assets/images/goi.png'
import gok from '../assets/images/gok.png'
import tcs from '../assets/images/tcs.png'
import sei from '../assets/images/sei.png'
import ibs from '../assets/images/ibs.png'
import quest from '../assets/images/quest.png'
import ust from '../assets/images/ust.png'


const ShareHolders = () => {
  return (
    <div className='font-link'>
        <br/><br/>
        <div className='share'>
            <h1>The Shareholders</h1>
            <p>ICT Academy of Kerala is a unique organisation created by Govt. of Kerala in partnership with the industry as a not-for-profit company. The company intends to bridge the employability gap of the youths in Kerala and enable them to be gainfully employed. The shareholders of ICTAK are the key-value partners with an intent to contribute to the company's cause and support its vision by providing guidance.</p>
        </div>
        <div className='share'>
            <div className='row'>
                <div className='col-3'><img src={gok} class="rounded float-start" alt="img"/></div>
                <div className='col-9 pt-3'>
                    <h2>Govt. of India</h2>
                    <p>The Ministry of Electronics and IT (MeITY) conceived the ICT Academy of Kerala Project to bridge the skills gap between the industry and academia. Govt. of India allocated an initial grant-in-aid to support this, and the ICT Academy of Kerala initiated a train-the-teachers programme. The mass training target, reaching out to all the students in Kerala, was achieved through this. 
                        Even though the mission succeeded, all the assets created through the aid programme were allowed to retain.</p>
                </div>
            </div>
        </div>
        <div className='share'>
            <div className='row'>
                <div className='col-9 pt-3'>
                    <h2>Govt. of Kerala</h2>
                    <p>Govt. of Kerala is the largest and most critical shareholder of the ICT Academy of Kerala. The state government earmarked the initial shares and attracted the industry members to partner with the organisation, thus playing a pivotal role in its formation. The government also provides the overarching coverage for promoting the ICT Academy of Kerala statewide. The IT Additional Chief Secretary and the Finance Additional Secretary represent the Govt. of Kerala on the Board of Directors. 
                        The Government of Kerala appoints the Chairman of the Board of Directors, who will be a business leader with an excellent reputation in the industry.</p>
                </div>
                <div className='col-3'><img src={goi} class="rounded float-end" alt="img"/></div>
            </div>
        </div>
        <div className='share'>
            <div className='row'>
                <div className='col-3'><img src={tcs} class="rounded float-start" alt="img"/></div>
                <div className='col-9 pt-3'>
                    <h2>Tata Consultancy Services</h2>
                    <p>Tata Consultancy Services Ltd. (TCS) is India’s largest and oldest software and digital services company. Spread across 17 countries and 55 locations globally, TCS is also the country’s foremost talent onboarding organisation. TCS Ltd is the second-largest shareholder of ICT Academy and plays a crucial role in providing the directions for the Company. 
                        The Kerala regional head of TCS represents the Company on the Board of TCS.</p>
                </div>
            </div>
        </div>
        <div className='share'>
            <div className='row'>
                <div className='col-9 pt-3'>
                    <h2>Sowparnika Education Infrastructure</h2>
                    <p>Sowparnika Education Infrastructure is a charitable trust run by one of India’s valuable IT business leaders, Mr. S.D. Shibulal. The SEI trust, through various scholarship schemes, provides affordable and cost-free education to the needy. Students selected at a particular age group and above get support for their complete education (up to the post-graduation stage). Being the co-founder of Infosys and the first Chairman of the ICT Academy of Kerala, Mr. Shibulal and the foundation has been instrumental in setting up the company in motion.
                        On behalf of the trust, the co-founder and the CEO of Axilor Ventures is part of the Board of Directors of ICT Academy of Kerala.</p>
                </div>
                <div className='col-3'><img src={sei} class="rounded float-end" alt="img"/></div>
            </div>
        </div>
        <div className='share'>
            <div className='row'>
                <div className='col-3'><img src={ust} class="rounded float-start" alt="img"/></div>
                <div className='col-9 pt-3'>
                    <h2>UST Global</h2>
                    <p>UST is Kerala's first unicorn, working in the field of Information Technology Services. UST provides digital services and solutions in various cutting-edge technologies and business domains. They are market leaders in multiple services including services in Government.
                        UST is a key stakeholder for ICT Academy and the Chief Operating Officer of the company is a part of the Board of Directors of ICTAK.</p>
                </div>
            </div>
        </div>
        <div className='share'>
            <div className='row'>
                <div className='col-9 pt-3'>
                    <h2>IBS Software</h2>
                     <p>IBS Software is a leading airline management solutions provider and Kerala’s very own solutions and product company. Its mission is to transform how travel companies operate in a digital world by delivering next-generation products to accelerate growth, drive efficiency, and create differentiated customer experiences.
                        IBS Software is a prime shareholder of ICTAK and is represented by the Executive Chairman on the Board of Directors.</p>
                </div>
                <div className='col-3'><img src={ibs} class="rounded float-end" alt="img"/></div>
            </div>
        </div>
        <div className='share'>
            <div className='row'>
                <div className='col-3'><img src={quest} class="rounded float-start" alt="img"/></div>
                <div className='col-9 pt-3'>
                    <h2>QuEST Global</h2>
                    <p>QuEST is a global product engineering and lifecycle services company with over 25 years of industry presence. Being at the forefront of the convergence of mechanical, electronics, software, and digital engineering innovations, QuEST partners with its customers to solve challenges through the entire product lifecycle (Engineering Services / ER&D Services / PES / Outsourced Product Development Services).
                        QuEST Global plays a vital role in ICTAK activities by supporting it in training curriculum design, expert sessions, industry interactions, and so on. QuEST Global gets its representation through the Senior Vice President on the Board of Directors.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShareHolders