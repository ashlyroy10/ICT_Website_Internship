import React from 'react'

const Tempworkshop = () => {

  return (
    <div className='app'>


        <div className='menu-toggle'>
            <div className='hamburger'>
                <span></span>
            </div>
        </div>

        <aside className='admin-side-bar'>
            <h4>Admin Dashboard</h4>

            <nav className='admin-menu'>
                <a href='#' className='menu-item is-active'>Courses</a>
                <a href='#' className='menu-item'>Staff</a>
                <a href='#' className='menu-item'>Testimonial</a>
            </nav>

        </aside>

        <main className='admin-content'>

            <h1>ADMIN STUFF HERE</h1>
        </main>

    </div>
  )
}

export default Tempworkshop
