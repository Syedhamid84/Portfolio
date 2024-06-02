import React, { useState } from "react";
import ProfileImage from "../images/hamid.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import resume from "../images/Resume.pdf";

// import { motion, AnimatePresence } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="bg-[#efefef] w-full py-12">
      <div className="flex justify-center  gap-2 ">
        <span>
          {" "}
          <FontAwesomeIcon icon={faUserAlt} className="h-9 w-9 " />{" "}
        </span>
        <h1>
          <span className="text-3xl md:text-4xl font-bold">About</span>
          <span className="text-3xl md:text-4xl font-bold text-[#7403a7]">
            {" "}
            Me
          </span>
        </h1>
      </div>
      <div className="flex flex-col md:flex-row gap-8 items-center justify-evenly ">
        <img
          className="rounded-md w-80 border bg-cover"
          src={ProfileImage}
          alt=""
        />
        {/* <motion.div
          animate={{ scale: 2, borderRadius: "50%", background: "yellow" }}
          whileHover={{ background: "blue" }}
        >
          <div className="h-32 w-32  rounded-md">oakistan</div>
        </motion.div> */}
        {AboutData.map((Item, index) => {
          return (
            <div
              key={index}
              className="flex items-start gap-2 flex-col py-4 px-2 max-w-[480px]"
            >
              <h1 className="text-2xl font-bold">{Item.name}</h1>
              <h1 className="text-sm font-semibold">{Item.designation} </h1>

              <p className="text-base ">{Item.description}</p>
              <span className="flex gap-1 text-base font-poppins">
                <p className="text-[#1522ff]">Email :</p> <p>{Item.email} </p>
              </span>
              <span className="flex gap-1 text-base font-poppins">
                <p className="text-[#1522ff]">Place :</p> <p>{Item.place} </p>
              </span>
              <a href={resume} download="Resume">
                <button className="flex justify-center items-center font-sans font-medium rounded-md bg-[#2506ad] text-[#FFFFFF] text-lg w-32 py-2 gap-2 mt-8  ">
                  {Item.button}
                  <FontAwesomeIcon icon={Item.icon} className=" w-2 mt-1" />
                </button>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default About;

export const AboutData = [
  {
    name: "I'm Hamid",
    designation: "Full Stack Developer",
    description:
      "I am a Full-Stack developer based in Lahore, Pakistan. I am an Information Technology graduate from PU. I am very passionate about improving my coding skills & developing applications & websites. I build WebApps and Websites using MERN Stack. Working for myself to improve my skills. Love to build Full-Stack clones.",
    email: "syedhamidali84@gmail.com",
    place: "Lahore, Pakistan - 540000",
    button: "Resume",
    icon: faChevronRight,
  },
];
