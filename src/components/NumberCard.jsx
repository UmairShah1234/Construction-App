import React from "react";
import { motion } from "framer-motion";

const NumberCard = ({ number, text, desc, color }) => {
  return (
    <motion.div
      className="d-flex flex-column"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className={` info ${color == 1 ? "phone" : "email"}  p-3`}>
        <h3 className="text-center text-danger">{number}+</h3>
        <h5 className="text-center ">{text}</h5>
      </div>
      <p className="p-1 text-center">{desc}</p>
    </motion.div>
  );
};

export default NumberCard;
