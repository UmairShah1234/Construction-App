import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSubCategory, setSelectedSubCategory] =
    useState("new_construction");
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  const handleSubCategoryChange = (subCategory) => {
    setSelectedSubCategory(subCategory);
  };

  return (
    <>
      <div className="container p-3">
        <h3 className="">
          <span className="border-bottom border-danger">Explore Our Projects:</span>
        </h3>
        <p className="p-1">
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
      <div className="container mb-1 ">
        <button onClick={() => handleCategoryChange("all")} className="btn btn-outline-danger rounded-0">All</button>
        <div className="btn-group mx-2">
          <button
            type="button"
            className="btn btn-outline-danger  rounded-0 dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            onClick={() => handleCategoryChange("ongoing")}
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
          <button
            type="button"
            className="btn btn-outline-danger rounded-0 dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            onClick={() => handleCategoryChange("completed")}
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
      {selectedCategory === "all" ?
   
      <div className="d-flex justify-content-center row row-cols-lg-4 row-cols-1 ms-2">
      {Object.keys(projects).map((cat) => (
   
        Object.keys(projects[cat]).map((subcat) => (
      
          projects[cat][subcat].map((project) => (
           
            <ProjectCard
              key={project.project_id}
              name={project.project_name}
              location={project.location}
            />
          ))
        ))
      ))}
      </div>
       : 
      <>
      {selectedCategory === "ongoing" ? (
        <>
          <div className="d-flex justify-content-center row row-cols-lg-4 row-cols-1 ms-2">
            {selectedSubCategory === "new_construction" ? (
              <>
                {projects["ongoing"]["new_construction"].map((project) => (
                  <>
                    <ProjectCard
                      key={project.project_id}
                      name={project.project_name}
                      location={project.location}
                    />
                  </>
                ))}{" "}
              </>
            ) : (
              <>
                {projects["ongoing"]["restoration"].map((project) => (
                  <>
                    <ProjectCard
                      key={project.project_id}
                      name={project.project_name}
                      location={project.location}
                    />
                  </>
                ))}{" "}
              </>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="d-flex justify-content-center row row-cols-lg-4 row-cols-1 ms-2">
            {selectedSubCategory === "new_construction" ? (
              <>
                {projects["completed"]["new_construction"].map((project) => (
                  <>
                    <ProjectCard
                      key={project.project_id}
                      name={project.project_name}
                      location={project.location}
                    />
                  </>
                ))}{" "}
              </>
            ) : (
              <>
                {projects["completed"]["restoration"].map((project) => (
                  <>
                    <ProjectCard
                      key={project.project_id}
                      name={project.project_name}
                      location={project.location}
                    />
                  </>
                ))}{" "}
              </>
            )}
          </div>
        </>
      )}
      </>
      }
      
    </>
  );
};

export default Projects;
