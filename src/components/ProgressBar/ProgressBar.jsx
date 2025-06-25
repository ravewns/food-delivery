"use client";

import { useEffect, useState } from "react";

export const ProgressBar = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const scrollHandler = () => {
      const scrollY = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = height > 0 ? (scrollY / height) * 100 : 0;
      setScrollY(scrolled);
    };

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "7px" }}>
      <div style={{ width: `${scrollY}%`, height: "100%", background: "#0d5e5e" }} />
    </div>
  );
};

export default ProgressBar;
