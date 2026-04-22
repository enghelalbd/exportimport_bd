import { useState } from "react";

import "./App.css";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Banner from "./Component/Banner";
import Login from "./Component/Login";
import LatestProduct from "./Component/LatestProduct";
import Product from "./Component/Product";

function App() {
  return (
    <>
      <Navbar />

      <Banner />

      <LatestProduct />
      <Product />

      <Footer />
    </>
  );
}

export default App;
