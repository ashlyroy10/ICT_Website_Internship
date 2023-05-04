import React, { useState } from 'react'
import Adminheader from './Adminheader'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ValidateCourse } from './Validate';
import axios from 'axios';
import { useEffect } from 'react';

const EditCourse = () => {

    let {id} = useParams();
    const navigate = useNavigate();

    const [newcourse, setnewcourse] = useState({
        coursetitle: '',
        coursetype: '',
        overview: '',
        thumbImage:'',
        syllabusfile:'',
        description: '',
        duration: '',
        internship:'',
        fee:'',
        cmode:'',
        startdate: '',
        enddate: '',
        cstatus: ''

    });
    const { coursetitle, coursetype, overview, thumbImage, syllabusfile, description, duration, internship, fee, cmode, startdate, enddate, cstatus} = newcourse;

    const loadcourse = async () => {
        const result = await axios.get(`/getcourse/${id}`);
        setnewcourse(result.data);
    }

    useEffect(() => {
        loadcourse();
      }, []);

    let [errors, setErrors] = useState({});

    const onInputChange = e => {
        setnewcourse({ ...newcourse, [e.target.name]: e.target.value });
    }

   //update function
   const updatecourse = async e => {
    e.preventDefault();
    await axios.patch(`/updatecourse/${id}`, newcourse)
    .then((response) => {
        alert("Course Updated");
    })
    .catch((error)=>{
        console.log(error)
    })
    navigate("/admindashboard/course_details");
}

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
                    <h3>Update Course Details</h3>
                </div>
            </div>
            <hr/>
            <div className='row d-flex justify-content-center'>
                <div className='form-box w-50'>
                <form>

                <div class="mb-3">
                    <input type="text" class="form-control" name='coursetitle' id="coursetitle" placeholder='Course Title' value={coursetitle} onChange={e => onInputChange(e)} />
                    {<p style={{color:"red"}}>{errors.coursetitle}</p>}
                </div>

                <div class="mb-3">
                  <label for="coursetype" class="form-label">Select Course Type</label>
                  <select className='form-control' name="coursetype" value={coursetype}  onChange={e => onInputChange(e)} id="coursetype">
                    <option value=""></option>
                    <option value="pgt">Post-graduate Programs</option>
                    <option value="sxm">Six Month Programs</option>
                    <option value="ltt">Long Term Training</option>
                    <option value="mcr">Microskill Programs</option>
                    <option value="shr">Short Term Programs</option>
                    <option value="aop">Add-on Programs</option>
                    <option value="tin">Training with Internship</option>
                    <option value="wen">Workforce Enablement Programs</option>
                  </select>
                  {<p style={{color:"red"}}>{errors.coursetype}</p>}

                </div>

                <div class="mb-3 row">
                    <div className='col'>
                        <label for="thumbImage" class="form-label">Upload Thumbnail</label>
                        <input class="form-control" type="file" name='thumbImage' id="thumbImage" placeholder='Upload Thumbnail' onChange={e => onInputChange(e)} />
                        {<p style={{color:"red"}}>{errors.thumbImage}</p>}
                    </div>

                    <div className='col'>
                        <label for="syllabusfile" class="form-label">Upload Syllabus</label>
                        <input class="form-control" type="file" name='syllabusfile' id="syllabusfile" placeholder='Upload Syllabus' onChange={e => onInputChange(e)} />
                        {<p style={{color:"red"}}>{errors.syllabusfile}</p>}
                    </div>
                </div>

                <div class="mb-3">
                    <textarea class="form-control" name='overview' id="overview" placeholder='Course Overview'  value={overview}  onChange={e => onInputChange(e)} ></textarea>
                    {<p style={{color:"red"}}>{errors.overview}</p>}
                </div>

                <div class="mb-3">
                    <textarea class="form-control" name='description' id="description" placeholder='Course Description'  value={description}  onChange={e => onInputChange(e)} ></textarea>
                    {<p style={{color:"red"}}>{errors.description}</p>}
                </div>

                <div class="mb-3">
                    <input type="text" class="form-control" name='duration' id="duration" placeholder='Duration (In Hours)'  value={duration} onChange={e => onInputChange(e)} />
                    {<p style={{color:"red"}}>{errors.duration}</p>}
                </div>

                <div class="mb-3">
                    <input type="text" class="form-control" name='internship' id="internship" placeholder='Internship (In Hours)'  value={internship}  onChange={e => onInputChange(e)} />
                    {<p style={{color:"red"}}>{errors.internship}</p>}
                </div>

                <div class="mb-3">
                    <input type="text" class="form-control" name='fee' id="fee" placeholder='Fee (in INR) minus GST'  value={fee}  onChange={e => onInputChange(e)} />
                    {<p style={{color:"red"}}>{errors.fee}</p>}
                </div>
                
                <div class="mb-3">
                  <label for="cmode" class="form-label">Select Mode of Study</label>
                  <select className='form-control' name="cmode"  value={cmode}  onChange={e => onInputChange(e)} id="cmode">
                    <option value=""></option>
                    <option value="offline">Offline</option>
                    <option value="online">Online</option>
                    <option value="hybrid">Hybrid</option>
                  </select>
                  {<p style={{color:"red"}}>{errors.cmode}</p>}

                </div>

                <div className='row mb-3'>
                <div class="col">
                    <label for="startdate" class="form-label">Registration Start
                    <input type="date" class="form-control" name='startdate' id="startdate"  value={startdate}  onChange={e => onInputChange(e)} /></label>
                    {<p style={{color:"red"}}>{errors.startdate}</p>}
                </div>

                <div class="col">
                    <label for="enddate" class="form-label">Registration End
                    <input type="date" class="form-control" name='enddate' id="enddate"  value={enddate}  onChange={e => onInputChange(e)} /></label>
                    {<p style={{color:"red"}}>{errors.enddate}</p>}
                </div>
                </div>
                <div class="mb-3">
                <div class="mb-3">
                  <label for="cstatus" class="form-label">Select Course Status</label>
                  <select className='form-control' name="cstatus"  value={cstatus}  onChange={e => onInputChange(e)} id="cstatus">
                    <option value=""></option>
                    <option value="op">Open</option>
                    <option value="cl">Closed</option>
                    <option value="ca">Cancelled</option>
                  </select>
                  {<p style={{color:"red"}}>{errors.cstatus}</p>}

                </div>
                                       
                </div>
                <div class="mb-3">
                    <button type='submit' className='btn btn-success w-25' onClick={updatecourse}>Save</button>
                </div>
                </form>
                </div>
            </div>    
        </div>    
    </div>
  )
}

export default EditCourse