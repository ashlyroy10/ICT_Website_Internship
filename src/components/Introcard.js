import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Introcard = () => {

  const [courseList, setCourseList] = useState([]);

useEffect(() => {
    
  axios.get('/allcourse')
    .then((response) => {
      setCourseList(response.data);
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });

}, []);



  return (
    <div class="row row-cols-1 row-cols-md-3 g-4 text-center">
      {courseList.slice(0, 6).map((course) => (          
          <div class="col" key={course.coursetitle}>
          <div class="card1  border border-light-subtle rounded-3 border-4">
            <img src={course.thumbImage} class="card-img-top" alt="..."/>
            <div class="card-body p-3">
              <Link to={`/courses/${course.coursetype}/${course._id}`}><h6 class="card-title">{course.coursetitle}</h6></Link>
            </div>
          </div>
        </div>
        ))}
      
     
  
    </div>
  );
};

export default Introcard;
