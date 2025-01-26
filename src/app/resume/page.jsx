"use client";
import { fieldName, title } from "process";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaFigma,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import {Tabs,TabsContent,TabsList,TabsTrigger} from "@/app/components/ui/tabs";
import {ScrollArea} from "@/app/components/ui/scroll-area";
import {motion} from "framer-motion";
import {Tooltip,TooltipContent,TooltipProvider,TooltipTrigger} from "@/app/components/ui/tooltip";

const about = {
  title: "About Me",
  descrition:
    "I am a full stack developer with a passion for creating beautiful and functional websites. I have experience in both front-end and back-end development, and I am always looking to learn new technologies and improve my skills. I am a quick learner and a problem solver, and I am always up for a challenge. I am currently looking for new opportunities to work on exciting projects and expand my knowledge.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Adem Mami",
    },
    {
      fieldName: "Email",
      fieldValue: "adem.mami@itbs.tn",
    },
    {
      fieldName: "Phone",
      fieldValue: "+216 21046471",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Tunisian",
    },
    {
      fieldName: "Experience",
      fieldValue: "Fresh Graduate",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, French, Arabic",
    },
  ],
};
const experience = {
  icon: "/assets/windows.svg", //for testing i neeed to change this later
  title: "My Experience",
  descrition:
    "I have experience in both front-end and back-end development, and I am always looking to learn new technologies and improve my skills. I am a quick learner and a problem solver, and I am always up for a challenge. I am currently looking for new opportunities to work on exciting projects and expand my knowledge.",
  items: [
    {
      title: "Software Engineering Intern",
      company: "B2m-it",
      duration: "June 2024 - August 2024",
      description: `
        • Implemented an advanced AI model in Python to extract text from images with high accuracy.
        • Conducted extensive data cleaning and preprocessing to enhance model performance and ensure accurate text extraction,
          including removing noise and irrelevant features from the input data.
        • Designed and built a user-friendly interface using AngularJS, allowing users to easily interact with the model for seamless
          text extraction.
        • Optimized the model for efficiency, achieving a balance between speed and accuracy in real-time text conversion tasks.
        • Integrated the backend with Flask and frontend with AngularJS to enable smooth data flow and enhance user experience.
      `,
    },
    {
      title: "Final Year Project",
      company: "Sotipapier",
      duration: "June 2024 - August 2024",
      description: `
        • Automated a crane to enable wireless control via a remote, integrating an HMI interface.
        • Created a new electrical cabinet.
        • Conducted programming with TIA Portal.
      `,
    }
  ],
};
const education = {
  icon: "/assets/graduation.svg", //for testing i neeed to change this later
  title: "My Education",
  descrition:
    "I have experience in both front-end and back-end development, and I am always looking to learn new technologies and improve my skills. I am a quick learner and a problem solver, and I am always up for a challenge. I am currently looking for new opportunities to work on exciting projects and expand my knowledge.",
  items: [
    {
      title: "Engineer’s Degree in Software programming",
      company: "IT Business School Nabeul",
      duration: "2013 - Present",
      
    },
    {
      title: "Bachelor’s degree in electrical Engineering",
      company: "Higher Institute of Technological Studies",
      duration: "2020 - 2023",
      
    },
  ],
};
const skills = {
  title: "My Skills",
  descrition:
    "I have experience in both front-end and back-end development, and I am always looking to learn new technologies and improve my skills. I am a quick learner and a problem solver, and I am always up for a challenge. I am currently looking for new opportunities to work on exciting projects and expand my knowledge.",
  items: [
    {
      title: "HTML",
      icon: <FaHtml5 />,
    },
    {
      title: "CSS",
      icon: <FaCss3 />,
    },
    {
      title: "JavaScript",
      icon: <FaJs />,
    },
    {
      title: "React",
      icon: <FaReact />,
    },
    {
      title: "Node.js",
      icon: <FaNodeJs />,
    },
    {
      title: "Tailwind CSS",
      icon: <SiTailwindcss />,
    },
    {
      title: "Next.js",
      icon: <SiNextdotjs />,
    },
    {
      title: "Figma",
      icon: <FaFigma />,
    },
  ],
};



const Resume = () => {
  return <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{delay:2.4,duration:0.4 ,ease:"backIn"}}}
  className="min-h[80vh] flex items-center justify-center py-12 xl:py-0"
  >
   <div className="container mx-auto">
    <Tabs defaultValue="Experience" className="flex flex-col xl:flex-row gap-[60px]">
    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
      <TabsTrigger value="experience">Experince</TabsTrigger>
      <TabsTrigger value="education">Education</TabsTrigger>
      <TabsTrigger value="skills">Skills</TabsTrigger>
      <TabsTrigger value="about me">About Me</TabsTrigger>
    </TabsList>
    <div className="min-h-[70vh] w-full">
      <TabsContent value="experience" className="w-full">
        <div className="flex flex-col gap-[30px] text-center xl:text-left">
          <h3 className="text-4xl font-bold">{experience.title}</h3>
          <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.descrition}</p>
          <ScrollArea className="h-[400px]">
              <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                {experience.items.map((items,index)=>
                  <li key={index} className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                      <span>{items.duration}</span>
                      <h3>{items.title}</h3>
                    <div>
                      <span></span>
                      <p>{items.company}</p>
                      </div>


                  </li>
                
                
                
                
                )}
              </ul>
          </ScrollArea>
        </div>
      </TabsContent>

      <TabsContent value="education" className="w-full">
        education
      </TabsContent>

      <TabsContent value="skills" className="w-full">
        skills
      </TabsContent>

      <TabsContent value="about me" className="w-full">
        about me 
      </TabsContent>

    </div>

    </Tabs>

   </div>
    
    </motion.div>



};
export default Resume;
