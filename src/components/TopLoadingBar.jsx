import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";


const TopLoadingBar = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (scrollPx / winHeightPx) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <motion.div
      className="top-loading-bar-container"
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div
        className="top-loading-bar"
        style={{ width: `${scrollProgress}%` }}
      ></div>
    </motion.div>
  )
}

export default TopLoadingBar