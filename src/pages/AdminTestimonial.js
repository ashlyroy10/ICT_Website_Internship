import React from 'react'
import { Link } from 'react-router-dom'

const AdminTestimonial = () => {
    const testimonialList = [  {    "testimonial": "I can't believe how much I learned in this course! It completely exceeded my expectations.",    "student_name": "Emily Johnson",    "student_photo": "https://randomuser.me/api/portraits/women/1.jpg",    "course": "Web Development",    "batch": "Spring 2022"  },  {    "testimonial": "This course was exactly what I needed to take my career to the next level.",    "student_name": "Adam Lee",    "student_photo": "https://randomuser.me/api/portraits/men/1.jpg",    "course": "Data Science",    "batch": "Fall 2021"  },  {    "testimonial": "The instructors were knowledgeable and supportive throughout the entire course.",    "student_name": "Jessica Nguyen",    "student_photo": "https://randomuser.me/api/portraits/women/2.jpg",    "course": "Marketing",    "batch": "Summer 2022"  },  {    "testimonial": "I was able to apply what I learned in this course immediately to my job.",    "student_name": "Juan Rodriguez",    "student_photo": "https://randomuser.me/api/portraits/men/2.jpg",    "course": "Accounting",    "batch": "Winter 2022"  },  {    "testimonial": "The course materials were well-organized and easy to follow.",    "student_name": "Samantha Chen",    "student_photo": "https://randomuser.me/api/portraits/women/3.jpg",    "course": "Graphic Design",    "batch": "Spring 2023"  },  {    "testimonial": "The instructors were always available to answer questions and provide feedback.",    "student_name": "Michael Kim",    "student_photo": "https://randomuser.me/api/portraits/men/3.jpg",    "course": "Project Management",    "batch": "Fall 2022"  },  {    "testimonial": "I would highly recommend this course to anyone looking to expand their skills.",    "student_name": "Ashley Brown",    "student_photo": "https://randomuser.me/api/portraits/women/4.jpg",    "course": "Public Speaking",    "batch": "Summer 2021"  },  {    "testimonial": "I'm so glad I decided to take this course. It was a game-changer for me.",    "student_name": "David Hernandez",    "student_photo": "https://randomuser.me/api/portraits/men/4.jpg",    "course": "Leadership",    "batch": "Winter 2021"  },  {    "testimonial": "The course was challenging, but the instructors made it fun and engaging.",    "student_name": "Megan Patel",    "student_photo": "https://randomuser.me/api/portraits/women/5.jpg",    "course": "Software Engineering",    "batch": "Spring 2022"  },  {    "testimonial": "I was able to make meaningful connections with my classmates in this course.",    "student_name": "Daniel Kim",    "student_photo": "https://randomuser.me/api/portraits/men/5.jpg",    "course": "Digital Marketing",    "batch": "Fall 2022"  }]


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

      <table class="table table-striped table-hover mt-3">
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
