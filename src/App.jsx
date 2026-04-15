import { useState } from "react";

import "./App.css";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Banner from "./Component/Banner";
import Signup from "./Component/Signup";

function App() {
  return (
    <>
      <Navbar />
      <Signup />
      <Banner />

      <Footer />
    </>
  );
}

export default App;
