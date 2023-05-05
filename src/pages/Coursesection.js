import React from 'react'
import icon1 from '../assets/images/computer_engineering.png'
import '../assets/css/style.css'
import HeaderMain from '../components/HeaderMain'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const Coursesection = () => {

    const coursetype = [
        { name: "Post graduate Programs", code: "pgt" },
        { name: "Six-Month Program", code: "sxm" },
        { name: "Microskill Programs", code: "mcr" },
        { name: "Long-term Training", code: "ltt" },
        { name: "Addon Programs", code: "aop" },
        { name: "Short-term Program", code: "shr" },
      ];

  return (
    <div>
        <HeaderMain/>
                <section className='courses mt-3 mb-5'>
                    <div className='container'>
                        <div className='row'>
                            <h1 className='text-center'>Our Courses</h1>
                        </div>
                        <div>

                        
                        </div>
                        <div className='row mt-5'>
                        {coursetype.map((value,index) => (
                          
                                  <div className='col-lg-4' key={index}>
                                <div className='single-courses-box border border-5 rounded-4 p-3'>
                                    <div className='icon pb-3'>
                                        <img src={icon1} width="88px" alt=""></img>
                                    </div>
                                    <Link to={`/courses/${value.code}`}><h3>{value.name} </h3></Link>
                                    
                                </div>
                            </div>
                            
                        ))}
                        </div>
                    </div>
                </section>
        <Footer/>
    </div>
  )
}

export default Coursesection
