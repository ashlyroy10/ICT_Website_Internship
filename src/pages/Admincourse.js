import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Admincourse = () => {
  var [courseList, setCourseList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("/allcourse");
        setCourseList(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  //To delete one entry
  const deletecourse = async (id, e) => {
    e.preventDefault();
    if (window.confirm("Are you sure you want to delete this entry?")) {
      try {
        // const response =
        await axios.delete(`/deletecourse/${id}`);
        alert("Entry Deleted");
        window.location.reload();
      } catch (error) {
        console.log(error);
        alert("Error deleting Course");
      }
    }
  };

  return (
    <div className="container-fluid">
      <div className="container d-flex flex-column mt-4 mb-4 text-center">
        <div className="row">
          <div className="col-2">
            <span className=" d-flex justify-content-end">
              <Link to={"/admindashboard/addcourse"}>
                <button className="btn btn-success w-100">
                  Add New Course
                </button>
              </Link>
            </span>
          </div>

          <div className="col-6">
            <h5>Course Details</h5>
          </div>
        </div>
      </div>

      {/* Course in a Card */}

      <div class="container border-0">
        <div class="row row-cols-1 row-cols-md-2 g-4">
          <div class="col">
              
              
              {courseList.map((value, index) => (
                <div class="card mb-3">
                <div>
                  <div className="card-header bg-secondary text-white" key={index}>
                    <h5 class="card-title">{value.coursetitle}</h5>
                    <p></p>
                  </div>

                  <img src={value.thumbImage} alt={value.title} />

                  {/* ACCORDION */}

                  <div class="accordion accordion-flush" id={`accordianParent${index}`}>
                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#flush-collapseOne${index}`}
                          aria-expanded="false"
                          aria-controls={`flush-collapseOne${index}`}
                        >
                          Overview
                        </button>
                      </h2>
                      <div
                        id={`flush-collapseOne${index}`}
                        class="accordion-collapse collapse"
                        data-bs-parent={`#accordianParent${index}`}
                      >
                        <div class="accordion-body">{value.overview}</div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#flush-collapseTwo${index}`}
                          aria-expanded="false"
                          aria-controls={`flush-collapseOTwo${index}`}
                        >
                          Description
                        </button>
                      </h2>
                      <div
                        id={`flush-collapseTwo${index}`}
                        class="accordion-collapse collapse"
                        data-bs-parent={`#accordianParent${index}`}
                      >
                        <div class="accordion-body">{value.description}</div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#flush-collapseThree${index}`}
                          aria-expanded="false"
                          aria-controls={`flush-collapseThree${index}`}
                        >
                          Duration and Fee
                        </button>
                      </h2>
                      <div
                        id={`#flush-collapseThree${index}`}
                        class="accordion-collapse collapse"
                        data-bs-parent={`#accordianParent${index}`}
                      >
                        <div class="accordion-body">
                          <small className="text-muted">
                            <p>Course Duration: {value.duration} hours</p>
                            <p>Internship: {value.internship} hours</p>
                            <p>Fee: INR {value.fee} (minus GST)</p>
                          </small>
                        </div>
                      </div>
                    </div>

                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#flush-collapseFour${index}`}
                          aria-expanded="false"
                          aria-controls={`flush-collapseFour${index}`}
                        >
                          Registration and Status
                        </button>
                      </h2>
                      <div
                        id={`flush-collapseFour${index}`}
                        class="accordion-collapse collapse"
                        data-bs-parent={`#accordianParent${index}`}
                      >
                        <div class="accordion-body">
                          <small className="text-muted">
                            <p>Mode of Study: {value.cmode}</p>
                            <p>Registrations open from {value.startdate} to {value.enddate}</p>
                            <p>Course Status {value.cstatus}</p>
                          </small>
                        </div>
                      </div>
                    </div>

                  </div>
                  {/* SAMPLE */}

                  <div className="card-footer">
                    <button className="btn btn-success mx-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-pencil-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                      </svg>
                      <small> Edit</small>
                    </button>

                    <button
                      className="btn btn-danger"
                      id="delete_button"
                      onClick={(e) => deletecourse(value._id, e)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-trash3-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                      </svg>{" "}
                      <small> Delete</small>
                    </button>
                  </div>
                </div>
            </div>
              ))}
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Admincourse;
