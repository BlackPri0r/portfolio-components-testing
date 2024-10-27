import React, { useEffect, useRef } from "react";
import "./InteractiveDragon.css";

const InteractiveDragon: React.FC = () => {
  const screenRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let animationFrameId: number;

    const updatePointer = (e: MouseEvent) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      animate();
    };

    const animate = () => {
      if (screenRef.current) {
        const head = screenRef.current.querySelector("#Head");
        const body = screenRef.current.querySelector("#Body");
        const leftWing = screenRef.current.querySelector("#LeftWing");
        const rightWing = screenRef.current.querySelector("#RightWing");
        const tail = screenRef.current.querySelector("#Tail");

        if (head && body && leftWing && rightWing && tail) {
          const dx = pointer.x - window.innerWidth / 2;
          const dy = pointer.y - window.innerHeight / 2;
          const angle = Math.atan2(dy, dx) * (180 / Math.PI);

          head.setAttribute(
            "transform",
            `translate(${pointer.x / 30}, ${pointer.y / 30}) rotate(${angle})`
          );
          body.setAttribute(
            "transform",
            `translate(${pointer.x / 50}, ${pointer.y / 50})`
          );
          leftWing.setAttribute(
            "transform",
            `translate(${pointer.x / 55 - 15}, ${pointer.y / 55 - 10}) rotate(${angle / 3})`
          );
          rightWing.setAttribute(
            "transform",
            `translate(${pointer.x / 55 + 15}, ${pointer.y / 55 - 10}) rotate(${angle / -3})`
          );
          tail.setAttribute(
            "transform",
            `translate(${pointer.x / 60}, ${pointer.y / 60 + 20}) rotate(${angle / 4})`
          );
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", updatePointer);
    animate();

    return () => {
      window.removeEventListener("mousemove", updatePointer);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <svg ref={screenRef} width="100%" height="100%" viewBox="0 0 200 200">
      <defs>
        <g id="Head">
          <circle cx="20" cy="20" r="10" fill="#333333" stroke="#ff0000" />
          <circle cx="18" cy="18" r="2" fill="#ff0000" />
          <path d="M18 10 Q 20 5, 22 10" stroke="#ff0000" fill="none" />
        </g>
        <g id="Body">
          <ellipse cx="50" cy="50" rx="25" ry="10" fill="#333333" stroke="#ff0000" />
        </g>
        <g id="LeftWing">
          <path
            d="M40,30 Q20,5 15,30 Q10,50 40,30"
            fill="#333333"
            stroke="#ff0000"
          />
        </g>
        <g id="RightWing">
          <path
            d="M40,30 Q60,5 65,30 Q70,50 40,30"
            fill="#333333"
            stroke="#ff0000"
          />
        </g>
        <g id="Tail">
          <path
            d="M50,60 Q60,90 70,120 Q50,110 40,90 Q45,75 50,60"
            fill="#333333"
            stroke="#ff0000"
          />
        </g>
      </defs>
      <g>
        <use xlinkHref="#Head" transform="translate(80, 60)" />
        <use xlinkHref="#Body" transform="translate(70, 80)" />
        <use xlinkHref="#LeftWing" transform="translate(65, 60) rotate(-15)" />
        <use xlinkHref="#RightWing" transform="translate(65, 60) rotate(15)" />
        <use xlinkHref="#Tail" transform="translate(70, 130)" />
      </g>
    </svg>
  );
};

export default InteractiveDragon;
