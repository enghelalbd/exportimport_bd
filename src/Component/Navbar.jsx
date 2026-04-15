import React from "react";

const Navbar = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <button className="btn btn-primary">Logo</button>
      <button className="btn btn-soft btn-primary">Primary</button>

      <div>
        <ul>
          <li>All Products</li>

          <li>My Exports</li>

          <li>My Imports </li>
        </ul>
      </div>
      <button className="btn btn-primary">Login</button>
    </div>
  );
};

export default Navbar;
