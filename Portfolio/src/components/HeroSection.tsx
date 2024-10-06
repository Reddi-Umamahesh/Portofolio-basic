import React from "react";
import Navbar from "./Navbar";
import { Button } from "./ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub, faFacebookF, faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
const HeroSection: React.FC = () => {
  return (
    <div className="h-screen bg-cover bg-center bg-hero-img top-0 w-full">
      <Navbar />
      <div className="w-full h-full flex ">
        <div className="sm:w-[4%] hidden sm:inline-block sm:h-full mt-8p">
          <div className="h-14 w-[90%]  bg-white left-0 flex items-center justify-center cursor-pointer">
            <FontAwesomeIcon className="text-xl  my-3" icon={faGear} />
          </div>
          <div className="flex flex-col items-center">
            <div className="border-l-2 border-white h-[60px] mx-[5px]  my-3">
              .
            </div>
            <FontAwesomeIcon
              className="text-xl text-white my-3 cursor-pointer"
              icon={faFacebookF}
            />
            <FontAwesomeIcon
              className="text-xl text-white  my-3 cursor-pointer"
              icon={faTwitter}
            />
            <FontAwesomeIcon
              className="text-xl text-white cursor-pointer  my-3"
              icon={faLinkedinIn}
            />
            <FontAwesomeIcon
              className="text-xl text-white cursor-pointer  my-3"
              icon={faGithub}
            />
            <FontAwesomeIcon
              className="text-xl text-white cursor-pointer  my-3"
              icon={faInstagram}
            />
          </div>
        </div>
        <div className="sm:w-[92%] w-full flex items-center mt- h-full flex-col lg:mt-10p mt-20p">
          <h1 className="lg:text-5xl md:text-3xl font-semibold text-white my-2 text-3xl font-roboto">
            Hello
          </h1>
          <h1 className="lg:text-7xl md:text-6xl font-semi text-white my-2 flex flex-wrap cust-5:text-4xl text-4xl">
            I Am <span className="lg:ml-3 ml-2 font-bold"> Web Developer</span>
          </h1>
          <div className="flex items-center justify-center my-4">
            <hr className="flex-1 border-t-2 border-gray-300 w-60" />
            <span className="mx-2 text-white lg:text-xl md:lg font-medium">
              websites & more
            </span>
            <hr className="flex-1 border-t-2 border-gray-300" />
          </div>
          <Button className="bg-white text-black lg:w-40 h-12 rounded-3xl my-3 text-lg hover:bg-white text-center flex items-center justify-center">
            Hire me
          </Button>
        </div>
        <div className="sm:w-[4%]  hidden sm:inline-block sm:h-full mt-15p items-center justify-center"><div className="text-lg text-white rotate-90 transform whitespace-nowrap ">
         SCROLL DOWN ------</div></div>
      </div>
    </div>
  );
};

export default HeroSection;
