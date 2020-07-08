import React from "react";
import UserRow from "./UserRow";

function Table () {
    return (
      // <div className="row m-5">
      //   <div className="col-md-2"><h4 className="Bold">Photo</h4></div>
      //   <div className="col-md-2"><h4 className="Bold">First-Name</h4></div>
      //   <div className="col-md-2"><h4 className="Bold">Last-Name</h4></div>
      //   <div className="col-md-2"><h4 className="Bold">Email</h4></div>
      //   <div className="col-md-2"><h4 className="Bold">Phone</h4></div>
      //   <div className="col-md-2"><h4 className="Bold">Age</h4></div>
      // </div>
 
    <div className="row">
      <div className="col-md-2"><h5><strong>Pic</strong></h5></div>
      <div className="col-md-2"><h5><strong>First</strong></h5></div>
      <div className="col-md-2"><h5><strong>Last</strong></h5></div>
      <div className="col-md-2"><h5><strong>Email</strong></h5></div>
      <div className="col-md-2"><h5><strong>Phone</strong></h5></div>
      <div className="col-md-2"><h5><strong>Age</strong></h5></div>
    </div>
  
  /* <tbody>
    <tr>
      <td>Alex</td>
      <td>Waite</td>
      <td>AlexWaite@hmm.com</td>
      <td>123-123-1234</td>
    </tr>
  </tbody> */

    )
}

export default Table;