import React from "react";

function profile() {
  return <div class="transactwrapper">
    <div class="container">
      <div class="transactheader">
        <h2>It has always been about you</h2>
        <p>We only want what is best for you and we can only make that happen if we know you.</p>
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
