import React, { useEffect, useState } from "react";
import "../assets/css/style.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Adminheader from "../components/Adminheader";

const Admindashboard = () => {
  const [authenticated, setauthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    console.log("loggedInUser:"+loggedInUser)
    if (loggedInUser === "true") {
      setauthenticated(loggedInUser);
    }
    else {
      navigate("/adminlogin");
    }
  }, [navigate]);

  
 

function clearLocalStorage() {
  // Clear local storage
  localStorage.clear();
}

  //FUNCTION LOGOUT
  const logout = () => {
    setauthenticated(false);
    clearLocalStorage();
    navigate("/adminlogin");
  };

  if (authenticated === false) {
    // Redirect to the admin login page
    console.log("You are not Logged in")
    navigate('/adminlogin');

  } else {
    console.log("You are Logged in")
    console.log("Dashboard --- authenticated in if condition: "+authenticated)
    return (
      <div>
        <div>
          <Adminheader />
        </div>
        
        <div className="side-menu-toggle">
          <div className="hamburger">
            <span></span>
          </div>
        </div>

        {/* Sidepane starts here */}
        <div className="dash-body d-flex justify-content-between font-link">
          <div className="side-pane col-lg-2 sticky-lg-top">
            
            <ul className="nav nav-tabs" id="myTab" role="tablist">

              {/* Course Details */}
              <li className="side-navitem nav-item w-auto" role="presentation">
                <span className="d-flex justify-content-evenly pt-2 w-auto">
                  <Link to={"/admindashboard/course_details"}>
                    <button
                      className="side-button nav-link active"
                      id="course-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#course-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="course-tab-pane"
                      aria-selected="true"
                    >
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
                      <h5>Course Details</h5>
                    </button>
                  </Link>
                </span>
              </li>

              {/* Staff Details */}
              <li className="side-navitem nav-item" role="presentation">
                <span className="d-flex justify-content-evenly pt-2">
                  <Link to={"/admindashboard/staff_details"}>
                    <button
                      className="side-button nav-link"
                      id="staff-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#staff-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="staff-tab-pane"
                      aria-selected="true"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-people-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                      </svg>
                      <h5>Staff Details</h5>
                    </button>
                  </Link>
                </span>
              </li>

              {/* Testimonials */}
              <li className="side-navitem nav-item" role="presentation">
                <span className="d-flex justify-content-evenly pt-2">
                  <Link to={"/admindashboard/testimonials"}>
                    <button
                      className="side-button nav-link"
                      id="testimonial-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#testimonial-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="testimonial-tab-pane"
                      aria-selected="true"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-hand-thumbs-up-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
                      </svg>
                      <h5>Testimonials</h5>
                    </button>
                  </Link>
                </span>
              </li>

              {/* Sub Emails */}
              <li className="side-navitem nav-item" role="presentation">
                <span className="d-flex justify-content-evenly pt-2">
                  <Link to={"/admindashboard/subscriberemail"}>
                    <button
                      className="side-button nav-link"
                      id="testimonial-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#testimonial-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="testimonial-tab-pane"
                      aria-selected="true"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-envelope-open-heart-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8.941.435a2 2 0 0 0-1.882 0l-6 3.2A2 2 0 0 0 0 5.4v.313l4.222 2.475c.024-.058.05-.114.08-.17.665-1.3 2.362-1.917 3.698-1.25 1.336-.667 3.033-.05 3.699 1.25a3.3 3.3 0 0 1 .08.17L16 5.713V5.4a2 2 0 0 0-1.059-1.765l-6-3.2ZM0 6.873l4 2.344c-.012.542.124 1.117.416 1.694l.004.006L0 13.372v-6.5Zm.059 7.611 4.9-2.723c.563.73 1.383 1.467 2.49 2.198l.551.365.551-.365c1.107-.73 1.927-1.467 2.49-2.198l4.9 2.723A2 2 0 0 1 14 16H2a2 2 0 0 1-1.941-1.516ZM16 13.372l-4.42-2.455.004-.006c.292-.577.428-1.152.415-1.694L16 6.873v6.5Z" />
                        <path d="M8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z" />
                      </svg>
                      <h5>Subscribers</h5>
                    </button>
                  </Link>
                </span>
              </li>

              <li className="side-navitem">
                <button
                  className="logout-button btn btn-danger border-white px-5"
                  onClick={logout}
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
          </div>

          {/* Tab Content Starts Here */}
          <div className="col-lg-10 col-md-12 tab-content" id="mytabcontent">
            <div
              className="tab-pane fade show active"
              id="course-tab-pane"
              role="tabpanel"
              aria-labelledby="course-tab"
              tabIndex="0"
            >
              <Outlet />
            </div>

            <div
              className="tab-pane fade"
              id="staff-tab-pane"
              role="tabpanel"
              aria-labelledby="staff-tab"
              tabIndex="0"
            >
              <Outlet />
            </div>

            <div
              className="tab-pane fade"
              id="testimonial-tab-pane"
              role="tabpanel"
              aria-labelledby="testimonial-tab"
              tabIndex="0"
            >
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Admindashboard;
