import React from "react";
import "./navbar.css";

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-light navbar-expand-lg mb-3"
      style={{ backgroundColor: "#e3f2fd" }}
    >
      <div className="container-fluid">
        <h3 className="text-dark me-3">Path Finding Visualizer</h3>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <div>
              <span className="material-icons icon">home</span> Origin
            </div>
            <div>
              <span className="material-icons icon">location_on</span>{" "}
              Destination
            </div>
            <div className="block">
              <div className="wall box"></div>{" "}
              <p className="d-inline ms-1">Walls</p>
            </div>

            <div className="block">
              <div className="visited box"></div>{" "}
              <p className="d-inline ms-1">Visited Nodes</p>
            </div>

            <div className="block">
              <div className="nonvisited box"></div>{" "}
              <p className="d-inline ms-1">Unvisited Nodes</p>
            </div>

            <div className="block">
              <div className="path box"></div>{" "}
              <p className="d-inline ms-1">Path</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
