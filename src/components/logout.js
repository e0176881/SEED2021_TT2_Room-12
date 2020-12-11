import react from "react";

function Logout() {
  //localStorage.removeItem("userLoginDetails");
  window.location = "/login";
}

export default Logout;
