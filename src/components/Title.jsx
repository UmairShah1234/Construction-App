import React from "react";

const Title = ({ title, link }) => {
  return (
    <div className="d-flex justify-content-between">
      <h3 className="text-center">
        <span className="border-bottom border-danger">{title}</span>
      </h3>
      <div>
        <div className="rounded-0 btn btn-outline-danger">More</div>
      </div>
    </div>
  );
};

export default Title;
