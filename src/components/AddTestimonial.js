import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Adminheader from '../components/Adminheader';
import { ValidateTestimonials } from './Validate';
import axios from 'axios';

const AddTestimonial = () => {

    const [testimonials, setTestimonials] = useState({
        testimonial: '',
        student_name: '',
        student_photo: '',
        student_course:'',
        batch:''
    })

    let [errors, setErrors] = useState({});
    const navigate = useNavigate();

    function handleInput(event) {
        event.preventDefault();
        const newObj = {...testimonials, [event.target.name]:event.target.value}
        setTestimonials(newObj)
        setErrors(ValidateTestimonials(newObj))
    }

    function handleTestimonialPhoto(event) {
        // setPhoto(event.target.files[0]);
        console.log(event.target.files[0]);
        setTestimonials({...testimonials, student_photo:event.target.files[0]})
      }

    //insert function
    const inputtestimonial = async (e) => {
        console.log("in input testimonial")
        const formData = new FormData();
        formData.append('student_photo', testimonials.student_photo, testimonials.student_photo.name)
        formData.append('testimonial', testimonials.testimonial)        
        formData.append('student_name', testimonials.student_name)
        formData.append('student_course', testimonials.student_course)
        formData.append('batch', testimonials.batch)
        // console.log(formData)
        // for (const [key, value] of formData.entries()) {
        //     console.log(`${key}: ${value}`);
        //   }
        
        try {
          console.log("in input testimonial try section");
          const ans = await axios.post("/addtestimonial", formData); 
          console.log(ans.data.student_name);       
          alert(`${ans.data.student_name} Added to Database`);        
          navigate("/admindashboard/testimonials"); 
        } catch (error) {
            console.error("Yoooooooo")
          console.log(error);
          alert("Error adding testimonial");
        }
        
      };

    
  return (
    <div>
        <Adminheader />
        <div className='container-fluid font-link'>
            <div className='row pt-4'>
                <div className='col-1'>                    
                    <span>
                        <Link to={'/admindashboard/testimonials'}>
                            <button type='button' className='btn btn-warning w-50' data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Back to Dashboard">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-backspace-fill pb-1" viewBox="0 0 16 16">
                                    <path d="M15.683 3a2 2 0 0 0-2-2h-7.08a2 2 0 0 0-1.519.698L.241 7.35a1 1 0 0 0 0 1.302l4.843 5.65A2 2 0 0 0 6.603 15h7.08a2 2 0 0 0 2-2V3zM5.829 5.854a.5.5 0 1 1 .707-.708l2.147 2.147 2.146-2.147a.5.5 0 1 1 .707.708L9.39 8l2.146 2.146a.5.5 0 0 1-.707.708L8.683 8.707l-2.147 2.147a.5.5 0 0 1-.707-.708L7.976 8 5.829 5.854z"/>
                                </svg>
                            </button>
                        </Link>                     
                    </span>
                </div>

                <div className='col-11'>
                    <h3>Add Testimonials</h3>
                </div>
            </div>
            <hr/>
            <div className='row d-flex justify-content-center'>
                <div className='form-box w-50'>
                <form encType="multipart/form-data">
                <div class="mb-3">
                    <input type="text" class="form-control" id="testimonial" name='testimonial' onChange={handleInput} placeholder='Testimonial' />
                    {<p style={{color:"red"}}>{errors.testimonial}</p>}
                </div>

                <div class="mb-3">
                    <input type="text" class="form-control" id="student_name" name='student_name' onChange={handleInput} placeholder='Name of Student' maxLength={30} />
                    {<p style={{color:"red"}}>{errors.student_name}</p>}
                </div>

                <div class="mb-3">
                    <label for="student_photo" class="form-label">Upload Photo</label>
                    <input class="form-control" type="file" id="student_photo" name='student_photo' onChange={handleTestimonialPhoto} placeholder='Upload Photo' />
                </div>

                <div class="mb-3">
                    <input type="text" class="form-control" id="student_course" name='student_course' onChange={handleInput} placeholder='Course' />
                    {<p style={{color:"red"}}>{errors.student_course}</p>}
                </div>

                <div class="mb-3">
                    <input type="text" class="form-control" id="batch" name='batch' onChange={handleInput} placeholder='Batch' />
                    {<p style={{color:"red"}}>{errors.batch}</p>}
                </div>

                <div class="mb-3">
                    <button className='btn btn-success w-25 form-control' type='submit' onClick={inputtestimonial}>Save</button>
                </div>
                </form>
                </div>
            </div>    
        </div>                
        
    </div>
  )
}

export default AddTestimonial
