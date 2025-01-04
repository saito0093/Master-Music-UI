import { cn } from "@/utils/cn";
import React, { useEffect, useState } from "react";

export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const [screenWidth, setScreenWidth] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);

  useEffect(() => {
    // Set screen dimensions when the component mounts
    const updateDimensions = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    };

    updateDimensions();

    // Update screen dimensions on window resize
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const meteors = new Array(number || 20).fill(true);

  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none" // Wrapper spans the full screen
    >
      {meteors.map((_, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            "animate-meteor-effect absolute h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
            "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent",
            className
          )}
          style={{
            top: `${Math.floor(Math.random() * screenHeight)}px`, // Random vertical position
            left: `${Math.floor(Math.random() * screenWidth)}px`, // Random horizontal position
            animationDelay: `${Math.random() * (0.8 - 0.2) + 0.2}s`, // Randomize start time
            animationDuration: `${Math.floor(Math.random() * (10 - 2) + 2)}s`, // Randomize duration
          }}
        ></span>
      ))}
    </div>
  );
};


