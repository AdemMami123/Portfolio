/* eslint-disable react/no-unescaped-entities */
import { Button } from "./components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/app/components/ui/Social";
import Photo from "@/app/components/ui/Photo";
import Skills from "@/app/components/ui/Skills";
//infinity moving cards
//import InfiniteMovingCards from "@/app/components/ui/InfiniteMovingCards";
const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full order-2 xl:order-none">
        <div className="flex flex-col xl:flex-row items-center justify-between  xl:pb-24">
          {/* Text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span>Software Developer</span>
            <h1 className="h1 mb-6 ">
              Hello I'm <br />
              <span className="text-accent">Adem Mami</span>
            </h1>
            <p className="max-w[500px] mb-9 text-white/80 italic">
              I am a software engineering student passionate about learning and
              creating in the world of technology. Currently, I'm focused on
              mastering web development, crafting responsive, user-friendly
              websites, and exploring modern tools.
            </p>
            {/* Button and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                href="/assets/cv/AdemMami.pdf"
                download="AdemMami_Resume.pdf"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>

              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
            <div className="mt-8">
              <Skills />
            </div>
          </div>
          {/* Image */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
