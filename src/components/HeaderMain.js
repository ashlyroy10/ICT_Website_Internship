import React from 'react'
import '../assets/css/style.css'
import { Link } from 'react-router-dom'
import hlogo from '../assets/images/hlogo.svg'

const HeaderMain = () => {
  return (
    <div className='header-main container-fluid p-4 sticky-top font-link'>
        <Link to ={'/'}><img src={hlogo} className='rounded float-start ' alt='Logo'/></Link>
        
        <div className='navlinks text-end fw-bold'>
          <div>
          <Link to={'/adminlogin'}>
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-door-open" viewBox="0 0 16 16">
            <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z"/>
            <path d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117zM11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5zM4 1.934V15h6V1.077l-6 .857z"/>
          </svg>
          </Link>
          </div>
          <Link to={'/what_we_do/trainings'} className='navlink link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover' >What We Do</Link>
          <Link to={'/who_we_are/about_us'} className='navlink link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover' >Who We Are </Link>
          <Link to={'/courses'}><button className='coursebutton btn btn-primary fw-bold'>Courses</button></Link>
        </div>
    </div>
  )
}

export default HeaderMain