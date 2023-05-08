import React, { useEffect, useState } from 'react'
import '../assets/css/style.css'
import axios from 'axios';


const Team = () => {

  const [staffList, setstaffList] = useState([]);
  // const filepath = 'http://localhost:5000/uploads/staffprofile/';

  useEffect(() => {
    async function fetchstaff() {
      try {
        const response = await axios.get('/allstaff');
        setstaffList(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchstaff();
  }, []);



  return (
    <div className='font-link'>
      <br/>
      <div class="row row-cols-1 row-cols-md-4 g-4">
      {staffList.map((value, index) => (
        <div class="col" key={index}>
       
          <div class="teamcard card"  >
            <img src={value.photo} class="card-img-top" alt="img"/>
            <div class="card-custom card-body">
              <h5 class="card-title">{value.staffname}</h5>
              <p class="card-text"><small>{value.designation}</small></p>
            </div>
          </div>
        
        </div>
        ))}
      </div>
    </div>

  
  )
}

export default Team