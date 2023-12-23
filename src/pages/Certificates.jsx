import React from "react";
import { certificates } from "../data/certificates";

const Certificates = () => {
  return (
    <>
      <div className="container mb-5 p-3">
        <div className="heading mt-2 text-center">
          <span className="">
            Certainly! Here's a concise piece of content to display on your
            webpage when showcasing your certifications:
          </span>
          <h2 className="">Our Certifications:</h2>
          <p className="p-3">
            {" "}
            At H.A Group, we pride ourselves on a commitment to excellence and
            continuous improvement. Our certifications are a testament to our
            dedication to maintaining the highest standards in our
            industry.Explore our certifications to see the quality and
            professionalism that underpin our work. We are driven by a pursuit
            of knowledge and a desire to deliver the best to our clients.These
            certifications represent not only our achievements but also our
            promise to you. Trust us to meet and exceed your expectations.
            Excellence, Certified.
          </p>
        </div>
        <div className="row row-cols-3">
          {/* className="img-fluid" */}
          {certificates.map((certificate) => (
            <>
              <div className="col p-1 border border-2 certifcates d-flex justify-content-center  align-items-center text-center ">
                <div className="certifcate-img">
                  {" "}
                  <img
                    src={certificate.img}
                    className="img-fluid "
                    alt="certificate"
                  />
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Certificates;
