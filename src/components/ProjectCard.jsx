import React from "react";
import { KeyboardArrowRight } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./ProjectCard.css"
const ProjectCard = ({ name, location }) => {
  return (
    <div className="row">
      <div className="col">
        <div
          className="card position-relative bg-light shadow-lg p-1 mx-1 my-1"
          style={{ width: "20rem" }}
        >
          <img src="/src/assets/tolu-olubode-PlBsJ5MybGc-unsplash.jpg" alt="" />
          <div className="card-body position-absolute trans_card d-flex flex-column justify-content-center align-items-center  text-dark">
            <div className="card-title text-center">
              <h2>{name}</h2>
            </div>
            <div className="card-title p-1 text-center">{location}</div>
            <Link
              to="/"
              // to={links}
              className="btn btn-outline-danger card-text text-dark rounded-0"
            >
              Explore <KeyboardArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
