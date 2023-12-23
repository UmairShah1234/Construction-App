import React from "react";
import { clients } from "../data/clients";

const Clients = () => {
  return (
    <>
      <div className="container mb-5 p-3">
        <div className="heading mt-2 text-center">
          <span className="">Our Happy Customers</span>
          <h2 className="">Some Of Our Clients</h2>
          <p className="p-3">
            We take immense pride in our collaboration with these exceptional
            organizations and individuals. Their trust in our services and
            products has been the cornerstone of our success. Thank you to each
            and every one of our valued clients for choosing us as their
            partner. Your support and loyalty drive us to continuously strive
            for excellence. Here's to the past, present, and future partnerships
            that inspire us to keep growing, innovating, and achieving together.
            A Heartfelt 'Thank You' to Our Clients!
          </p>
        </div>
        <div className="row row-cols-3">
        {/* className="img-fluid" */}
        {clients.map((client) => (
          <>
              <div className="col border border-2 p-1 clients-logos d-flex justify-content-center  align-items-center text-center ">
                <div className="brand-logo">
                  {" "}
                  <img src={client.img} className="img-fluid " alt="clients"  />
                </div>
              </div>
          </>
        ))}
        </div>
      </div>
    </>
  );
};

export default Clients;
