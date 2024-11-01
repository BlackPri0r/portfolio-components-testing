import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface RevealProps {
    children: React.ReactNode;
    className?: string;
}

export default function Reveal({ children, className }: RevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    
    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect (() => {
        if (isInView) {
            mainControls.start("visible");
            slideControls.start("visible");
        }
    })


    return (
        <div ref={ref} style={{ position: "relative", overflow: "hidden"}}>
            <motion.div
                className={className}
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 }
                }}
                transition={{
                    duration: 0.5,
                    delay: 0.5
                }}
                initial="hidden"
                animate={mainControls}

            >
                {children}
            </motion.div>
            <motion.div
                variants={{
                    hidden: {left: 0},
                    visible: {left: "100%"}
                }}
                initial="hidden"
                animate={slideControls}
                transition={{
                    duration: 0.5,
                    ease: "easeIn"
                }}
                style={{
                    position: "absolute",
                    top: 5,
                    bottom: 5,
                    left: 0,
                    right: 0,    
                    background: "black",
                    zIndex: 20
                }}
            
            />
        </div>
    );
}
