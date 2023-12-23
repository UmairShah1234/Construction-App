import React from "react";
import NumberCard from "../components/NumberCard";
import ChooseCard from "../components/ChooseCard";
import AboutHome from "../components/AboutHome";
import Title from "../components/Title";
import ProjectCard from "../components/ProjectCard";
import CarouselComp from "../components/CarouselComp";
import { clients } from "../data/clients";

const Home = () => {
  return (
    <div>
      {/* carousel component */}
      <div className="my-3">
        <CarouselComp />
      </div>
      <div className="container">
        {/* about section */}
        <AboutHome />

        {/* box section */}
        <div className="row m-3">
          <div className="col-md-3">
            <NumberCard
              number={20}
              text={"million sq ft"}
              desc={"TOTAL CONSTRUCTED AREA TILL DATE"}
              color={1}
            />
          </div>

          <div className="col-md-3">
            <NumberCard
              number={20}
              text={"million sq ft"}
              desc={"OF SAFE, ACCIDENT-FREE WORKING"}
              color={2}
            />
          </div>

          <div className="col-md-3">
            <NumberCard
              number={20}
              text={"million sq ft"}
              desc={"BUILT SINCE INCEPTION"}
              color={1}
            />
          </div>

          <div className="col-md-3">
            <NumberCard
              number={20}
              text={"million sq ft"}
              desc={"BUILT SINCE INCEPTION"}
              color={2}
            />
          </div>
        </div>

        {/* project sections */}
        <hr />
        <div className="mb-1">
          <div className="d-flex justify-content-between mb-3">
            <h3 className="">
              <span className="border-bottom border-danger">
                <span className="text-secondary">Check</span> <br />
                Out Our Recent Projects
              </span>
            </h3>
            <div className="  align-items-center d-flex">
              <div className="rounded-0 btn btn-outline-danger">More</div>
            </div>
          </div>

          <div className="row mb-1 bg-secondary">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>

        {/* why choose us section */}
        <hr />
        <div className="my-3">
          <h3 className="text-center p-3">
            <span className="border-bottom border-danger">Why Choose Us?</span>
          </h3>

          <div className="row">
            <div className="col-md-4">
              <ChooseCard color />
            </div>
            <div className="col-md-4">
              <ChooseCard />
            </div>
            <div className="col-md-4">
              <ChooseCard color />
            </div>
            <div className="col-md-4">
              <ChooseCard />
            </div>
            <div className="col-md-4">
              <ChooseCard color />
            </div>
            <div className="col-md-4">
              <ChooseCard />
            </div>
          </div>

          <hr />
          <div className="mt-3 p-3 mb-5">
            <h3></h3>
            <marquee>
              {clients.map((client) => (
                <img
                  src={client.img}
                  className="img-fluid me-4"
                  alt="certificate"
                />
              ))}
            </marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
