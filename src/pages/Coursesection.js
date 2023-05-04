import React from 'react'
import icon1 from '../assets/images/computer_engineering.png'
import '../assets/css/style.css'
import HeaderMain from '../components/HeaderMain'
import { Link } from 'react-router-dom'

const Coursesection = () => {
  return (
    <div>
        <HeaderMain/>
                <section className='courses mt-5 mb-5'>
                    <div className='container'>
                        <div className='row'>
                            <h1 className='text-center'>Our Courses</h1>
                        </div>
                        <div className='row mt-5'>
                            <div className='col-lg-4'>
                                <div className='single-courses-box border p-3'>
                                    <div className='icon pb-5'>
                                        <img src={icon1} width="88px" alt=""></img>
                                    </div>
                                    <Link to={'/courses/readmore'}><h3>Microskill Programs </h3></Link>
                                    
                                </div>
                            </div>

                            <div className='col-lg-4'>
                                <div className='single-courses-box border p-5'>
                                    <div className='icon'>
                                        <img src={icon1} width="88px" alt=""></img>
                                    </div>
                                    <h3>Long-term Training  </h3>
                                        <div className='buttons'>
                                        <Link to={'/courses/readmore'}>Read More <i class="bi bi-arrow-right-circle"></i></Link>
                                        </div>
                                </div>
                            </div>

                            <div className='col-lg-4'>
                                <div className='single-courses-box border p-5'>
                                    <div className='icon'>
                                        <img src={icon1} width="88px" alt=""></img>
                                    </div>
                                    <h3>Short-term Program  </h3>
                                        <div className='buttons'>
                                        <Link to={'/courses/readmore'}>Read More <i class="bi bi-arrow-right-circle"></i></Link>
                                        </div>
                                </div>
                            </div>

                            <div className='col-lg-4'>
                                <div className='single-courses-box border p-5'>
                                    <div className='icon'>
                                        <img src={icon1} width="88px" alt=""></img>
                                    </div>
                                    <h3>Six-Month Program  </h3>
                                        <div className='buttons'>
                                        <Link to={'/courses/readmore'}>Read More <i class="bi bi-arrow-right-circle"></i></Link>
                                        </div>
                                </div>
                            </div>

                            <div className='col-lg-4'>
                                <div className='single-courses-box border p-5'>
                                    <div className='icon'>
                                        <img src={icon1} width="88px" alt=""></img>
                                    </div>
                                    <h3>Addon Programs </h3>
                                    <div className='buttons'>
                                        <Link to={'/courses/readmore'}>Read More <i class="bi bi-arrow-right-circle"></i></Link>
                                        </div>
                                </div>
                            </div>

                            <div className='col-lg-4'>
                                <div className='single-courses-box border p-5'>
                                    <div className='icon'>
                                        <img src={icon1} width="88px" alt=""></img>
                                    </div>
                                    <h3>Postgraduate Program</h3>
                                        <div className='buttons'>
                                        <Link to={'/courses/readmore'}>Read More <i class="bi bi-arrow-right-circle"></i></Link>
                                        </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </section>
    </div>
  )
}

export default Coursesection
