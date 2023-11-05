import React, { useState } from "react";
import axios from "axios";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import Maps from "../components/Maps";

const ContactUs = () => {
  const emailAddress = "devlanzzer@gmail.com";
  const mobileNum = "+91 8692881750";
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("formSubmit called");
    try {
      await axios.post("http://localhost:5001/api/send-email", formData);
      setShowSuccessAlert(true);

      setFormData({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      setShowErrorAlert(true);
    }
  };
  return (
    <>
      
      <div className="contact-us  bg-danger p-3">
        <div className="contact form contactForm ">
        {showSuccessAlert && (
        <div
          className="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          <strong>Thank you!</strong> For submitting your information we will
          get back to you soon.
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          />
        </div>
      )}
      {showErrorAlert && (
        <div
          className="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          <strong>Oops!</strong>There was some problem while submitting the
          form, Please try Submitting again.
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          />
        </div>
      )}
          <h3 className="card-title ">Want To Connect with Us?</h3>
          <p>Fill the details given below to connect to us</p>

          <hr />

          <form onSubmit={handleSubmit}>
            <div className="formBox row g-2">
              <div className="inputBox col-6">
                <input
                  type="text"
                  className=" "
                  id="textInput"
                  aria-describedby="textHelp"
                  name="fname"
                  value={formData.fname}
                  onChange={handleChange}
                  required
                />
                <span className="">First Name</span>
                {/* <div id="emailHelp" className="form-text">
                    Your Details are completely secure.
                  </div> */}
              </div>
              <div className="inputBox col-6">
                <input
                  type="text"
                  className=" "
                  id="textInput"
                  aria-describedby="textHelp"
                  name="lname"
                  value={formData.lname}
                  onChange={handleChange}
                  required
                />
                <span className="">Last Name</span>
                {/* <div id="emailHelp" className="form-text">
                    Your Details are completely secure.
                  </div> */}
              </div>
              <div className="inputBox col-6">
                <input
                  type="email"
                  className=""
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <span className="">Email address</span>
                {/* <div id="emailHelp" className="form-text">
                    Your Details are completely secure.
                  </div> */}
              </div>
              <div className="inputBox col-6">
                <input
                  type="tel"
                  className="  "
                  id="exampleInputPassword1"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <span className="">Phone Number</span>
              </div>

              <div className="inputBox">
                <textarea
                  type="text"
    
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <span >Write Your Message.....</span>
              </div>
              <div className="inputBox ">
                <button type="submit" className="btn btn-outline-danger">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="contact info ">
          <h3>Contact Info</h3>
          <div className="infoBox  ">
            <div className="">
              <span>
                <LocationOnIcon />
              </span>
              <p>
                B-206, NAVKAR CHAMBER, MAROL NAKA,ANDHERI KURLA ROAD, ANDHERI
                EAST, Mumbai-400059, Maharashtra <br />
                INDIA
              </p>
            </div>
            <div className="">
              <span>
                <EmailIcon />
              </span>
              <Link
                className="text-dark text-decoration-none"
                to={`mailto:${emailAddress}`}
              >
                devlanzzer@gmail.com
              </Link>
            </div>
            <div className="">
              <span>
                <PhoneIphoneIcon />
              </span>
              <Link
                className="text-dark text-decoration-none"
                to={`tel: ${mobileNum}`}
              >
                +91 8692881750
              </Link>
              {/* if we want to put social media icons */}
            </div>
          </div>
        </div>
        <div className="contact map ">
          <Maps />
        </div>
      </div>
    </>
  );
};

export default ContactUs;
