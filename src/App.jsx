import { useState } from "react";

import "./App.css";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Banner from "./Component/Banner";
import Login from "./Component/Login";
import LatestProduct from "./Component/LatestProduct";


function App() {
  return (
    <>
      <Navbar />

      <Banner />

      <LatestProduct />

      <Footer />
    </>
  );
}

export default App;
