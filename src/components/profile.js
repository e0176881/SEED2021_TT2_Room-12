import React from "react";

function profile() {
  return <div class="section-title">
    <div class="container">
      <div class="section-title">
        <h2>About you</h2>
        <p>We love to know more about you so that we make sure you get nothing but the best from us. Do update your details with us if they aren't correct.</p>
      </div>
      <div class="row">
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div class="icon-box">
              <div class="icon"><i class="bx bxl-dribbble"></i></div>
              <h4>Full Name</h4>
              <p>insert da name</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
            <div class="icon-box">
              <div class="icon"><i class="bx bx-tachometer"></i></div>
              <h4>NRIC</h4>
              <p>NRIC</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
            <div class="icon-box">
              <div class="icon"><i class="bx bx-tachometer"></i></div>
              <h4>Phone Number</h4>
              <p>Number</p>
            </div>
          </div>
        </div>
    </div>
  </div>;
}

export default profile;
