import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SiteBar from "./Components/siteBar";
import { Api } from "./data/data";

function App() {
  return (
    <div>
      <BrowserRouter>
        <SiteBar />
        <Routes>
          {Api.map((e, index) => {
            return <Route key={index} path={e.path} />;
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
