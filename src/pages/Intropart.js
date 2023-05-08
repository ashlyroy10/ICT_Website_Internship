import React, { useState } from 'react'
import Intropic from "../assets/images/Ictintro.png";
import axios from 'axios'
const Intropart = () => {

  const [subemail, setSubemail] = useState({
      name: "",
      email: ""
    });

    function handleInput(event) {
      event.preventDefault();
      const mailobj = {...subemail, [event.target.name]:event.target.value}    
      setSubemail(mailobj)
      // setErrors(ValidateStaff(staffObj))               
  }
  
    var addsubemail = (e) => {
      e.preventDefault();
      console.log(subemail);
      axios
        .post("addsubemail", subemail)
        .then((response) => {
          console.log(response);
          let successMessage = document.getElementById('success-message');
          successMessage.style.display = 'block';
          setTimeout(() => {
            successMessage.style.display = 'none';
          }, 2000);
        })
        .catch((error) => {
          console.log(error);
          let failureMessage = document.getElementById('failure-message');
          failureMessage.style.display = 'block';
          failureMessage.textContent = 'You are already registered, maybe! \n' + error.message;
          setTimeout(() => {
            failureMessage.style.display = 'none';
          }, 2000);
        });
  
      // window.location.reload();
    };

  return (
    <div>
      <div class="nice">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-6 col-md-12 p1">
              <br />
              <br />
              <h3>Build your Dream Career with</h3> 
              <h3>ICT Academy of Kerala</h3>
              <p className='text-justify fs-5'>
                ICT Academy of Kerala (ICTAK) is a social enterprise officially
                launched on the 24th of June, 2014. The organization had a
                humble beginning providing skill training programs to selected
                academic institutions. Over the years, ICTAK has grown to a
                prime service provider of all ICT and innovation-related
                training and capacity-building programs in the state.
              </p>

              

            </div>
            <div class="col-lg-6 col-md-0 p2">
              <br />
              <img
                src={Intropic}
                alt="intropic of ICT"
                width="550"
                height="400"
              />
              {/* <img src={Intropic}  alt="intropic of ICT" width="500" height="350" class="animationpic"/> */}
            </div>
          </div>          
        </div>
      </div>
    </div>
  );
};

export default Intropart;
