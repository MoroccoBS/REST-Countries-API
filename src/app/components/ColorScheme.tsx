"use client";
import { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

function ColorScheme() {
  const [colorScheme, setColorScheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  const handleColorScheme = () => {
    const newColorScheme = colorScheme === "dark" ? "light" : "dark";
    setColorScheme(newColorScheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", colorScheme);
    localStorage.setItem("theme", colorScheme);
  }, [colorScheme]);
  console.log(colorScheme);
  return (
    <button
      className="flex gap-2 text-lg items-center"
      onClick={handleColorScheme}
    >
      {colorScheme === "dark" ? (
        <>
          <BsMoon />
          <h1>Dark Mode</h1>
        </>
      ) : (
        <>
          <BsSun />
          <h1 className="font-bold ">White Mode</h1>
        </>
      )}
    </button>
  );
}

export default ColorScheme;
