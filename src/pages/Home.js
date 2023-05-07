import React, { useEffect } from 'react'
import HeaderMain from '../components/HeaderMain'
import Testimonialcarousel from '../components/Testimonialcarousel'
import Footer from '../components/Footer'
import Introcard from '../components/Introcard'
import Intropart from '../pages/Intropart'
import '../assets/css/style.css'

const Home = () => {

  //goto TOP
  
    useEffect(() => {
      function handleButtonClick() {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
  
      function handleScroll() {
        var button = document.getElementById("go-to-top");
        if (window.pageYOffset > 100) {
          button.classList.add("show");
          button.classList.remove("d-none");
        } else {
          button.classList.remove("show");
          button.classList.add("d-none");
        }
      }
  
      document.getElementById("go-to-top").addEventListener("click", handleButtonClick);
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        document.getElementById("go-to-top").removeEventListener("click", handleButtonClick);
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
    
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
    <button id="go-to-top" className='btn btn-warning d-none'>Go to Top</button>
    <div className='row'>
    <Footer/>
    </div>
  </div>
  )
}

export default Home
