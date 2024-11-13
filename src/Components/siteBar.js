import React from "react";
import "./siteBar.css";
import { Link } from "react-router-dom";
import { Api } from "../data/data";

function SiteBar() {
  return (
    <div className="site-bar">
      <h1>EUFLORIA</h1>
      <div className="categories">
        <ul>
          {Api.map((e, index) => {
            return (
              <li key={index}>
                <Link to={e.path}>
                  <img src={e.img} alt={e.name} />
                  {e.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default SiteBar;
