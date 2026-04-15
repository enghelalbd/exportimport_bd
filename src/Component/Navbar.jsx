import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <button className="btn btn-primary">Logo</button>

      <div>
        <NavLink to="/">All Products</NavLink>
        <NavLink to="/signup">Signup</NavLink>
        <NavLink to="/login">Login</NavLink>
      </div>

      <button className="btn btn-primary">Login</button>
    </div>
  );
};

export default Navbar;
