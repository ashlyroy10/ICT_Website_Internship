import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams} from 'react-router-dom';
import Adminheader from './Adminheader';

const EditTestimonial = () => {

    let {id} = useParams();
    const navigate = useNavigate();

    const [Testimonials, setTestimonials] = useState({
        testimonial: '',
        student_name: '',
        student_photo: '',
        student_course:'',
        batch:''
    });
    const { testimonial, student_name, student_photo, student_course, batch} = Testimonials;

    const loadtestimonial = async () => {
        const result = await axios.get(`/gettestimonial/${id}`);
        setTestimonials(result.data);
    }


    let [errors, setErrors] = useState({});
    let [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const onInputChange = e => {
        setTestimonials({ ...Testimonials, [e.target.name]: e.target.value });
    }
     //Checking Errros
     useEffect(() => {
        loadtestimonial();

        if (Object.keys(errors).length === 0) {
          setIsButtonDisabled(false);
        } else {
          setIsButtonDisabled(true);
        }
      }, [errors]);

    //update function
    const updatetestimonial = async e => {
        e.preventDefault();
        await axios.patch(`/updatetestimonial/${id}`, Testimonials)
        .then((response) => {
            alert("Testimonial Updated");
        })
        .catch((error)=>{
            console.log(error)
        })
        navigate("/admindashboard/testimonials");
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
                    <h3>Update Testimonial</h3>
                </div>
            </div>
            <hr/>
            <div className='row d-flex justify-content-center'>
                <div className='form-box w-50'>
                <form>
                <div class="mb-3">
                    <input type="text" class="form-control" id="testimonial" name='testimonial' value={testimonial} onChange={e => onInputChange(e)} placeholder='Testimonial' />
                    {<p style={{color:"red"}}>{errors.testimonial}</p>}
                </div>

                <div class="mb-3">
                    <input type="text" class="form-control" id="student_name" name='student_name' value={student_name} onChange={e => onInputChange(e)} placeholder='Name of Student' maxLength={30} />
                    {<p style={{color:"red"}}>{errors.student_name}</p>}
                </div>

                <div class="mb-3">
                    <label for="student_photo" class="form-label">Upload Photo</label>
                    <input class="form-control" type="text" id="student_photo" name='student_photo' value={student_photo} onChange={e => onInputChange(e)} placeholder='Photo URL' />
                </div>

                <div class="mb-3">
                    <input type="text" class="form-control" id="student_course" name='student_course' value={student_course} onChange={e => onInputChange(e)} placeholder='Course' />
                    {<p style={{color:"red"}}>{errors.student_course}</p>}
                </div>

                <div class="mb-3">
                    <input type="text" class="form-control" id="batch" name='batch' value={batch} onChange={e => onInputChange(e)} placeholder='Batch' />
                    {<p style={{color:"red"}}>{errors.batch}</p>}
                </div>

                <div class="mb-3">
                    <button className='btn btn-success w-25' onClick={updatetestimonial} disabled={isButtonDisabled}>Save</button>
                </div>
                </form>
                </div>
            </div>    
        </div>    
    </div>
  )
}

export default EditTestimonial