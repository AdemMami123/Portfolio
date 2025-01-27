"use client";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    content: "+216 21046471",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    content: (
      <a
        href="mailto:adem.mami@itbs.tn"
        className="text-accent underline hover:text-white transition duration-200"
      >
        adem.mami@itbs.tn
      </a>
    ),
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    content: "Hammamet, Nabeul, Tunisia",
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.5, duration: 0.4, ease: "backIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-6">
          {/* LinkedIn and GitHub */}
          <div className="w-full xl:w-[48%] flex flex-col items-center gap-6">
            <h3 className="text-4xl text-accent">Find Me Online</h3>
            <div className="flex gap-6">
              <a
                href="https://www.linkedin.com/in/adem-mami-13ra/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[72px] h-[72px] bg-[#27272c] text-accent rounded-full flex items-center justify-center shadow-lg hover:bg-accent hover:text-[#27272c] transition duration-300"
              >
                <FaLinkedin className="text-3xl" />
              </a>
              <a
                href="https://github.com/AdemMami123"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[72px] h-[72px] bg-[#27272c] text-accent rounded-full flex items-center justify-center shadow-lg hover:bg-accent hover:text-[#27272c] transition duration-300"
              >
                <FaGithub className="text-3xl" />
              </a>
            </div>
          </div>
          {/* Info */}
          <div className="w-full xl:w-[48%] flex items-center">
            <ul className="flex flex-col gap-6">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-4">
                  <div className="w-[52px] h-[52px] xl:w-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">{item.title}</h4>
                    <h3 className="text-white/80">{item.content}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
