import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';

const TestimonialCarousel = () => {
  const [testimonialList, setTestimonialList] = useState([]);
  const filepath = 'http://localhost:5000/uploads/testimonialphoto/';

  useEffect(() => {
    async function fetchTestimonial() {
      try {
        const response = await axios.get('/alltestimonial');
        setTestimonialList(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchTestimonial();
  }, []);

  return (
    <div>
      <Carousel>
        {testimonialList.map((value, index) => (
          <Carousel.Item key={index}>
            <div className="carouselcard card">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={filepath + value.student_photo}
                    className="img-fluid rounded-start"
                    alt={value.student_name}
                    
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{value.student_name}</h5>
                    <p className="card-text">
                      <strong>"{value.testimonial}"</strong>
                    </p>
                    <p className="card-text">
                      <strong>Course:</strong> {value.student_course}
                    </p>
                    <p className="card-text mb-3">
                      <strong>Batch:</strong> {value.batch}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default TestimonialCarousel;

