import React, { useEffect, useState } from "react";
import coursedp from "../assets/images/coursepic.png";
import HeaderMain from "./HeaderMain";
import { Link, useParams } from "react-router-dom";
import Footer from "./Footer";
import axios from "axios";

const Detailedcards = () => {
  
  let { code } = useParams();
  let fpath = "http://localhost:5000/uploads/coursethumb/";

  const [typecourse, settypecourse] = useState([]);

  useEffect(() => {
    console.log(code);
    axios.get(`/coursebytype/${code}`)
      .then((response) => {
        settypecourse(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <HeaderMain />
      <div class="row row-cols-1 row-cols-md-4 g-9 m-5 p-4">
        {typecourse.map((value, index) => (
          <div class="col p-3" key={index}>
            <div class="card1 h-100 border border-light-subtle rounded-3 border-4">
              <img src={fpath+value.thumbImage} class="card-img-top" alt={value.coursetitle+"image"} />
              <div class="card-body p-3">
                <Link to={`/courses/${value.coursetype}/${value._id}`}>
                  <h6 class="card-title">{value.coursetitle}</h6>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Detailedcards;
