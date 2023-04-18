import React from 'react'
import '../assets/css/style.css'
import { Link } from 'react-router-dom'
import hlogo from '../assets/images/hlogo.svg'

const HeaderMain = () => {
  return (
    <div className='header-main container-fluid p-4 sticky-top font-link'>
        <Link to ={'/'}><img src={hlogo} className='rounded float-start ' alt='Logo'/></Link>
        <div className='navlinks text-end fw-bold'>
          <Link to={'/what_we_do'} className='navlink link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover' >What We Do</Link>
          <Link to={'/who_we_are'} className='navlink link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover' >Who We Are </Link>
          <button className='coursebutton btn btn-primary fw-bold'>Courses</button>
        </div>
    </div>
  )
}

export default HeaderMain