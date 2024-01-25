import { Avatar } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-6 d-flex align-items-center">
          <Avatar
            src="/public/assets/worker.png"
            sx={{
              height: 500,
              width: 500,
            }}
            className="shadow"
          />
        </div>
        <div className="col-md-6">
          <h3 className="my-3">
            <span className="text-secondary">About</span> <br />
            Company
          </h3>
          <div className="info phone ">
            <p>
            Welcome to H.A Group, where excellence meets experience. With a rich heritage spanning 61 years, we take pride in our diverse portfolio encompassing residential, commercial, restoration, new construction, bungalows, hospitality, industrial, and every facet of the construction industry.
            </p>
            <p>
            Having meticulously crafted projects across various categories, we bring a wealth of knowledge and expertise to each endeavor. Our commitment to quality and innovation has resulted in the construction of an impressive 4.5 million square feet of space to date.
            </p>
            <p>
            At H.A Group, we believe in turning visions into reality, delivering unparalleled craftsmanship and building enduring relationships. Join us on this journey of construction excellence, where your dreams take shape, backed by over six decades of unwavering commitment and proven success..
            </p>
           
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <h3 className="my-3">
            <span className="text-secondary">About</span> <br />
            Founder
          </h3>
          <div className="info email mb-3">
            <p>
              In 1963, Late Mr.Haroon Abdul Karim Ghori established M/s HA Construction with a petite tea. Our founder has carried out new Construction and Retrofiting projects of reputed and multi-stored building with more than 50 years of experience in the construction industry. He had grown the company nationally multi disciplianry organization with the projects across India
            </p>
            
          </div>
        </div>

        <div className="col-md-6 d-flex align-items-center">
          <Avatar
            src="https://www.shutterstock.com/image-photo/group-portrait-happy-confident-young-260nw-1904033500.jpg"
            sx={{
              height: 500,
              width: 500,
            }}
            className="shadow"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
