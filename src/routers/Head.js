import React from "react";
import { NavLink } from "react-router-dom";

const Head = () => (
  <nav className="navbar navbar-expand-md fixed-top bg-custom p-3">
    <span className="navbar-brand" href="#">
      React
    </span>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarCollapse"
      aria-controls="navbarCollapse"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <NavLink to="/" exact={true} className="nav-link">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Products" className="nav-link">
            Products
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Login" className="nav-link">
            Log In
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);
export default Head;
