import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// /assets/Logo.png
const Header = () => {
  return (
    <motion.nav
      className="navbar navbar-expand-lg navbar-light phone"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand ms-2 " style={{ display: "flex", alignItems: "flex-end" }} to="/">
          <img style={{objectFit: "cover", width: "70px", height: "70px"}} src="assets/Logo.png" alt="" />
          {/* <span className="companyName ">H.A - Engg Construction LLP</span> */}
          {/* <Avatar
            src="/assets/Logo.png"
            alt=""
            sx={{
              width: 100,
              height: 100,
              objectFit: "cover",
            }}
          /> */}
        </Link>
        <button
          className="navbar-toggler shadow"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <motion.li
              className="nav-item mx-3"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link
                className="nav-link fs-5 underline-on-hover"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </motion.li>
            <motion.li
              className="nav-item mx-3"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link className="nav-link fs-5 underline-on-hover" to="/profile">
                About
              </Link>
            </motion.li>
            <li className="nav-item dropdown mx-3 ">
              <a
                className="nav-link dropdown-toggle fs-5 underline-on-hover"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Projects
              </a>
              <ul
                className="dropdown-menu phone shadow"
                aria-labelledby="navbarDropdown"
              >
                <motion.li
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link
                    to="/residential-projects"
                    className="dropdown-item "
                    href="#"
                  >
                    Residential
                  </Link>
                </motion.li>
                <motion.li
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link
                    to="/commercial-projects"
                    className="dropdown-item "
                    href="#"
                  >
                    Commercial
                  </Link>
                </motion.li>
              </ul>
            </li>
            <motion.li
              className="nav-item mx-3"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link className="nav-link fs-5 underline-on-hover" to="/clients">
                Clients
              </Link>
            </motion.li>
            <motion.li
              className="nav-item mx-3"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link
                className="nav-link fs-5 underline-on-hover"
                to="/certificate"
              >
                Certificates
              </Link>
            </motion.li>
            <motion.li
              className="nav-item mx-3"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link
                className="nav-link fs-5 underline-on-hover"
                to="/contact-us"
              >
                Contact Us
              </Link>
            </motion.li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Header;
