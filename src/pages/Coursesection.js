import React from 'react'
import icon1 from '../assets/images/computer_engineering.png'
import '../assets/css/style.css'
import HeaderMain from '../components/HeaderMain'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const Coursesection = () => {
  return (
    <div>
        <HeaderMain/>
                <section className='courses mt-3 mb-5'>
                    <div className='container'>
                        <div className='row'>
                            <h1 className='text-center'>Our Courses</h1>
                        </div>
                        <div className='row mt-5'>
                            <div className='col-lg-4'>
                                <div className='single-courses-box border border-5 rounded-4 p-3'>
                                    <div className='icon pb-3'>
                                        <img src={icon1} width="88px" alt=""></img>
                                    </div>
                                    <Link to={'/courses/readmore'}><h3>Microskill Programs </h3></Link>
                                    
                                </div>
                            </div>

                            <div className='col-lg-4'>
                                <div className='single-courses-box border border-5 rounded-4 p-3'>
                                    <div className='icon pb-3'>
                                        <img src={icon1} width="88px" alt=""></img>
                                    </div>
                                    <Link to={'/courses/readmore'}><h3>Long-term Training</h3></Link>
                                </div>
                            </div>

                            <div className='col-lg-4'>
                                <div className='single-courses-box border border-5 rounded-4 p-3'>
                                    <div className='icon pb-3'>
                                        <img src={icon1} width="88px" alt=""></img>
                                    </div>
                                    <Link to={'/courses/readmore'}><h3>Short-term Program</h3></Link>
                                </div>
                            </div>

                            <div className='col-lg-4'>
                                <div className='single-courses-box border border-5 rounded-4 p-3'>
                                    <div className='icon pb-3'>
                                        <img src={icon1} width="88px" alt=""></img>
                                    </div>
                                    <Link to={'/courses/readmore'}><h3>Six-Month Program</h3></Link>
                                </div>
                            </div>

                            <div className='col-lg-4'>
                                <div className='single-courses-box border border-5 rounded-4 p-3'>
                                    <div className='icon pb-3'>
                                        <img src={icon1} width="88px" alt=""></img>
                                    </div>
                                    <Link to={'/courses/readmore'}><h3>Addon Programs</h3></Link>
                                </div>
                            </div>

                            <div className='col-lg-4'>
                                <div className='single-courses-box border border-5 rounded-4 p-3'>
                                    <div className='icon pb-3'>
                                        <img src={icon1} width="88px" alt=""></img>
                                    </div>
                                    <Link to={'/courses/readmore'}><h3>Postgraduate Program</h3></Link>
                                </div>
                            </div>


                        </div>
                    </div>
                </section>
        <Footer/>
    </div>
  )
}

export default Coursesection
