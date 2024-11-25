import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({
        x: e.clientX, 
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", updatePosition);
    return () => window.removeEventListener("mousemove", updatePosition);
  }, []);

  return (
    <motion.div
    className="fixed pointer-events-none bg-MainColor rounded-full z-50"
    style={{
      width: "16px",
      height: "16px",
    }}
    animate={{
      x: position.x - 8,
      y: position.y - 8, 
    }}
    transition={{
      type: "spring",
      stiffness: 500,
      damping: 30,
    }}
  />
  );
};

export default Cursor;
