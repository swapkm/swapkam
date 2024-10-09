/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect, useState } from "react";

export default function PriceAction() {
  const colors = [
    "hsl(273, 100%, 41%)",
    "hsl(275, 100%, 41%)",
    "hsl(245, 100%, 41%)",
    "hsl(289, 100%, 51%)",
    "hsl(252, 100%, 51%)",
    "hsl(254, 100%, 68%)",
  ];

  const [colorIndex, setColorIndex] = useState(0);

  // Function to update the text color based on the array
  const updateTextColorOverTime = () => {
    setColorIndex((prevIndex) => (prevIndex + 1) % colors.length); // Cycle through the colors
  };

  // useEffect for time-based text color update
  useEffect(() => {
    const intervalId = setInterval(updateTextColorOverTime, 2000); // Update every 2 seconds
    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, []);

  return (
    <main className="w-full h-screen flex items-center justify-center">
      <div className="h-96 max-w-screen-2xl mx-auto px-4 flex items-center justify-center">
        <h1
          className="text-2xl md:text-8xl font-bold transition-colors duration-500 ease-in-out"
          style={{ color: colors[colorIndex] }}
        >
          Comming Soon!
        </h1>
      </div>
    </main>
  );
}
