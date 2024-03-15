import React from "react";
import ProfileImage from "../images/profile2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
const About = () => {
  return (
    <>
      <section id="about" className="bg-white w-full py-12">
        <div className="flex justify-center  gap-2 ">
          <span>  <FontAwesomeIcon icon={faUserAlt} className="h-9 w-9 " /> </span>
          <h1>

            <span className="text-4xl font-bold">About</span>
            <span className="text-4xl font-bold text-[#7403a7]"> Me</span>
          </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-evenly bg-yellow-200  mt-12 p-4">
          <img
            className="rounded-md w-80"
            src={ProfileImage}
            alt="" />
          <div className="flex items-start gap-2  flex-col py-4 px-2 bg-green-100 max-w-[480px] ">
            <div>
              <h1><b>I'm Hamid</b></h1>
              <b>Full Stack Developer</b>
            </div>

            <div>
              <p>
                I am a Full-Stack developer based in Lahore, Pakistan. I am an
                Information Technology graduate from PU. I am very passionate
                about improving my coding skills & developing applications &
                websites. I build WebApps and Websites using MERN Stack. Working
                for myself to improve my skills. Love to build Full-Stack
                clones.
              </p>
            </div>
            <div className="flex">
              <p className="text-[#1522ff]">Email: </p>{" "}
              <p>syedhamidali84@gmail.com</p>
            </div>
            <div className="flex">
              <p className="text-[#1522ff]">Place: </p>{" "}
              <p>Lahore, Pakistan - 540000</p>
            </div>
            <div className="mt-8">
              <button className="flex justify-center items-center rounded-md bg-[#2506ad] text-[#FFFFFF] text-lg w-32 py-2 gap-1">
                Resume
                <div>
                  <FontAwesomeIcon icon={faChevronRight} className=" w-2 " />

                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
