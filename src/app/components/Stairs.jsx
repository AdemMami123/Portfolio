import { animate, motion } from "framer-motion";

const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
     top: ["100%", "0%"],
     },
};
const reverseIndex=(index) => {
    const totalsteps=6;
    return totalsteps-index-1;
}
     
const Stairs = () => {
    return (
      <>
        {[...Array(6)].map((_, index) => (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.1, ease: "easeInOut", delay: reverseIndex(index) * 0.1 }}
            className="h-full w-full bg-accent relative"
          />
        ))}
      </>
    );
  };

    
    
  
  
  


export default Stairs;
