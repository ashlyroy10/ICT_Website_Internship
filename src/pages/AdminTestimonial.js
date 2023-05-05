import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import axios from "axios";

const AdminTestimonial = () => {
  var [testimonialList, setTestimonialList] = useState([]);
  const filepath = "http://localhost:5000/uploads/testimonialphoto/";

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("/alltestimonial");
        setTestimonialList(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className='container-fluid'>
      <div className='container d-flex flex-column mt-4 mb-4 text-center'>
        <div className='row'>
        <div className='col-2'>
            <span className=' d-flex justify-content-end'>
              <Link to={'/admindashboard/addtestimonials'}>
                <button className='btn btn-success w-100'>Add Testimonial</button>
              </Link>
            </span>
          </div>

          <div className='col-6'>
            <h5>Course Details</h5>
          </div>          
        </div>
        
      </div>

      <table className="table table-striped table-hover mt-3">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Testimonial</th>
          <th scope="col">Student</th>
          <th scope="col">Photo</th>
          <th scope="col">Course</th>
          <th scope="col">Batch</th>
          <th scope="col">Operations</th>
        </tr>
        </thead>

        <tbody>
          {testimonialList.map((testimonials, index) => (
            <tr key={index}>
              <td className='align-middle'>{index+1}</td>
              <td className='align-middle'>{testimonials.testimonial}</td>
              <td className='align-middle'>{testimonials.student_name}</td>
              <td className='align-middle'><img src={filepath+testimonials.student_photo} alt={testimonials.student_name} width="80px" /></td>              
              <td className='align-middle'>{testimonials.course}</td>
              <td className='align-middle'>{testimonials.batch}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AdminTestimonial
