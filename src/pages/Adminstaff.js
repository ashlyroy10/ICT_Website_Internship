import React from 'react'
import { Link } from 'react-router-dom'

const Adminstaff = () => {
  //DUMMY Data
  const staffList = [  
    {    
      staffname: "John Smith",    
      designation: "Senior Manager",
      photo: "https://example.com/a.jpg",    
      department: "Marketing",    
      joindate: "2021-01-01"  
    },  
    
    {    
      staffname: "Jane Doe",   
      photo: "https://example.com/b.jpg", 
      designation: "Software Engineer",    
      department: "Engineering",    
      joindate: "2021-02-15"  
    },  
    
    {    
      staffname: "Bob Johnson",
      photo: "https://example.com/c.jpg",  
      designation: "Sales Representative",    
      department: "Sales",    
      joindate: "2021-03-10"  
    },  
    
    {    
      staffname: "Sarah Lee",    
      photo: "https://example.com/d.jpg", 
      designation: "Product Manager",    
      department: "Product Management",    
      joindate: "2021-04-20"  
    },  
    
    {    
      staffname: "Tommy Lee",    
      photo: "https://example.com/e.jpg", 
      designation: "Graphic Designer",    
      department: "Creative",    
      joindate: "2021-05-05"  
    }]

  return (
    <div>
      <div className='container d-flex flex-column mt-4 mb-4 text-center'>
        <div className='row'>
        <div className='col-2'>
        <span className=' d-flex justify-content-end'>
              <Link to={'/admindashboard/addstaff'}>
                <button className='btn btn-success w-100'>Add New Staff</button>
              </Link>
            </span>
          </div>

          <div className='col-6'>
            <h5>Staff List & Details</h5>
          </div>          
        </div>
        
      </div>

      <table class="table table-striped table-hover mt-3">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Photo</th>
          <th scope="col">Designation</th>
          <th scope="col">Department</th>
          <th scope="col">Operations</th>
        </tr>
        </thead>

        <tbody>
        {staffList.map((staff, index) => (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{staff.staffname}</td>
              <td><img src={staff.photo} alt={staff.staffname} /></td>
              <td>{staff.designation}</td>
              <td>{staff.department}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Adminstaff
