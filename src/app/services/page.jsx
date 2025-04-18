"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { title } from "process";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      " building websites that serve as powerful marketing tools and bring memorable brand experiences.",
    href: "",
  },

  {
    num: "02",
    title: "Cloud Computing",
    description:
      "Helping you migrate to the cloud with a well-defined strategy.",
    href: "",
  },
  {
    num: "03",
    title: "AI & Machine Learning",
    description:
      "Empowering your business with intelligent systems through cutting-edge machine learning and deep learning solutions.",
    href: "",
  },{
    num: "04",
    title: "Mobile Development",
    description:
      "Building high-performance Android apps tailored to your users' needs, using the latest technologies and best practices.",
    href: "",
  }
  
  
];
const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div key={index} className="flex-1 flex-col justify-center gap-6 group">
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                  <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                <p className="text-white/60">{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
export default Services;
