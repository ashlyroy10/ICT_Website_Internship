import React from 'react'
import Adminheader from '../components/Adminheader'
import '../assets/css/style.css'
const Adminlogin = () => {
  return (
    <div>
      <Adminheader />
      <div class='login-container container font-link'>
        <div class ='login-box bg-light'>	
        <h5>Login</h5>
        
          <div class="form-group">
            <label for="uname"></label>
            <input type="text" class="form-control bg-light" id="uname" placeholder="Username" name="uname" />
          </div>
          <div class="form-group">
            <label for="pswd"></label>
            <input type="password" class="form-control bg-light" id="pswd" placeholder="Password" name="pswd" />
          </div>
          
          <div className="form-check py-3">
            <label className="form-check-label">
          <   input type="checkbox" className="form-check-input" value="" />Remember Me
            </label>	
           </div>
        <button type = "button" className="btn btn-primary ">Enter</button>
      </div>
      
      </div>
    </div>
  )
}

export default Adminlogin