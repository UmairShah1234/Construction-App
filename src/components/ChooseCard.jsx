import React from "react";
import { motion } from "framer-motion";

const ChooseCard = ({ color, icon, title, description }) => {
  return (
    <div className="">
      <motion.div
        style={{ height: "320px" }}
        className={`d-flex flex-column m-1 info ${
          color == 1 ? "phone" : "email"
        } p-3`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="text-center">{icon}</div>
        <h3 className="text-center">{title}</h3>
        <div>
          <p>{description}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default ChooseCard;
