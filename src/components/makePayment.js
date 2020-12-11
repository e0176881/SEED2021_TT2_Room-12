import React from "react";

function makePayment() {
  return <div class="section-title">
      <div class="container">
      <div class="row">
            <div class="col-md-6">
              <div class="icon-box">
                <h4>Ready to make quick payments?</h4>
                <p>Don't worry, we've got you! Make fast and secure payments to anyone now!</p>
              </div>
            </div>
            <div class="col-md-6 mt-4 mt-lg-0">
              <div class="icon-box">
                <form>
                  <input
                    type="text"
                    name="payeename"
                    className="form-control"
                    placeholder="Enter Payee NRIC"
                  />
                  <input
                    type="float"
                    name="payamount"
                    className="form-control"
                    placeholder="Enter Amount"
                  />
                  <br></br>
                  <button type="submit" className="btn btn-dark btn-lg btn-block">
                    Pay Lor!
                  </button>
                </form>
              </div>
            </div>
        </div>
      </div>
    </div>;
}

export default makePayment;
