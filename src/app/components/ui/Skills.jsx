import React from "react";
import InfiniteMovingCards from "@/app/components/ui/InfiniteMovingCards"; 

const FirstRowItems = [
  {
    name: "React",
    image: "/assets/react.png", // Path to the React logo image
  },
  {
    name: "Next.js",
    image: "/assets/next.jpeg",
  },
  {
    name: "Tailwind CSS",
    image: "/assets/tailwind.svg", // Path to the Tailwind CSS logo image
  },
  {
    name: "TypeScript",
    image: "/assets/ts.png",
  },
  {
    name: "HTML5",
    image: "/assets/html.png",
  },
  {
    name: "CSS",
    image: "/assets/css.png",
  },

  {
    name: "JavaScript",
    image: "/assets/js.png",
  },
];
const SecondRowItems = [
    { name: "Node.js", image: "/assets/node.png" },
  { name: "MongoDB", image: "/assets/mongo.png" },
  { name: "Express", image: "/assets/ex.png" },
  { name: "Git", image: "/assets/git.png" },
  { name: "Python", image: "/assets/py.jpeg" },
  { name: "MySQL", image: "/assets/mysql.png" },
];

const Skills = () => {
    return (
      <div className="mt-8">
<h2 className="text-xl font-bold text-accent mb-4 pl-10">★ Skills & Tools</h2>
        <InfiniteMovingCards
          firstRowItems={FirstRowItems}
          secondRowItems={SecondRowItems}
          direction="left"
          speed="normal"
          pauseOnHover={true}
        />
      </div>
    );
  };

export default Skills;