import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

import Admincourse from "../pages/Admincourse";
import Adminstaff from "../pages/Adminstaff";



import "../assets/css/adminstyle.css";
import hlogo from "../assets/images/hlogo.svg"

const Tempworkshop = () => {
  return (
    <div class="s-layout">
      {/* <!-- Sidebar --> */}
      <div class="s-layout__sidebar">
      
        <a class="s-sidebar__trigger"  href="#0">
          <button className="btn btn-light my-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>
        </a>

        <nav class="s-sidebar__nav">
          <ul>
            <li>
              <div>                
                <img src={hlogo} alt="logo" width="200px" className="logo m-2 p-2 bg-light" />
                <small><h4 className="admin-title m-2 p-2 bg-dark text-light">DASHBOARD</h4></small>
              </div>
            </li>

            
            {/* COURSE DETAILS nav */}
           <li>
              <a class="s-sidebar__nav-link" href="#0">
                <i className="nav-icon align-middle pt-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-book-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
                  </svg>
                </i>
                <em>Courses</em>
              </a>
            </li>

            {/* STAFF DETAILS nav */}
            <li>
              <a class="s-sidebar__nav-link" href="#1">
                <i class="fa fa-user"></i>
                <em>Staff</em>
              </a>
            </li>

            {/* TESTIMONIAL nav */}
            <li>
              <a class="s-sidebar__nav-link" href="#2">
                <i class="fa fa-camera"></i>
                <em>Testimonials</em>
              </a>
            </li>



            {/* SUBSCRIBER MAIL nav */}
            <li>
              <a class="s-sidebar__nav-link" href="#3">
                <i class="fa fa-camera"></i>
                <em>Subscribers</em>
              </a>
            </li>


            <li className="side-navitem">
                <button
                  className="logout-button btn btn-danger border-white px-5"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-box-arrow-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                      />
                      <path
                        fillRule="evenodd"
                        d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                      />
                    </svg>
                    <h5>Logout</h5>
                  </span>
                </button>
              </li>


          </ul>
        </nav>
      </div>

      {/* <!-- Content --> */}
      <main class="s-layout__content" id="mytabcontent">

            {/* COURSE DETAILS TARGET */}
            <div
              className="tab-pane fade show active"
              id="course-tab-pane"
              role="tabpanel"
              aria-labelledby="course-tab"
              tabIndex="0"
            >
              <Admincourse />
              {/* <Outlet /> */}
            </div>

            
      </main>

      {/* <div className='menu-toggle'>
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
        </main> */}
    </div>
  );
};

export default Tempworkshop;
