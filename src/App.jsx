import { useState } from "react";

import "./App.css";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Banner from "./Component/Banner";

import Login from "./Component/Login";

function App() {
  return (
    <>
      <Navbar />

      <Banner />
      <Login />
      <Footer />
    </>
  );
}

export default App;
