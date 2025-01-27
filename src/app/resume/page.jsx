"use client";

import { fieldName, title } from "process";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaPython,
  FaGithub,
} from "react-icons/fa";
//importation of the icons from react-icons
import { SiTypescript, SiMongodb, SiMysql, SiExpress } from "react-icons/si";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/components/ui/tabs";
import { ScrollArea } from "@/app/components/ui/scroll-area";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/app/components/ui/tooltip";

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
    },
  ],
};
const education = {
  icon: "/assets/graduation.svg", //for testing i neeed to change this later
  title: "My education",
  descrition:
    "   I am currently pursuing an Engineer’s Degree in Software Programming at IT Business School Nabeul and have completed a Bachelor's Degree in Electrical Engineering. These studies have enhanced my skills in software development, problem-solving, and systems engineering. I am eager to apply my knowledge in both fields to real-world projects.",
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
    "Focused on both front-end and back-end development, I enjoy tackling new technologies and solving problems. I’m always eager to learn, grow, and contribute to meaningful projects",
  skillList: [
    {
      name: "HTML",
      icon: <FaHtml5 />,
    },
    {
      name: "CSS",
      icon: <FaCss3 />,
    },

    {
      name: "JavaScript",
      icon: <FaJs />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
    },
    {
      name: "Python",
      icon: <FaPython />,
    },
    {
      name: "Express",
      icon: <SiExpress />,
    },
    {
      name: "MongoDb",
      icon: <SiMongodb />,
    },

    {
      name: "React",
      icon: <FaReact />,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
    },
    {
      name: "Mysql",
      icon: <SiMysql />,
    },
    {
      name: "Figma",
      icon: <FaFigma />,
    },
    {
      name: "Github",
      icon: <FaGithub />,
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1, duration: 0.4, ease: "backIn" },
      }}
      className="min-h[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="Experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about me">About Me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.descrition}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((items, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{items.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h[60px] text-center lg:text-left">
                          {items.title}
                        </h3>
                        <div>
                          <span className="w-[6px] h-[6px] rounded-full"></span>
                          <p className="text-white/60">{items.company}</p>
                          {/*description with accordination*/}
                          <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                              <AccordionTrigger>Description</AccordionTrigger>
                              <AccordionContent>
                                {items.description
                                  .split("\n")
                                  .map((line, index) => (
                                    <p key={index}>{line}</p>
                                  ))}
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold ">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.descrition}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((items, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{items.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h[60px] text-center lg:text-left">
                          {items.title}
                        </h3>
                        <div>
                          <span className="w-[6px] h-[6px] rounded-full"></span>
                          <p className="text-white/60">{items.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap[30px]">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.descrition}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-4 xl:gap[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group ">
                              <div className="text-6xl group-hover:text-accent trasition-all duration-500">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            <TabsContent
              value="about me"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.descrition}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-accent">{item.fieldName}</span>
                        <span className="text-white/60">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};
export default Resume;
