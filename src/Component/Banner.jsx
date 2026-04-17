import React, { useState } from "react";

const banners = ["/Images/1.jpg", "/Images/3.jpg"];

const Banner = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((index + 1) % banners.length);
  };

  const prevSlide = () => {
    setIndex((index - 1 + banners.length) % banners.length);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <img
        src={banners[index]}
        alt="banner"
        style={{ width: "100%", height: "auto" }}
      />

      <div style={{ marginTop: "10px" }}>
        <button onClick={prevSlide}>Prev</button>
        <button onClick={nextSlide}>Next</button>
      </div>
    </div>
  );
};

export default Banner;
