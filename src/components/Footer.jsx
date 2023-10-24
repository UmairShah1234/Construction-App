import React from "react";
import Maps from "./Maps";

const Footer = () => {
  return (
    <div className="shadow p-3 mt-3">
      <div className="px-3">
        <div className="d-flex justify-content-between">
          <div className="">
            <img src="/src/assets/Logo.png" alt="" width="100" height="100" />
          </div>

          {/* <div className="border"><Maps/></div> */}

          <div className="d-flex ">
            <div className="p-3">
              <h3>Quick Links</h3>
              <div className="d-flex">
                <div className="p-1">
                  <p>Home</p>
                  <p>Projects</p>
                  <p>Certifications</p>
                </div>
              </div>
            </div>

            <div className="p-3">
              <h3>Contacts</h3>
              <p>+91 9987654561</p>
              <p>companyname@gmail.com</p>
              <p>Address</p>
            </div>
          </div>
        </div>
        <p className="p-1 text-center">
          Copyright © 2020 Jaatvedas . All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
