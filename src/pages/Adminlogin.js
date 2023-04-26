import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import Adminheader from '../components/Adminheader'
import '../assets/css/style.css'
import axios from 'axios';


const Adminlogin = () => {

  var [adminList, setAdminList] = useState([]);
  const [adminusername, setAdminUsername] = useState("");
  const [adminpassword, setAdminPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  async function fetchData() {
    try {
      const response = await axios.get("/alladmin");
      setAdminList(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  function handleAdminUsernameChange(event) {
    setAdminUsername(event.target.value);
  }

  function handleAdminPasswordChange(event) {
    setAdminPassword(event.target.value);
  }

  function handleLogin() {
    const admin = adminList.find((admin) =>
        admin.adminusername === adminusername && admin.adminpassword === adminpassword
    );
    if (admin) {
      // login successful
      console.log('Login Successful');
      navigate('/admindashboard');

    } else {
      // login failed
      console.log('Login Failed');
      setErrorMessage("Invalid username or password");
    }
  }


  return (
    <div>
      <Adminheader />
      <div class='login-container container font-link'>
        <div class ='login-box bg-light'>	
        <h5>Login</h5>
        
          <div class="form-group">
            <label for="uname"></label>
            <input type="text" class="form-control bg-light" id="uname" placeholder="Username" name="adminusername" value={adminusername} onChange={handleAdminUsernameChange} />
          </div>
          <div class="form-group">
            <label for="pswd"></label>
            <input type="password" class="form-control bg-light" id="pswd" placeholder="Password" name="adminpassword" value={adminpassword} onChange={handleAdminPasswordChange} />
          </div>
          
          {/* <div className="form-check py-3">
            <label className="form-check-label">
              <input type="checkbox" className="form-check-input" value="" />Remember Me
            </label>	
           </div> */}
        <Link to={'/'}>
          <button type = "button" className="btn btn-success my-3 mx-3">Go Home</button>
        </Link>
        <button type = "button" className="btn btn-primary my-3" onClick={handleLogin}>Login</button>
        
        {errorMessage && (
          <div className='alert alert-danger mt-3' role='alert'>
            {errorMessage}
          </div>
        )}
      </div>
      
      </div>
    </div>
  )
}

export default Adminlogin