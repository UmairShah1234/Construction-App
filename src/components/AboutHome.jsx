import { useMediaQuery } from "@mui/material";
import React from "react";

const AboutHome = () => {
  const nonMobile = useMediaQuery("(min-width: 1200px)");

  const isMobile = (
    <div className=" d-flex justify-content-center">
      <img src="/assets/aboutesign.png" alt="" width="300" height="300" />
      {/* <img src="/public/assets/Building Your Dreams.png" alt="" width="300" height="300" /> */}
    </div>
  );

  const isNonMobile = (
    <div className="col-md-6  text-center">
      <img src="/assets/aboutesign.png" alt="" style={{objectFit:'fill'}} width="400" height="400" />
    </div>
  );
  return (
    <div className="border-top m-1">
      <div className="container row p-5">
        {nonMobile ? isNonMobile : isMobile}
        <div className="card-body col-md-6">
          <h3>
            About <br />
            HA Group Of Construction
          </h3>
          <p>
            Welcome to H.A Group, where excellence meets experience. With a rich
            heritage spanning 61 years, we take pride in our diverse portfolio
            encompassing residential, commercial, restoration, new construction,
            bungalows, hospitality, industrial, and every facet of the
            construction industry.
          </p>
          <p>
            Having meticulously crafted projects across various categories, we
            bring a wealth of knowledge and expertise to each endeavor. Our
            commitment to quality and innovation has resulted in the
            construction of an impressive 4.5 million square feet of space to
            date.
          </p>
          <p>
            At H.A Group, we believe in turning visions into reality, delivering
            unparalleled craftsmanship and building enduring relationships. Join
            us on this journey of construction excellence, where your dreams
            take shape, backed by over six decades of unwavering commitment
            and proven success..
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutHome;
