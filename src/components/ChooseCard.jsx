import { SupportAgent } from "@mui/icons-material";
import React from "react";

const ChooseCard = ({ color,icon,title,description }) => {
  return (
    <div className="">
      <div style={{height: "320px"}} className={`d-flex flex-column m-1 info ${color == 1 ? "phone" : "email"} p-3`}>
        <div className="text-center">
          {icon}
        </div>
        <h3 className="text-center">{title}</h3>
        <div>
          <p>
      {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChooseCard;
