import React from "react";

const Navbar = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <img src="./logo.png" alt="logo" width={50} />

      <div>
        <ul  >
          <li>All Products</li>

          <li>My Exports</li>
          
          <li>My Imports </li>
        </ul>
      </div>
      <button>Login</button>
    </div>
  );
};

export default Navbar;
