import React from 'react'
import { Link } from 'react-router-dom';

const Admincourse = () => {
  // DUMMY Data
  const courseList = [
    {
      title: "MEAN Stack",
      thumbnail: "https://example.com/mean-stack.jpg",
      overview: "A full-stack development course using MongoDB, Express, Angular, and Node.js",
      duration: "12 weeks",
      fee: "$1,500",
      start: "2023-05-01",
      end: "2023-07-21"
    },
    {
      title: "MERN Stack",
      thumbnail: "https://example.com/mern-stack.jpg",
      overview: "A full-stack development course using MongoDB, Express, React, and Node.js",
      duration: "10 weeks",
      fee: "$1,200",
      start: "2023-06-01",
      end: "2023-08-09"
    },
    {
      title: "Data Science",
      thumbnail: "https://example.com/data-science.jpg",
      overview: "A course on data science and analytics, covering machine learning, statistics, and data visualization",
      duration: "8 weeks",
      fee: "$1,000",
      start: "2023-07-01",
      end: "2023-08-25"
    },
    {
      title: "Ethical Hacking",
      thumbnail: "https://example.com/ethical-hacking.jpg",
      overview: "A course on cybersecurity, covering penetration testing, vulnerability assessment, and security auditing",
      duration: "6 weeks",
      fee: "$800",
      start: "2023-08-01",
      end: "2023-09-09"
    },
    {
      title: "MERN Stack",
      thumbnail: "https://example.com/mern-stack.jpg",
      overview: "A full-stack development course using MongoDB, Express, React, and Node.js",
      duration: "10 weeks",
      fee: "$1,200",
      start: "2023-06-01",
      end: "2023-08-09"
    },
    {
      title: "Data Science",
      thumbnail: "https://example.com/data-science.jpg",
      overview: "A course on data science and analytics, covering machine learning, statistics, and data visualization",
      duration: "8 weeks",
      fee: "$1,000",
      start: "2023-07-01",
      end: "2023-08-25"
    },
    {
      title: "Ethical Hacking",
      thumbnail: "https://example.com/ethical-hacking.jpg",
      overview: "A course on cybersecurity, covering penetration testing, vulnerability assessment, and security auditing",
      duration: "6 weeks",
      fee: "$800",
      start: "2023-08-01",
      end: "2023-09-09"
    },
    {
      title: "MERN Stack",
      thumbnail: "https://example.com/mern-stack.jpg",
      overview: "A full-stack development course using MongoDB, Express, React, and Node.js",
      duration: "10 weeks",
      fee: "$1,200",
      start: "2023-06-01",
      end: "2023-08-09"
    },
    {
      title: "Data Science",
      thumbnail: "https://example.com/data-science.jpg",
      overview: "A course on data science and analytics, covering machine learning, statistics, and data visualization",
      duration: "8 weeks",
      fee: "$1,000",
      start: "2023-07-01",
      end: "2023-08-25"
    },
    {
      title: "Ethical Hacking",
      thumbnail: "https://example.com/ethical-hacking.jpg",
      overview: "A course on cybersecurity, covering penetration testing, vulnerability assessment, and security auditing",
      duration: "6 weeks",
      fee: "$800",
      start: "2023-08-01",
      end: "2023-09-09"
    },
    {
      title: "MERN Stack",
      thumbnail: "https://example.com/mern-stack.jpg",
      overview: "A full-stack development course using MongoDB, Express, React, and Node.js",
      duration: "10 weeks",
      fee: "$1,200",
      start: "2023-06-01",
      end: "2023-08-09"
    },
    {
      title: "Data Science",
      thumbnail: "https://example.com/data-science.jpg",
      overview: "A course on data science and analytics, covering machine learning, statistics, and data visualization",
      duration: "8 weeks",
      fee: "$1,000",
      start: "2023-07-01",
      end: "2023-08-25"
    },
    {
      title: "Ethical Hacking",
      thumbnail: "https://example.com/ethical-hacking.jpg",
      overview: "A course on cybersecurity, covering penetration testing, vulnerability assessment, and security auditing",
      duration: "6 weeks",
      fee: "$800",
      start: "2023-08-01",
      end: "2023-09-09"
    }
  ];


  return (
    <div className='container-fluid'>
      <div className='container d-flex flex-column mt-4 mb-4 text-center'>
        <div className='row'>
        <div className='col-2'>
            <span className=' d-flex justify-content-end'>
              <Link to={'/admindashboard/addcourse'}>
                <button className='btn btn-success w-100'>Add New Course</button>
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
          <th scope="col">Title</th>
          <th scope="col">Thumbnail</th>
          <th scope="col">Overview</th>
          <th scope="col">Duration</th>
          <th scope="col">Fee</th>
          <th scope="col">Regn. Start</th>
          <th scope="col">Regn. End</th>
          <th scope="col">Operations</th>
        </tr>
        </thead>

        <tbody>
          {courseList.map((course, index) => (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{course.title}</td>
              <td><img src={course.thumbnail} alt={course.title} /></td>
              <td>{course.overview}</td>
              <td>{course.duration}</td>
              <td>{course.fee}</td>
              <td>{course.start}</td>
              <td>{course.end}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Admincourse
