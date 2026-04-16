import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <button>Logo</button>

      <div>
        <NavLink to="/">All Products</NavLink>
        <NavLink to="/signup">My Exports</NavLink>
        <NavLink to="/login">My Imports</NavLink>
        <NavLink to="/contact">Add Exports</NavLink>
      </div>

      <NavLink to="/login">
        <button>Login</button>
      </NavLink>
    </div>
  );
};

export default Navbar;
