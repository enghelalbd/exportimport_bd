import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div></div>
      <h1>Exportimport_BD</h1>
      <div className="card"></div>
      <Footer />
    </>
  );
}

export default App;
