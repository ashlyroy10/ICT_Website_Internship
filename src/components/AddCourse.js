import React, { useState } from 'react'
import Adminheader from './Adminheader'
import { Link } from 'react-router-dom'
import { ValidateCourse } from './Validate';

const AddCourse = () => {

    const [courseDetails, setCourseDetails] = useState({
        coursetitle: '',
        overview: '',
        thumbImage:'',
        syllabusfile:'',
        description: '',
        duration: '',
        fee:'',
        startdate: '',
        enddate: ''

    })

    let [errors, setErrors] = useState({});

    function handleInput(event) {
        event.preventDefault();
        const courseObj = {...courseDetails, [event.target.name]:event.target.value}
        setCourseDetails(courseObj)
        setErrors(ValidateCourse(courseObj))
    }

    // function handleValidation (event) {
    //     event.preventDefault();
    //     setErrors(Validate(courseDetails))
    // }

  return (
    <div>
        <Adminheader />
        <div className='container-fluid font-link'>
            <div className='row pt-4'>
                <div className='col-1'>                    
                    <span>
                        <Link to={'/admindashboard'}>
                            <button type='button' className='btn btn-warning w-50' data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Back to Dashboard">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-backspace-fill pb-1" viewBox="0 0 16 16">
                                    <path d="M15.683 3a2 2 0 0 0-2-2h-7.08a2 2 0 0 0-1.519.698L.241 7.35a1 1 0 0 0 0 1.302l4.843 5.65A2 2 0 0 0 6.603 15h7.08a2 2 0 0 0 2-2V3zM5.829 5.854a.5.5 0 1 1 .707-.708l2.147 2.147 2.146-2.147a.5.5 0 1 1 .707.708L9.39 8l2.146 2.146a.5.5 0 0 1-.707.708L8.683 8.707l-2.147 2.147a.5.5 0 0 1-.707-.708L7.976 8 5.829 5.854z"/>
                                </svg>
                            </button>
                        </Link>                     
                    </span>
                </div>

                <div className='col-11'>
                    <h3>Add Course Details</h3>
                </div>
            </div>
            <hr/>
            <div className='row d-flex justify-content-center'>
                <div className='form-box w-50'>
                <form>
                <div class="mb-3">
                    <input type="text" class="form-control" name='coursetitle' id="coursetitle" placeholder='Course Title' onChange={handleInput} />
                    {<p style={{color:"red"}}>{errors.coursetitle}</p>}
                </div>

                <div class="mb-3 row">
                    <div className='col'>
                        <label for="thumbImage" class="form-label">Upload Thumbnail</label>
                        <input class="form-control" type="file" name='thumbImage' id="thumbImage" placeholder='Upload Thumbnail' />
                    </div>

                    <div className='col'>
                        <label for="syllabusfile" class="form-label">Upload Syllabus</label>
                        <input class="form-control" type="file" name='syllabusfile' id="syllabusfile" placeholder='Upload Syllabus' />
                    </div>
                </div>

                <div class="mb-3">
                    <textarea class="form-control" name='overview' id="overview" placeholder='Course Overview' onChange={handleInput} ></textarea>
                    {<p style={{color:"red"}}>{errors.overview}</p>}
                </div>

                <div class="mb-3">
                    <textarea class="form-control" name='description' id="description" placeholder='Course Description' onChange={handleInput} ></textarea>
                    {<p style={{color:"red"}}>{errors.description}</p>}
                </div>

                <div class="mb-3">
                    <input type="text" class="form-control" name='duration' id="duration" placeholder='Duration (In weeks)' onChange={handleInput} />
                    {<p style={{color:"red"}}>{errors.duration}</p>}
                </div>

                <div class="mb-3">
                    <input type="text" class="form-control" name='fee' id="fee" placeholder='Fee (in INR)' onChange={handleInput} />
                    {<p style={{color:"red"}}>{errors.fee}</p>}
                </div>

                <div className='row mb-3'>
                <div class="col">
                    <label for="startdate" class="form-label">Registration Start
                    <input type="date" class="form-control" name='startdate' id="startdate" onChange={handleInput} /></label>
                    {<p style={{color:"red"}}>{errors.startdate}</p>}
                </div>

                <div class="col">
                    <label for="enddate" class="form-label">Registration End
                    <input type="date" class="form-control" name='enddate' id="enddate" onChange={handleInput} /></label>
                    {<p style={{color:"red"}}>{errors.enddate}</p>}
                </div>
                </div>
                <div class="mb-3">
                                       
                </div>
                <div class="mb-3">
                    <button type='submit' className='btn btn-success w-25'>Save</button>
                </div>
                </form>
                </div>
            </div>    
        </div>                
        
    </div>
  )
}

export default AddCourse
