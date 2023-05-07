import React from "react";
import "../assets/css/style.css";
import { Link } from "react-router-dom";
import hlogo from "../assets/images/hlogo.svg";

const HeaderMain = () => {
  return (
    <div className="header-main w-100">
      {/* Link to admin Login */}
      <div className="navlinks text-end fw-bold">
        {/* <Link to={"/adminlogin"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            fill="currentColor"
            class="bi bi-door-open"
            viewBox="0 0 16 16"
          >
            <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z" />
            <path d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117zM11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5zM4 1.934V15h6V1.077l-6 .857z" />
          </svg>
        </Link> */}
      </div>


      {/* HEADER and Navbar */}
      <nav class="navbar navbar-expand-lg sticky-top">
        <div class="container-fluid">
          <Link to={"/"}>
            <img src={hlogo} className="rounded float-start w-25" alt="Logo" />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link
                  to={"/what_we_do/trainings"}
                  className="navlink link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                >
                  <button className="btn btn-light rounded-pill">What We Do</button>
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  to={"/who_we_are/about_us"}
                  className="navlink link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                >
                  <button className="btn btn-light rounded-pill">Who We Are</button>
                </Link>
              </li>
              <li class="nav-item">
                <Link to={"/courses"}>
                  <button className="coursebutton btn fw-bold">
                    Courses
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HeaderMain;
