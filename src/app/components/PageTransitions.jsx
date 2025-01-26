"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransitions = ({ children }) => {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div
          initial={{ opacity: 1 }} 
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.1, ease: "easeInOut" },//changed duration from 0.4 to 0.1 (for a faster transition)
            
          }}
          className=
              "h-screen w-screen fixed bg-primary top-0 pointer-events-none"
        />
        {children}
      </div>
    </AnimatePresence>
  );
};

export default PageTransitions;
