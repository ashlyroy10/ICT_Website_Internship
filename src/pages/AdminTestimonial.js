import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

const AdminTestimonial = () => {
  var [testimonialList, setTestimonialList] = useState([]);

  useEffect(() => {
    // async function fetchData() {
    //   try {
    //     const response = await axios.get("/allstaff");
    //     setStafflist(response.data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
    // fetchData();
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
              <td>{index+1}</td>
              <td>{testimonials.testimonial}</td>
              <td>{testimonials.student_name}</td>
              <td><img src={testimonials.student_photo} alt={testimonials.student_name} /></td>              
              <td>{testimonials.course}</td>
              <td>{testimonials.batch}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AdminTestimonial
