import React from "react";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import Deployments from "./pages/Deployments";
import Services from "./pages/Services";
import Releases from "./pages/Release";
import Pipelines from "./pages/Pipelines";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />

          <Route
            path="/deployments"
            element={<Deployments />}
          />

          <Route
            path="/services"
            element={<Services />}
          />

          <Route
            path="/releases"
            element={<Releases />}
          />

          <Route
            path="/pipelines"
            element={<Pipelines />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
