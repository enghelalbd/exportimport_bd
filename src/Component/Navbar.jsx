import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="display flex justify-between font-bold text-lg p-5 padding-x-10 padding-y-5">
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Logo</button>

      <div className=" flex gap-5 text-blue-400">
        <NavLink to="/AllProducts">All Products</NavLink>
        <NavLink to="/MyExports">My Exports</NavLink>
        <NavLink to="/MyImports">My Imports</NavLink>
        <NavLink to="/AddExports">Add Product</NavLink>
      </div>

      <NavLink to="/login">
        <button>Login</button>
      </NavLink>
    </div>
  );
};

export default Navbar;
