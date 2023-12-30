import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import { Link, useParams } from "react-router-dom";
import { commercial_projects, residential_project } from "../data/projects";
import ProjectCard from "./ProjectCard";
import { KeyboardArrowRight } from "@mui/icons-material";
import ImagesModal from "./ImagesModal";

const IndividualProject = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prevPosition) => prevPosition + 1);
    }, 100);

    return () => clearInterval(interval);
  }, []);
  const { project_name } = useParams();

  //console.log(project_name);
  const resProject = findResProjectByName(project_name);
  const comProject = findComProjectByName(project_name);
  // console.log(resProject);
  function findResProjectByName(project_name) {
    for (const category in residential_project) {
      for (const subCategory in residential_project[category]) {
        for (const project of residential_project[category][subCategory]) {
          if (project.project_name === project_name) {
            // console.log(project);
            return project;
          }
        }
      }
    }
    return null; // Handle the case where the project is not found
  }
  function findComProjectByName(project_name) {
    for (const category in commercial_projects) {
      for (const subCategory in commercial_projects[category]) {
        for (const project of commercial_projects[category][subCategory]) {
          if (project.project_name === project_name) {
            //  console.log(project);
            return project;
          }
        }
      }
    }
    return null;
  }

  // flex: "1 0 auto"
  return (
    <div className="container p-1">
      {resProject ? (
        <>
          <Card
            className="indvidualProjCard mainCard"
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              height: "85vh",
              padding: "15px",
              margin: "15px",
            }}
          >
            <div
              className="contentBox"
              sx={{ height: "30%", marginRight: "15px" }}
            >
              <div className="mx-3 py-1">
                <div className="email info">
                  <h3>{resProject.project_name}</h3>
                  <p className="text-decoration-underline">
                    {resProject.location}
                  </p>
                  <h3>SQUARE FEET</h3>
                  <p className="text-decoration-underline">
                    {resProject.square_ft}
                  </p>
                  <h3>Architect</h3>
                  <p className="text-decoration-underline">
                    {resProject.architect}
                  </p>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    <button
                      className="btn btn-outline-danger rounded-0"
                      // to={`/projectImages/${project_name}`}
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                    >
                      More Images <KeyboardArrowRight />
                    </button>
                  </Typography>
                </div>
              </div>
              <ImagesModal />
              {/* <Box
            sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
          ></Box> */}
            </div>
            <CardMedia
              component="img"
              className="imgBox"
              sx={{ height: "100%" }}
              image={resProject.img}
              alt="project"
            />
          </Card>

          <div
            className="border-1"
            style={{ width: "85vw", overflow: "hidden" }}
          >
            <div
              className="d-flex float-start "
              style={{
                transform: `translateX(-${scrollPosition}px)`,
                transition: "transform 0.5s ease",
              }}
            >
              {Object.keys(residential_project).map((cat) =>
                Object.keys(residential_project[cat]).map((subcat) =>
                  residential_project[cat][subcat].map((project) => (
                    <>
                      {/* <div className="col"> */}
                      <ProjectCard
                        key={project.project_id}
                        name={project.project_name}
                        location={project.location}
                        id={project.project_id}
                        img={project.img}
                      />
                      {/* </div> */}
                    </>
                  ))
                )
              )}
            </div>
          </div>

          {/* </marquee> */}
        </>
      ) : (
        <>
          <Card
            className="indvidualProjCard mainCard"
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              height: "85vh",
              padding: "15px",
              margin: "15px",
            }}
          >
            <div>
              <div className="mx-3 py-1">
                <div className="email info">
                  <h3>{comProject.project_name}</h3>
                  <p className="text-decoration-underline">
                    {comProject.location}
                  </p>
                  <h3>SQUARE FEET</h3>
                  <p className="text-decoration-underline">
                    {comProject.square_ft}
                  </p>
                  <h3>Architect</h3>
                  <p className="text-decoration-underline">
                    {comProject.architect}
                  </p>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    <button
                      className="btn btn-outline-danger rounded-0"
                      // to={`/projectImages/${project_name}`}
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                    >
                      More Images <KeyboardArrowRight />
                    </button>
                    <ImagesModal />
                  </Typography>
                </div>
              </div>
              {/* <Box
           sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
         ></Box> */}
            </div>
            <CardMedia
              component="img"
              className="imgBox "
              sx={{ height: "100%" }}
              image={comProject.img}
              alt="project"
            />
          </Card>
          <div
            className="border-1"
            style={{ width: "85vw", overflow: "hidden" }}
          >
            <h3 className="text-decoration-underline">More Of Our Projects</h3>
            <div
              className="d-flex float-start "
              style={{
                transform: `translateX(-${scrollPosition}px)`,
                transition: "transform 0.5s ease",
              }}
            >
              {Object.keys(commercial_projects).map((cat) =>
                Object.keys(commercial_projects[cat]).map((subcat) =>
                  commercial_projects[cat][subcat].map((project) => (
                    <>
                      {/* <div className="col"> */}
                      <ProjectCard
                        key={project.project_id}
                        name={project.project_name}
                        location={project.location}
                        id={project.project_id}
                        img={project.img}
                      />
                      {/* </div> */}
                    </>
                  ))
                )
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default IndividualProject;
