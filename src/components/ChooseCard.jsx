import { SupportAgent } from "@mui/icons-material";
import React from "react";

const ChooseCard = ({ color }) => {
  return (
    <div className="">
      <div className={`d-flex flex-column m-1 info ${color == 1 ? "phone" : "email"} p-3`}>
        <div className="text-center">
          <SupportAgent sx={{ fontSize: 100 }} />
        </div>
        <h3>Customer Centric</h3>
        <div>
          <p>
            We're all about being customer-centric. Your satisfaction is our top
            priority, and we tailor every VR experience to meet your unique
            needs and preferences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChooseCard;
