import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { residential_project } from "../data/projects";
import ProjectTable from "../components/ProjectTable";
import ResidentialTable from "../components/ResidentialTable";

const ResidentialProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const [selectedSubCategory, setSelectedSubCategory] =
    useState("new_construction");

  // const handleBtnClick = () => {

  //   setSelectedCategory(!isSelected);
  // }
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  const handleSubCategoryChange = (subCategory) => {
    setSelectedSubCategory(subCategory);
  };

  return (
    <>
      <div className="container p-3  phone  my-3">
        <h3 className="">
          <span className="border-bottom border-danger">
            Explore Our Residential Projects:
          </span>
        </h3>
        <p className="p-1 ">
          Welcome to our portfolio of completed projects, where creativity meets
          excellence. Each project represents a testament to our commitment to
          innovation, quality, and client satisfaction. Browse through our
          diverse range of projects, each telling a unique story of our
          expertise and passion. From concept to execution, we take pride in
          every detail. We look forward to sharing our journey and inviting you
          to be a part of our future projects. Your vision, our dedication.
        </p>
        <h5 className="">
          <span className="">Discover, Inspire, Collaborate!</span>
        </h5>
        <hr />
      </div>
      <div className="container mb-1">
        <button
          onClick={() => {
            // handleBtnClick("all")
            handleCategoryChange("all");
          }}
          className={`btn btn-outline-danger rounded-2`}
        >
          All
        </button>
        <div className="btn-group mx-2">
          <button
            type="button"
            className={`btn btn-outline-danger rounded-2 dropdown-toggle`}
            data-bs-toggle="dropdown"
            aria-expanded="false"
            onClick={() => {
              // handleBtnClick("ongoing")
              handleCategoryChange("ongoing");
            }}
          >
            Ongoing
          </button>
          <ul className="dropdown-menu">
            <li>
              <a
                onClick={() => handleSubCategoryChange("new_construction")}
                className="dropdown-item"
              >
                NewConstuction
              </a>
            </li>
            <li>
              <a
                onClick={() => handleSubCategoryChange("restoration")}
                className="dropdown-item"
              >
                Restoration
              </a>
            </li>
          </ul>
        </div>
        <div className="btn-group mx-2">
          {/* ${selectedCategory==="completed"? 'btn-danger ' : 'btn-outline-danger'} */}
          <button
            type="button"
            className={`btn btn-outline-danger  rounded-2 dropdown-toggle `}
            data-bs-toggle="dropdown"
            aria-expanded="false"
            onClick={() => {
              // handleBtnClick("completed")
              handleCategoryChange("completed");
            }}
          >
            Completed
          </button>
          <ul className="dropdown-menu">
            <li>
              <a
                onClick={() => handleSubCategoryChange("new_construction")}
                className="dropdown-item"
              >
                NewConstuction
              </a>
            </li>
            <li>
              <a
                onClick={() => handleSubCategoryChange("restoration")}
                className="dropdown-item"
              >
                Restoration
              </a>
            </li>
          </ul>
        </div>
      </div>
      {selectedCategory === "all" ? (
        <div className="d-flex justify-content-center align-items-center row row-cols-sm-4 row-cols-1 ms-2">
          {Object.keys(residential_project).map((cat) =>
            Object.keys(residential_project[cat]).map((subcat) =>
              residential_project[cat][subcat].map((project) => (
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
      ) : (
        <>
          {selectedCategory === "ongoing" ? (
            <>
              <div className=" d-flex justify-content-center align-items-center row row-cols-sm-4 row-cols-1 ms-2">
                {selectedSubCategory === "new_construction" ? (
                  <>
                    {residential_project["ongoing"]["new_construction"].map(
                      (project) => (
                        <>
                          <ProjectCard
                            img={project.img}
                            key={project.project_id}
                            name={project.project_name}
                            location={project.location}
                          />
                        </>
                      )
                    )}{" "}
                  </>
                ) : (
                  <>
                    {residential_project["ongoing"]["restoration"].map(
                      (project) => (
                        <>
                          <ProjectCard
                            img={project.img}
                            key={project.project_id}
                            name={project.project_name}
                            location={project.location}
                          />
                        </>
                      )
                    )}{" "}
                  </>
                )}
              </div>
            </>
          ) : (
            <>
              <div className=" d-flex justify-content-center align-items-center row row-cols-sm-4 row-cols-1 ms-2">
                {selectedSubCategory === "new_construction" ? (
                  <>
                    {residential_project["completed"]["new_construction"].map(
                      (project) => (
                        <>
                          <ProjectCard
                            img={project.img}
                            key={project.project_id}
                            name={project.project_name}
                            location={project.location}
                          />
                        </>
                      )
                    )}{" "}
                  </>
                ) : (
                  <>
                    {residential_project["completed"]["restoration"].map(
                      (project) => (
                        <>
                          <ProjectCard
                            img={project.img}
                            key={project.project_id}
                            name={project.project_name}
                            location={project.location}
                          />
                        </>
                      )
                    )}{" "}
                  </>
                )}
              </div>
            </>
          )}
        </>
      )}

      <div className="container">
        
        <div className="my-3">
          <h2 className="text-decoration-underline">Residentials Projects</h2>
          <ResidentialTable />
        </div>
      </div>
    </>
  );
};

export default ResidentialProjects;
