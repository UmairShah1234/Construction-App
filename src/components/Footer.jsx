import React from "react";
import Maps from "./Maps";
import { Link } from "react-router-dom";
import { Avatar, useMediaQuery } from "@mui/material";
import { Business, Email,  Phone, PhoneIphone } from "@mui/icons-material";
const Footer = () => {
 
    const emailAddress = "devlanzzer@gmail.com";
    const isNonMobile = useMediaQuery("(min-width: 1200px)");
    return (
    
      <>
      <div className="footer">
        {isNonMobile ? (
          <div className=" text-dark  py-3">
            <div className="container">
              <div className="row">
                <div className="col-3 d-flex justify-content-center align-items-center">
                  <div className="">
                    <Avatar src="/assets/Logo.png"  alt="" variant="rounded" sx={{  width: 200,
    height: 267, // Adjusted height to maintain a 3:4 aspect ratio
    objectFit: "cover"}} />
                  </div>
                  {/* <h2 className="">Past Time Entertainment</h2> */}
                </div>
  
                <div className="col-3">
                  <h2 className="">Company</h2>
                  <div className="col list-group ">
                 
                  
                    <Link
                      to="/"
                      className="mb-3 text-decoration-none text-dark "
                    >
                      Home
                    </Link>
                    <Link
                      to="/what-we-do"
                      className="mb-3 text-decoration-none text-dark"
                    >
                      About
                    </Link>
                    <Link
                      to="/events"
                      className="mb-3 text-decoration-none text-dark "
                    >
                      Clients
                    </Link>
                    <Link
                      to="/conflict-management"
                      className="mb-3 text-decoration-none text-dark "
                    >
                      Certifications
                    </Link>
                  </div>
                </div>
                <div className="col-3">
                  <h2 className="">Projects</h2>
                  <div className="col list-group ">
                 
                    <Link
                      to="/residential-projects"
                      className="mb-3 text-decoration-none text-dark "
                    >
                     Residential Projects
                    </Link>
                    <Link
                      to="/commercial-projects"
                      className="mb-3 text-decoration-none text-dark "
                    >
                         Commercial Projects
                    </Link>
                    <Link
                      to="/events"
                      className="mb-3 text-decoration-none text-dark "
                    >
                      Clients
                    </Link>
                    <Link
                      to="/conflict-management"
                      className="mb-3 text-decoration-none text-dark "
                    >
                      Certifications
                    </Link>
                  </div>
                </div>
  
               
  
                <div className="col-3">
                  <h2 className="">Contacts</h2>
                  <div className="col list-group">
                  <Link
                      to={`mailto:${emailAddress}`}
                      className="mb-3 text-decoration-none text-dark"
                    >
                    <Email /> haenggllp@gmail.com
                    </Link>
                    <Link to="" className="mb-3 text-decoration-none text-dark">
                    <Phone />Office +91 22-28505831/30
                    </Link>
                    <Link
                    to="https://wa.me/+919821145831"
                    target="_blank"
                    className="mb-3 text-decoration-none text-dark"
                  >
                    <PhoneIphone />Jameel Ahmed Ghori +91 9821145831
                  </Link>
                  <Link
                    to="https://wa.me/+918767272913"
                    target="_blank"
                    className="mb-3 text-decoration-none text-dark"
                  >
                    <PhoneIphone />Zibran Ahmed Ghori +91 8767272913
                  </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="accordion  " id="accordionExample">
              <div className="accordion-item ">
                <h2 className="accordion-header ">
                  <button
                    className="accordion-button  text-dark"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Company
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse  "
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body ms-3 text-dark col list-group">
                  <Link
                      to="/"
                      className="mb-3 text-decoration-none text-dark "
                    >
                      Home
                    </Link>
                    <Link
                      to="/what-we-do"
                      className="mb-3 text-decoration-none text-dark"
                    >
                      About
                    </Link>
                    <Link
                      to="/events"
                      className="mb-3 text-decoration-none text-dark "
                    >
                      Clients
                    </Link>
                    <Link
                      to="/conflict-management"
                      className="mb-3 text-decoration-none text-dark "
                    >
                      Certifications
                    </Link>
                  </div>
                </div>
              </div>
              <div className="accordion-item ">
                <h2 className=" accordion-header ">
                  <button
                    className="accordion-button collapsed  text-dark"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Projects
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse "
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body ms-3 col list-group  text-dark">
                  <Link
                      to="/residential-projects"
                      className="mb-3 text-decoration-none text-dark "
                    >
                     Residential Projects
                    </Link>
                    <Link
                      to="/commercial-projects"
                      className="mb-3 text-decoration-none text-dark "
                    >
                         Commercial Projects
                    </Link>
                    <Link
                      to="/events"
                      className="mb-3 text-decoration-none text-dark "
                    >
                      Clients
                    </Link>
                    <Link
                      to="/conflict-management"
                      className="mb-3 text-decoration-none text-dark "
                    >
                      Certifications
                    </Link>
                  </div>
                </div>
              </div>
              <div className="accordion-item ">
                <h2 className="accordion-header ">
                  <button
                    className="accordion-button collapsed  text-dark"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Contacts
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse "
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body ms-3 col list-group  text-dark">
                    <Link
                      to={`mailto:${emailAddress}`}
                      className="mb-3 text-decoration-none text-dark"
                    >
                   <Email /> haenggllp@gmail.com
                    </Link>
                    <Link to="" className="mb-3 text-decoration-none text-dark">
                    <Phone />Office +91 22-28505831/30
                    </Link>
                    <Link
                    to="https://wa.me/+919821145831"
                    target="_blank"
                    className="mb-3 text-decoration-none text-dark"
                  >
                    <PhoneIphone />Jameel Ahmed Ghori +91 9821145831
                  </Link>
                  <Link
                    to="https://wa.me/+918767272913"
                    target="_blank"
                    className="mb-3 text-decoration-none text-dark"
                  >
                    <PhoneIphone />Zibran Ahmed Ghori +91 8767272913
                  </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className=" text-dark p-3 text-center">
          <span>
            © Copyright 2023 | All Rights Reserved HA Group
          </span>
        </div>
        </div>
      </>




   
  );
};

export default Footer;
