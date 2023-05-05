import React from "react";
import Intropic from "../assets/images/Ictintro.png";
const Intropart = () => {
  return (
    <div>
      <div classname="nice container-fluid">
          <div classname="row">
            <div class="col-6 p1">
              <h2>Build your Dream Career with ICTAK</h2>
              <h5>
                ICT Academy of Kerala (ICTAK) is a social enterprise officially
                launched on the 24th of June, 2014. The organization had a
                humble beginning providing skill training programs to selected
                academic institutions. Over the years, ICTAK has grown to a
                prime service provider of all ICT and innovation-related
                training and capacity-building programs in the state.
              </h5>

              <button type="button" class="btn btn-danger btn-lg fw-small">
                Know More
              </button>
              
            </div>
            <div className="col-6">
                <img
                  src={Intropic}
                  className="intro-pic img-fluid"
                  alt="intropic of ICT"
                  width="550"
                  height="400"
                />
                {/* <img src={Intropic}  alt="intropic of ICT" width="500" height="350" class="animationpic"/> */}
              </div>
          </div>
        </div>
    </div>
  );
};

export default Intropart;
