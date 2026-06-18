import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        padding: "20px",
        background: "#222",
      }}
    >
      <Link to="/" style={{color:"white",marginRight:"20px"}}>
        Dashboard
      </Link>

      <Link to="/deployments" style={{color:"white",marginRight:"20px"}}>
        Deployments
      </Link>

      <Link to="/services" style={{color:"white",marginRight:"20px"}}>
        Services
      </Link>

      <Link to="/releases" style={{color:"white",marginRight:"20px"}}>
        Releases
      </Link>

      <Link to="/pipelines" style={{color:"white"}}>
        Pipelines
      </Link>
    </nav>
  );
}

export default Navbar;
