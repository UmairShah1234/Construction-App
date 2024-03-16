import { Avatar, useMediaQuery } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const nonMobile = useMediaQuery("(min-width: 1200px)");
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-6 d-flex align-items-center">
          {nonMobile ? (
            <>
              <Avatar
                src="/assets/worker.png"
                sx={{
                  height: 500,
                  width: 500,
                }}
                className="shadow"
              />
            </>
          ) : (
            <>
              <Avatar
                src="/assets/worker.png"
                sx={{
                  height: 300,
                  width: 300,
                }}
                className="shadow mx-auto"
              />
            </>
          )}
        </div>
        <div className="col-md-6">
          <h3 className="my-3 text-center">
            <span className="text-secondary ">About</span> <br />
            Company
          </h3>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="info phone "
          >
            <p>
              Welcome to H.A Group, where excellence meets experience. With a
              rich heritage spanning 61 years, we take pride in our diverse
              portfolio encompassing residential, commercial, restoration, new
              construction, bungalows, hospitality, industrial, and every facet
              of the construction industry.
            </p>
            <p>
              Having meticulously crafted projects across various categories, we
              bring a wealth of knowledge and expertise to each endeavor. Our
              commitment to quality and innovation has resulted in the
              construction of an impressive 4.5 million square feet of space to
              date.
            </p>
            <p>
              At H.A Group, we believe in turning visions into reality,
              delivering unparalleled craftsmanship and building enduring
              relationships. Join us on this journey of construction excellence,
              where your dreams take shape, backed by over six decades of
              unwavering commitment and proven success..
            </p>
          </motion.div>
        </div>
      </div>
      {nonMobile ? (
        <>
          <div className="row">
            <div className="col-md-6">
              <h3 className="my-3 text-center">
                <span className="text-secondary">About</span> <br />
                Founder
              </h3>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="info email mb-3"
              >
                <p>
                  In 1963, Late Mr.Haroon Abdul Karim Ghori established M/s HA
                  Construction with a petite tea. Our founder has carried out
                  new Construction and Retrofiting projects of reputed and
                  multi-stored building with more than 50 years of experience in
                  the construction industry. He had grown the company nationally
                  multi disciplianry organization with the projects across India
                </p>
              </motion.div>
            </div>

            <div className="col-md-6 d-flex align-items-center">
              <Avatar
                src="/assets/haroonGhori.jpg"
                sx={{
                  height: 350,
                  width: 350,
                }}
                className="shadow mx-auto"
                variant="square"
              />
              {/* :
        (<>
         <Avatar
  src="/assets/haroonGhori.jpg"
            sx={{
              height: 300,
              width: 300,
            }}
            className="shadow mx-auto"
            variant="square"
          />
        </>)} */}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="row">
            <div className="col-md-6">
              <h3 className="my-3 text-center">
                <span className="text-secondary">About</span> <br />
                Founder
              </h3>
              <div className="info email mb-3">
                <p>
                  In 1963, Late Mr.Haroon Abdul Karim Ghori established M/s HA
                  Construction with a petite tea. Our founder has carried out
                  new Construction and Retrofiting projects of reputed and
                  multi-stored building with more than 50 years of experience in
                  the construction industry. He had grown the company nationally
                  multi disciplianry organization with the projects across India
                </p>
              </div>
            </div>

            <div className="col-md-6 d-flex align-items-center">
              <Avatar
                src="/assets/haroonGhori.jpg"
                sx={{
                  height: 250,
                  width: 250,
                }}
                className="shadow mx-auto"
                variant="square"
              />
            </div>
          </div>
        </>
      )}
      {nonMobile ? (
        <>
          <div className="row mb-5">
            <div className="col-md-6 d-flex align-items-center">
              <Avatar
                src="/assets/jameelGhori.jpg"
                sx={{
                  height: 400,
                  width: 350,
                  objectFit: "scale-down",
                }}
                className="shadow mx-auto"
                variant="square"
              />
            </div>
            <div className="col-md-6 d-flex align-items-center">
              {/* <h3 className="my-3 text-center">
            <span className="text-secondary">About</span> <br />
            Founder
          </h3> */}

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="info email  "
              >
                <p className="">
                  In 1963, Late Mr.Haroon Abdul Karim Ghori established M/s HA
                  Construction with a petite tea. Our founder has carried out
                  new Construction and Retrofiting projects of reputed and
                  multi-stored building with more than 50 years of experience in
                  the construction industry. He had grown the company nationally
                  multi disciplianry organization with the projects across India
                </p>
              </motion.div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="row mb-5">
            <div className="col-md-6 mt-5 d-flex align-items-center">
              <div className="info email  ">
                <p className="">
                  In 1963, Late Mr.Haroon Abdul Karim Ghori established M/s HA
                  Construction with a petite tea. Our founder has carried out
                  new Construction and Retrofiting projects of reputed and
                  multi-stored building with more than 50 years of experience in
                  the construction industry. He had grown the company nationally
                  multi disciplianry organization with the projects across India
                </p>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <Avatar
                src="/assets/jameelGhori.jpg"
                sx={{
                  height: 300,
                  width: 250,
                  objectFit: "scale-down",
                }}
                className="shadow mt-3 mx-auto"
                variant="square"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default About;
