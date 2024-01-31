import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
const About = () => {
  return (
    <>
      <section className="min-h-screen w-full">
        <div className="flex justify-center gap-2 mt-12">
        <span>  <FontAwesomeIcon icon={faUserAlt } className="h-9 w-9 " /> </span>
          <h1> 
         
            <span className="text-4xl font-bold">About</span> 
            <span className="text-4xl font-bold text-[#7403a7]"> Me</span> 
            </h1>
        </div>
        <div className="flex gap-2 mt-12">
          <div className="flex justify-center items-center bg-red-500 h-1/2 w-1/2 py-4">
            <div className="bg-green-300 h-72 w-56 rounded-md"></div>
          </div>
          <div className="flex items-start gap-2 bg-green-500 h-1/2 w-1/2 flex-col py-4 px-2 ">
            <div>
              <h1><b>I'm Hamid</b></h1>
              <b>Full Stack Developer</b>
            </div>
            {/* <div>
              <h1>Full Stack Developer</h1>
            </div> */}
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
              <button className="rounded-md bg-[#2506ad] text-[#FFFFFF] px-6 py-2 flex gap-1">
                Resume
                <div>
                <FontAwesomeIcon icon={faChevronRight} className="h-3 w-3 " />

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
