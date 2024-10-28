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
      x: mousePosition.x - 16,
      y: mousePosition.y - 16
    }
  }

  return(
    <div>
      <motion.div 
        className="bg-black h-4 w-4 rounded-full fixed top-0 left-0"
        style={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8
        }}
      />
      <motion.div
        className="border-2 border-black rounded-full h-8 w-8 fixed top-0 left-0"
        variants={variants}
        animate="default"
      />
    </div>
  )
}