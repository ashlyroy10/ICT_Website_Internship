import React from 'react'
import '../assets/css/style.css'
import AOU from '../assets/images/AOU.png'
import COU from '../assets/images/COU.png'
import GOU from '../assets/images/GOU.png'
import ITS from '../assets/images/ITS.png'
import KO from '../assets/images/KO.png'
import ROU from '../assets/images/ROU.png'
import CF from '../assets/images/CF.png'

const OperatingUnit = () => {
  return (
    <div className='font-link'>
        <br/><br/>
        <div className='ou'>
            <h1>Operating Units</h1>
            <p>The ICT Academy of Kerala, as a team works under different Operations Units in order to effectively achieve the organisation's vision and mission. The OUs of ICTAK include the Academic Operations, Corporate Operations, Government Operations, IT Solutions, Knowledge Office, Retail Operations and Corporate Functions.</p>
        </div>
        <div className='ou'>
            <div className='row'>
                <div className='col-3'><img src={AOU} class="rounded float-start" alt="img"/></div>
                <div className='col-9 pt-3'>
                    <h2>Academic Operations</h2>
                    <p>Connecting the academic institutions across Kerala and neighboring states, the Academic Operations Unit (AOU) of ICT Academy of Kerala is committed to the quality improvement in education and in imparting novel technical skills for employability and entrepreneurship for students.
                        The team, with their continual interactions, research, design, and execution of various skill development programmes for faculties and students, accelerates our mission - “Bridging the Skill Gap”.</p>
                </div>
            </div>
        </div>
        <div className='ou'>
            <div className='row'>
                <div className='col-9 pt-3'>
                    <h2>Corporate Operations</h2>
                    <p>ICT Academy of Kerala envisions an empowered job force from the multifaceted skilling programmes we deliver. Being an important beneficiary and partner, corporate stakeholders have a key role from sponsorship, mentoring and providing opportunities, like internship and employment to the candidates.
                         The Corporate Operating Unit (COU) of ICTAK manages the relationship with the partners and corporate stakeholders.</p>
                </div>
                <div className='col-3'><img src={COU} class="rounded float-end" alt="img"/></div>
            </div>
        </div>
        <div className='ou'>
            <div className='row'>
                <div className='col-3'><img src={GOU} class="rounded float-start" alt="img"/></div>
                <div className='col-9 pt-3'>
                    <h2>Government Operations</h2>
                    <p>The Government Operations Unit (GOU) of ICT Academy of Kerala deals with government-initiated projects. With strong academic and industrial connections across the country, the team can serve on multiple fronts and has the flexibility to meet the changing needs in the public sector. The unit focuses on ICT capability building for different projects initiated by the government departments.
                        The GOU, as a whole, works in a self-driven, dynamic, and goal-oriented manner focusing on socially relevant government projects.</p>
                </div>
            </div>
        </div>
        <div className='ou'>
            <div className='row'>
                <div className='col-9 pt-3'>
                    <h2>IT Solutions</h2>
                    <p>What’s modern and inventive nowadays will be considered fundamental tomorrow. That’s why brands have to contribute to ICT enabled solutions to engage clients. 
                        The team of UI/UX experts, full-stack developers, RPA experts and data analysts at ICTAK Solutions are here to help you rejuvenate your brand’s digital presence.</p>
                </div>
                <div className='col-3'><img src={ITS} class="rounded float-end" alt="img"/></div>
            </div>
        </div>
        <div className='ou'>
            <div className='row'>
                <div className='col-3'><img src={KO} class="rounded float-start" alt="img"/></div>
                <div className='col-9 pt-3'>
                    <h2>Knowledge Office</h2>
                    <p>The Educator's team, which delivers competency-based curriculum and industry relevant content for various skill-training programs of ICT Academy of Kerala (ICTAK).The team is in charge of curriculum design ,technical content creation and course delivery.Knowledge office work in collaboration with other operating units, as a delivery team in areas of skill development programmes and projects.
                        The team have the support of Industry and Technology partners for creating industry relevant curriculum and contents.</p>
                </div>
            </div>
        </div>
        <div className='ou'>
            <div className='row'>
                <div className='col-9 pt-3'>
                    <h2>Retail Operations</h2>
                     <p>Retail Business and operation unit is a front-end training wing of ICTAK to accompany the mission of skilling the youths of Kerala in IR4.0 technologies to make the state a desired talent pool for the industries. 
                        We empower the effort to build a job-ready workforce for the IT Industry by researching, organizing and executing skill development programs for the unemployed and underemployed graduates. 
                        Our focus is on skilling, upskilling and reskilling with affordable fees and supporting them to realize their career dreams.</p>
                </div>
                <div className='col-3'><img src={ROU} class="rounded float-end" alt="img"/></div>
            </div>
        </div>
        <div className='ou'>
            <div className='row'>
                <div className='col-3'><img src={CF} class="rounded float-start" alt="img"/></div>
                <div className='col-9 pt-3'>
                    <h2>Corporate Functions</h2>
                    <p>The Corporate Functions of the ICT Academy of Kerala include Administration, Finance, Human resources, Legal, and Internal IT. 
                        The unit plays a significant role in facilitating seamless integration between other operations units of ICTAK for maximum productivity.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OperatingUnit