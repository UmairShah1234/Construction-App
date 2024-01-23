import React from "react";
import NumberCard from "../components/NumberCard";
import ChooseCard from "../components/ChooseCard";
import AboutHome from "../components/AboutHome";
import Title from "../components/Title";
import ProjectCard from "../components/ProjectCard";
import CarouselComp from "../components/CarouselComp";
import { clients } from "../data/clients";
import { commercial_projects, residential_project } from "../data/projects";
import ProjectTable from "../components/ProjectTable";

const Home = () => {
  return (
    <div>
      {/* carousel component */}
      <div className="">
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

          <div className="row mb-1 shadow-lg">
            {Object.keys(residential_project).map((cat) =>
              Object.keys(residential_project[cat]).map((subcat) =>
                residential_project[cat][subcat]
                  .filter(
                    (project) =>
                      1 <= project.project_id && project.project_id < 5
                  )
                  .map((project) => (
                    <ProjectCard
                      img={project.img}
                      key={project.project_id}
                      name={project.project_name}
                      location={project.location}
                      id={project.project_id}
                    />
                  ))
              )
            )}
            {Object.keys(commercial_projects).map((cat) =>
              Object.keys(commercial_projects[cat]).map((subcat) =>
                commercial_projects[cat][subcat]
                  .filter(
                    (project) =>
                      8 <= project.project_id && project.project_id < 12
                  )
                  .map((project) => (
                    <ProjectCard
                      img={project.img}
                      key={project.project_id}
                      name={project.project_name}
                      location={project.location}
                      id={project.project_id}
                    />
                  ))
              )
            )}
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
              {clients.map((client, i) => (
                <img
                  key={i}
                  src={client.img}
                  className="img-fluid me-4"
                  alt="certificate"
                />
              ))}
            </marquee>
          </div>
        </div>
      </div>

      <div className="container">
        <ProjectTable />
      </div>
    </div>
  );
};

export default Home;
