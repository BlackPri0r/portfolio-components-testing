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


  return(
    <div className="h-0 w-0">
      <motion.div 
        className="bg-black h-2 w-2 rounded-full fixed top-0 left-0 select-none pointer-events-none"
        style={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4
        }}
      />
      <motion.img
        className="w-24 h-28 rounded-full fixed top-0 left-0 select-none pointer-events-none origin-[51%_58%]"
        animate = {{
          rotate: [0, 360]
        }}
        transition={{repeat: Infinity, ease: "linear", duration: 10}}
        style = {{
          x: mousePosition.x-50,
          y: mousePosition.y - 65
        }}
        src="./finalcircle.png"
      />
    </div>
  )
} 