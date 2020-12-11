import React from "react";

function transactionHistory() {
  return (
  <div class="transactwrapper">
      <h1 class="transactheader">Transaction History</h1>

      <table class="transacttable">
         <tr>
         <td>date and time</td>
         <td>payee name</td>
         <td>amount</td>
         </tr>
      </table>

  </div>);
}

export default transactionHistory;
