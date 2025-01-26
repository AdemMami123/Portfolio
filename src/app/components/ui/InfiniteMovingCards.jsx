"use client";

import { motion } from "framer-motion";

const InfiniteMovingCards = ({
  firstRowItems,
  secondRowItems,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
}) => {
  const duration = {
    slow: 40, 
    normal: 30, 
    fast: 20, 
  }[speed];

  return (
    <div className="relative overflow-hidden">
      {/* First Row */}
      <motion.div
        className="flex gap-3" // Reduced gap for tighter spacing
        animate={{
          x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"], // First row moves left or right
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
        }}
        whileHover={pauseOnHover ? { animationPlayState: "paused" } : undefined}
      >
        {firstRowItems.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex items-center gap-2 p-3 bg-white/5 rounded-lg backdrop-blur-sm" // Horizontal layout
          >
            {item.image && (
              <img
                src={item.image}
                alt={item.name}
                className="w-6 h-6" //image size
              />
            )}
            <span className="text-white text-xs font-medium">{item.name}</span> {/* Smaller text size */}
          </div>
        ))}
      </motion.div>

      {/* Second Row (Moves in the opposite direction) */}
      <motion.div
        className="flex gap-3 mt-3" 
        animate={{
          x: direction === "left" ? ["0%", "100%"] : ["100%", "0%"], // Second row moves in the opposite direction
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
        }}
        whileHover={pauseOnHover ? { animationPlayState: "paused" } : undefined}
      >
        {secondRowItems.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex items-center gap-2 p-3 bg-white/5 rounded-lg backdrop-blur-sm" // Horizontal layout
          >
            {item.image && (
              <img
                src={item.image}
                alt={item.name}
                className="w-6 h-6" // Smaller image size
              />
            )}
            <span className="text-white text-xs font-medium">{item.name}</span> {/* Smaller text size */}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteMovingCards;