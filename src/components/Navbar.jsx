import React from "react"
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return <div id="Navbar">
    <h2> Navbar </h2>
    <div className="navbarRight">
      <ul className="navbarLinks">
        <li> <Link to ="/"> Home </Link> </li>
        <li> <a target="_blank" href="https://www.instagram.com/charlesvaldez_/"> Instagram </a> </li>
        <li> <a target="_blank" href="https://www.linkedin.com/in/charles-valdez-293ba5258/"> LinkedIn </a> </li>
      </ul>
    </div>
  </div>;
};

export default Navbar;
