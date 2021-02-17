import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavTabsstyle.css";
const styles = {
  nav: {
    backgroundColor: "#cbf7ed",

    // opacity: "70%",
    fontSize: "20px",
  },
};
function NavTabs() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  return (
    <ul className="nav justify-content-center" style={styles.nav}>
      <li className="nav-link tab-link">
        <Link className="links" style={styles.link} to="/">
          About
        </Link>
      </li>
      <li className="nav-link tab-link">
        <Link className="links" style={styles.link} to="/portfolio">
          Portfolio
        </Link>
      </li>
      {/* <li className="nav-item nav-link">
        <Link style={styles.link} to="/contact">
          Contact
        </Link>
      </li> */}
    </ul>
  );
}

export default NavTabs;
