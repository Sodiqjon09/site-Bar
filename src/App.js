import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { GiHamburgerMenu } from "react-icons/gi";
import "./App.css";
import { ApiRoutes } from "./data/data";

function App() {
  const [showNav, setShowNav] = useState(false);
  return (
    <div>
      <Router>
        <header>
          <GiHamburgerMenu onClick={() => setShowNav(!showNav)} />
        </header>

        <Navbar show={showNav} />
        <div className="main">
          <Routes>
            {ApiRoutes.map((e, index) => {
              return (
                <Route key={index} path={e.link} Component={e.component} />
              );
            })}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
