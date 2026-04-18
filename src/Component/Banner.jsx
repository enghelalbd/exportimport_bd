import React, { useState, useEffect } from "react";

const banners = ["/Images/1.jpg", "/Images/2.jpg", "/Images/3.jpg"];

const Banner = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-2xl shadow-lg">
        {banners.map((img, i) => (
          <img
            key={i}
            src={img}
            alt="banner"
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
              i === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
