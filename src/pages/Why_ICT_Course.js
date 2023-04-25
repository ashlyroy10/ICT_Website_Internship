import React from 'react'
import '../assets/css/style.css'
import img1 from '../assets/images/profesionalTeacher.jpg'
import img2 from '../assets/images/project_baced_study.jpg'
import img3 from '../assets/images/real-worl_development.jpg'

const Why_ICT_Course = () => {
  return (
    <div>

                <section className='choose mt-5 mb-5'>
                    <div className='container'>
                        <div className='row'>
                            <h2 className='text-center mb-4'>Why we choose ICT</h2>
                        </div>
                        <div className='row'>
                          <div className='col-md-4'>
                            <div className='choose-item border'>
                            <img src={img1} className="img-fluid" alt=""></img>
                            <div>
                              <h3>Professional Teaching</h3>
                              <p>Lorem ipsum dolor sit amet. Id incidunt consequatur non totam totam sed rerum soluta est molestias laboriosam. Sed totam quia non dolor maxime ut illum Quis ut voluptates quas et omnis dolorem aut voluptatem vitae est nesciunt voluptatibus</p>
                            </div>
                            </div>
                          </div>

                          <div className='col-md-4'>
                            <div className='choose-item border'>
                            <img src={img2} className="img-fluid" alt=""></img>
                            <div>
                              <h3>project based study</h3>
                              <p>Lorem ipsum dolor sit amet. Id incidunt consequatur non totam totam sed rerum soluta est molestias laboriosam. Sed totam quia non dolor maxime ut illum Quis ut voluptates quas et omnis dolorem aut voluptatem vitae est nesciunt voluptatibus</p>
                            </div>
                            </div>
                          </div>

                          <div className='col-md-4'>
                            <div className='choose-item border'>
                            <img src={img3} className="img-fluid" alt=""></img>
                            <div>
                              <h3>Hybrid classes</h3>
                              <p>Lorem ipsum dolor sit amet. Id incidunt consequatur non totam totam sed rerum soluta est molestias laboriosam. Sed totam quia non dolor maxime ut illum Quis ut voluptates quas et omnis dolorem aut voluptatem vitae est nesciunt voluptatibus</p>
                            </div>
                            </div>
                          </div>
                        </div>
                    </div>
                </section>
    </div>
  )
}

export default Why_ICT_Course
