import React, { useState } from 'react'
import HeaderMain from '../components/HeaderMain'
import Testimonialcarousel from '../components/Testimonialcarousel'
import Footer from '../components/Footer'
import Introcard from '../components/Introcard'
import Intropart from '../pages/Intropart'
import '../assets/css/style.css'
import axios from 'axios'

const Home = () => {

  const [subemail, setSubemail] = useState({
    name: "",
    email: ""
  });

  function handleInput(event) {
    event.preventDefault();
    const mailobj = {...subemail, [event.target.name]:event.target.value}    
    setSubemail(mailobj)
    // setErrors(ValidateStaff(staffObj))               
}

  var addsubemail = (e) => {
    e.preventDefault();
    console.log(subemail);
    axios
      .post("addsubemail", subemail)
      .then((response) => {
        console.log(response);
        let successMessage = document.getElementById('success-message');
        successMessage.style.display = 'block';
        setTimeout(() => {
          successMessage.style.display = 'none';
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
        let failureMessage = document.getElementById('failure-message');
        failureMessage.style.display = 'block';
        failureMessage.textContent = 'You are already registered, maybe! \n' + error.message;
        setTimeout(() => {
          failureMessage.style.display = 'none';
        }, 2000);
      });

    // window.location.reload();
  };

  //goto TOP
  
    // useEffect(() => {
    //   function handleButtonClick() {
    //     window.scrollTo({
    //       top: 0,
    //       behavior: "smooth"
    //     });
    //   }
  
    //   function handleScroll() {
    //     var button = document.getElementById("go-to-top");
    //     if (window.pageYOffset > 100) {
    //       button.classList.add("show");
    //       button.classList.remove("d-none");
    //     } else {
    //       button.classList.remove("show");
    //       button.classList.add("d-none");
    //     }
    //   }
  
    //   document.getElementById("go-to-top").addEventListener("click", handleButtonClick);
    //   window.addEventListener("scroll", handleScroll);
  
    //   return () => {
    //     document.getElementById("go-to-top").removeEventListener("click", handleButtonClick);
    //     window.removeEventListener("scroll", handleScroll);
    //   };
    // }, []);
    
  return (
    <div className='font-link'>
    <div className='row'>
      <div>
        <HeaderMain/>
      </div>
    </div>

    <div className='row'>
      <Intropart/>
    </div>

    <div className="home-container container font-link">
            <div className="home-box bg-light">
            <h1 className='pb-4'><strong>Testimonials</strong></h1>
        <Testimonialcarousel />
      </div>
    </div>

    <div className="home-container container font-link">
            <div className="home-box bg-light">
            <h1 className='pb-4'><strong>Popular Courses</strong></h1>
            <Introcard/>
            </div>
    </div>
    <div className="row border-black border-2 m-auto py-3">
                <div className="span">
                  <div className="thumbnail center well well-small text-center">
                    <h5 className="text-bg-success py-1">JOIN THE COMMUNITY</h5>

                    <p className="text-dark-emphasis">
                      Subscribe to our mailing list and stay tuned.
                    </p>

                    <form>
                      <div className="input-prepend ">
                        <div className="row container-fluid">
                          <div className="col-4">
                            <div class="input-group mb-3">
                              <span class="input-group-text" id="basic-addon1">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-person"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                                </svg>
                              </span>
                              <input
                                type="text"
                                className="form-control"
                                name="user"
                                onChange={handleInput}
                                placeholder="Name"
                                aria-label="Name"
                                aria-describedby="basic-addon1"
                              />
                            </div>
                          </div>

                          <div className="col-5">
                            <div class="input-group mb-3">
                              <span class="input-group-text" id="basic-addon1">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="bi bi-envelope-heart-fill"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555l-4.2 2.568a2.785 2.785 0 0 0-.051-.105c-.666-1.3-2.363-1.917-3.699-1.25-1.336-.667-3.033-.05-3.699 1.25l-.05.105L.05 3.555ZM11.584 8.91a4.694 4.694 0 0 1-.073.139L16 11.8V4.697l-4.003 2.447c.027.562-.107 1.163-.413 1.767Zm-4.135 3.05c-1.048-.693-1.84-1.39-2.398-2.082L.19 12.856A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144L10.95 9.878c-.559.692-1.35 1.389-2.398 2.081L8 12.324l-.551-.365ZM4.416 8.91c-.306-.603-.44-1.204-.413-1.766L0 4.697v7.104l4.49-2.752a4.742 4.742 0 0 1-.074-.138Z" />
                                  <path d="M8 5.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z" />
                                </svg>
                              </span>
                              <input
                                type="email"
                                className="form-control"
                                name="email"
                                onChange={handleInput}
                                placeholder="your@email.com"
                                aria-label="email"
                                aria-describedby="basic-addon1"
                              />
                            </div>
                          </div>

                          <div className="col-3">
                            <input
                              type="button"
                              className="btn btn-danger w-75"
                              value="Subscribe"
                              onClick={addsubemail}
                            />
                          </div>
                        </div>
                        <div className="row justify-content-center">
                          {/* ALERT MESSAGE */}
                          {/* SUCCESS */}
                          <div
                            className="alert alert-success"
                            id="success-message"
                            style={{ width: "200px", display: 'none' }}
                            role="alert"
                          >
                            Email Added
                          </div>

                          {/* FAILURE */}
                          <div
                            className="alert alert-danger"
                            id="failure-message"
                            style={{ width: "200px", display: 'none' }}
                            role="alert"
                          >
                            Email Added
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
    
    {/* <button id="go-to-top" className='btn btn-warning d-none'>Go to Top</button> */}
    <div className='row'>
    <Footer/>
    </div>
  </div>
  )
}

export default Home
