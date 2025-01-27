"use client";
import { motion } from "framer-motion";
import React, { useState, useRef } from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/app/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import WorkSliderBtns from "@/app/components/WorkSliderBtns";
import { MdClose } from "react-icons/md"; // Import Close icon for the modal

const projects = [
  {
    num: "01",
    title: "Task Manager Application",
    description: "A simple task manager app to manage your daily tasks.",
    stack: [
      { name: "Angular" },
      { name: "Node.js" },
      { name: "MongoDB" },
      { name: "Express.js" },
    ],
    Image: "/assets/work/taskmanager1.png",
    live: "",
    github: "https://github.com/AdemMami123/TaskManagerApp",
    screenshots: [
      "/assets/work/login.png",
      "/assets/work/registere.png",
      "/assets/work/statistic.png",
      "/assets/work/taskmanager.png",
      "/assets/work/create.png",
      "/assets/work/archieve.png",
      "/assets/work/agenda.png",
      "/assets/work/habit.png",
      "/assets/work/notification.png",
      "/assets/work/edituser.png",
    ],
  },
  {
    num: "02",
    title: "Budget Tracker Application",
    description: "A simple budget tracker app to manage your daily expenses.",
    stack: [
      { name: "React" },
      { name: "Node.js" },
      { name: "MongoDB" },
      { name: "Express.js" },
    ],
    Image: "/assets/work/budget.jpg",
    live: "",
    github: "",
    screenshots: [
      "/assets/screenshots/budget1.png",
      "/assets/screenshots/budget2.png",
    ],
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const [showScreenshots, setShowScreenshots] = useState(false); // State for modal visibility
  const [selectedImageIndex, setSelectedImageIndex] = useState(0); // Track the selected image in the slider
  const swiperRef = useRef(null); // Ref for Swiper instance

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  const handleShowScreenshots = () => {
    setShowScreenshots((prev) => !prev); // Toggle modal visibility
  };

  const handleCloseModal = () => {
    setShowScreenshots(false); // Close modal
  };

  const handleNextImage = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext(); // Slide to next image
    }
  };

  const handlePrevImage = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev(); // Slide to previous image
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-1/2 xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              {/* Border */}
              <div className="border border-white/20"></div>
              {/* Buttons */}
              <div className="flex items-center gap-4">
                {/* Live Project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* Github button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* Button to open the screenshots modal */}
                <button
                  onClick={handleShowScreenshots}
                  className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group"
                >
                  <span className="text-white text-3xl group-hover:text-accent">📸</span>
                </button>
              </div>
            </div>
          </div>

          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* Overlay */}
                      <div className="absolute top-0 buttom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* Image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.Image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}

              {/* Slider button */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>

      {/* Modal for Screenshots */}
      {showScreenshots && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/60 flex justify-center items-center z-50">
          <div className="relative bg-white p-8 rounded-lg max-w-6xl w-full shadow-lg">
            {/* Close button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-3xl text-gray-600 hover:text-gray-800 transition duration-300"
            >
              <MdClose />
            </button>

            <div className="relative flex justify-center items-center">
              {/* Left navigation button */}
              <button
                onClick={handlePrevImage}
                className="p-4 text-white bg-black/60 rounded-full absolute left-2 z-10 hover:bg-black/80 transition duration-200"
              >
                {"<"}
              </button>

              {/* Image Swiper */}
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                initialSlide={selectedImageIndex}
                className="w-full max-w-5xl"
                onSlideChange={(swiper) => setSelectedImageIndex(swiper.activeIndex)}
                ref={swiperRef} // Attach the swiperRef here
              >
                {project.screenshots.map((src, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative w-full h-[600px] rounded-lg overflow-hidden">
                      <Image
                        src={src}
                        alt={`Screenshot ${index + 1}`}
                        layout="fill"
                        objectFit="contain"
                        className="rounded-lg"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Right navigation button */}
              <button
                onClick={handleNextImage}
                className="p-4 text-white bg-black/60 rounded-full absolute right-2 z-10 hover:bg-black/80 transition duration-200"
              >
                {">"}
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.section>
  );
};

export default Work;
