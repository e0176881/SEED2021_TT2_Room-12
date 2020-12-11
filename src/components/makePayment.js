import React from "react";
import { useForm } from "react-hook-form";
import { useEffect, useState, Redirect } from "react";
import axios from "axios";
function MakePayment() {
  const { register, handleSubmit } = useForm();
  const [custId, setCustId] = useState("");

  const onSubmit = (data) => {
    setCustId(JSON.parse(localStorage.getItem("userLoginDetails")).custID);
    var date = new Date();
    axios
      .post("/api/addtransaction", {
        custID: custId,
        payeeID: 1,
        dateTime: date,
        amount: data.amount,
        expensesCat: data.expCat,
        eGift: data.eGift,
        message: data.message,
      })
      .then(function (response) {
        console.log(response.data);

        // console.log("test" + { token });

        // setRedirect(true);

        //return <Redirect to="./shop" />;
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div class="section-title">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="icon-box">
              <h4>Ready to make quick payments?</h4>
              <p>
                Don't worry, we've got you! Make fast and secure payments to
                anyone now!
              </p>
            </div>
          </div>
          <div class="col-md-6 mt-4 mt-lg-0">
            <div class="icon-box">
              <form onSubmit={handleSubmit(onSubmit)}>
                <label>Payee's NRIC</label>
                <input
                  type="text"
                  name="payeenric"
                  className="form-control"
                  placeholder="Enter Payee NRIC"
                />
                <label>Amount</label>
                <input
                  type="number"
                  name="amount"
                  className="form-control"
                  placeholder="Enter Amount"
                />
                <label>Expense Category</label>
                <div class="form-group">
                  <select class="form-control">
                    <option value="insurance">Insurance</option>
                    <option value="food">Food</option>
                    <option value="transport">Transport</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="shopping">Shopping</option>
                    
                  </select>
                </div>
               

                <label>Message</label>
                <input
                  type="text"
                  name="message"
                  className="form-control"
                  placeholder="Enter Message"
                />

                <br></br>
                <button type="submit" className="btn btn-dark btn-lg btn-block">
                  Pay lor!
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MakePayment;
