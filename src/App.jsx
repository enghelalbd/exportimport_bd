import { useState } from "react";

import "./App.css";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Banner from "./Component/Banner";

function App() {
  return (
    <>
      <Navbar />
      <Banner />

      <Footer />
    </>
  );
}

export default App;
