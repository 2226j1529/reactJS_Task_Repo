import React from "react";
function PersonalDetails() {
  let Display = () => {
    let name = document.getElementById("name").value;
    let dob = document.getElementById("dob").value;
    let contact = document.getElementById("contact").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    alert("Thank you " + name + " You've Successfully Submitted!");
  };
  return (
    <>
      <h1><u>Personal Details</u></h1>
      <br></br>
      <label>Name:</label>
      <input type="text" id="name" name="name" placeholder="Enter Your Name" />
      <br />
      <br />
      <label>DOB:</label>
      <input type="date" id="dob" name="dob" />
      <br />
      <br />
      <label>Contact Number:</label>
      <input type="tel" id="contact" name="contact" placeholder="Enter Your Number"/>
      <br />
      <br />
      <label>Email:</label>
      <input type="email" id="email" name="email" placeholder="Enter Your EmailId"/>
      <br />
      <br />
      <label>Address:</label>
      <textarea id="address" name="address" rows="3" cols="35" placeholder="Enter Your Address">
      </textarea>
      <br />
      <br />
      <button onClick={Display}>Submit Here</button>
    </>
  );
}

export default PersonalDetails;
