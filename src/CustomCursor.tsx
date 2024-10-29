import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  })
  
  console.log(mousePosition)
  
  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove)

    return () => {
      window.removeEventListener("mousemove", mouseMove)
    }
  }, []);
  
  const variants = {
    default: {
      x: mousePosition.x - 96,
      y: mousePosition.y - 96
    }
  }

  return(
    <div>
      <motion.div 
        className="bg-black h-4 w-4 rounded-full fixed top-0 left-0 select-none pointer-events-none"
        style={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8
        }}
      />
      <motion.div
        style={{
          x: mousePosition.x - 96,
          y: mousePosition.y - 96,
        }}
      >
        <motion.img
          className="rounded-full h-48 w-48 fixed top-0 left-0 select-none pointer-events-none"
          variants={variants}
          animate={{ rotate: [360, 0] }}
          transition={{
            duration: 6,
            ease: "linear",
            repeat: Infinity
          }}
          src="./png.png"
        />
      </motion.div>
    </div>
  )
}