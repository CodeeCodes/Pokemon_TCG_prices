import React from "react";
import { NavLink } from "react-router-dom";

export default function header() {
  return (
    <div className="header">
      <NavLink to="/">
        <h1 className="header_name">Pokemon TCG Prices</h1>
      </NavLink>
      <div className="header_link_div">
        <NavLink to="/sets">
          <h2 className="header_link">SETS</h2>
        </NavLink>
        <NavLink to="/search">
          <h2 className="header_link">SEARCH</h2>
        </NavLink>
        <NavLink to="/cards">
          <h2 className="header_link">CARDS</h2>
        </NavLink>
      </div>
    </div>
  );
}
