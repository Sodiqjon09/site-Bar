import React from "react";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import { ApiRoutes } from "../data/data";

function Navbar({ show }) {
  return (
    <div className={show ? "sidenav active" : "sidenav"}>
      <img src={logo} alt="Logo" className="logo" />
      <ul>
        {ApiRoutes.map((e, index) => {
          return (
            <li key={index}>
              {e.icon}
              <Link to={e.link}>{e.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Navbar;
