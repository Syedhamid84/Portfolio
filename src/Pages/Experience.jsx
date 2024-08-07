import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import ViewButton from "../Components/Button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Experience = () => {
  const [allexperience, setAllexperience] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: false });

  const handleView = () => {
    setAllexperience(!allexperience);
  };

  const animationVariants = {
    hidden: { y: "-30vh", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  return (
    <div id="experience" className="bg-offwhite w-full pt-4">
      <div className="flex justify-center items-center  gap-2">
        <span className="items-center">
          <FontAwesomeIcon
            icon={faBriefcase}
            className="h-10 w-10 text-darkblack"
          />
        </span>
        <h1 className="text-4xl font-bold text-darkblack">Experience</h1>
      </div>

      <div
        className="w-12 h-[680px] bg-transparent relative m-0 md:mx-auto  "
        ref={ref}
      >
        <div className="w-2 h-full absolute bg-black mx-auto top-0 left-0 right-0"></div>

        {NewExperiencedData.map((Data, index) => {
          return (
            <motion.div
              ref={ref}
              key={index}
              variants={animationVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className={`h-8 w-8 bg-white border-4 border-lightorange rounded-full absolute left-0 right-0 mx-auto ${Data.div1}`}
            >
              <div className="h-full w-full relative flex justify-center items-center">
                <FontAwesomeIcon icon={faBriefcase} className="w-7 " />
                <div
                  className={`w-[280px] md:w-[300px]  absolute bg-darkorange -top-[14px] md:mx-auto rounded-md 
                    ${
                      index % 2 === 0
                        ? "left-16"
                        : "left-16 md:left-auto md:right-16"
                    }
                  `}
                >
                  <div className="relative w-full bg-red400">
                    <div
                      className={`absolute bg-darkorange h-6 w-6 top-4 rotate-45 ${Data.div5}`}
                    ></div>
                    <div className="flex flex-col px-8 py-2">
                      <h1 className="font-bold">{Data.heading1}</h1>
                      <h1 className="font-bold">{Data.heading2}</h1>
                      <span>{Data.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {allexperience && (
        <div
          className="w-12 h-[750px] bg-transparent relative m-0 md:mx-auto bottom-4  "
          ref={ref}
        >
          <div className="w-2 h-full absolute bg-black mx-auto top-0 left-0 right-0"></div>

          {NewExperiencedData.map((Data, index) => {
            return (
              <motion.div
                ref={ref}
                key={index}
                variants={animationVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className={`h-8 w-8 bg-white border-4 border-lightorange rounded-full absolute left-0 right-0 mx-auto ${Data.div1}`}
              >
                <div className="h-full w-full relative flex justify-center items-center">
                  <FontAwesomeIcon icon={faBriefcase} className="w-7 " />
                  <div
                    className={`w-[280px] md:w-[300px]  absolute bg-darkorange -top-[14px] md:mx-auto rounded-md 
                    ${
                      index % 2 === 0
                        ? "left-16"
                        : "left-16 md:left-auto md:right-16"
                    }
                  `}
                  >
                    <div className="relative w-full bg-red400">
                      <div
                        className={`absolute bg-darkorange h-6 w-6 top-4 rotate-45 ${Data.div5}`}
                      ></div>
                      <div className="flex flex-col px-8 py-2">
                        <h1 className="font-bold">{Data.heading1}</h1>
                        <h1 className="font-bold">{Data.heading2}</h1>
                        <span>{Data.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
      {!allexperience ? (
        <div className="" onClick={() => handleView()}>
          <ViewButton buttonValue={"View More"} experience={true} />
        </div>
      ) : (
        <div onClick={() => handleView()}>
          <ViewButton buttonValue={"View Less"} experience={true} />
        </div>
      )}
    </div>
  );
};
export default Experience;

const NewExperiencedData = [
  {
    div1: "top-10",
    div3: "left-16",
    div5: "-left-2 md:-left-2",
    date: "Oct 2021- present",
    heading1: "Self Employed",
    heading2: "Full Stack Developer",
    delay: 2,
  },
  {
    div1: "top-36",
    div3: " left-16 md:right-16 ",
    div5: "-left-2 md:left-auto md:-right-2",
    date: "Oct 2021- present",
    heading1: "Self Employed",
    heading2: "Full Stack Developer",
    delay: 3,
  },
  {
    div1: " top-64",
    div3: "left-16",
    div5: "-left-2 md:-left-2",
    date: "Oct 2021- present",
    heading1: "Self Employed",
    heading2: "Full Stack Developer",
    delay: 4,
  },
  {
    div1: "top-[368px]",
    div3: "right-16",
    div5: "-left-2 md:left-auto md:-right-2",
    date: "Oct 2021- present",
    heading1: "Self Employed",
    heading2: "Full Stack Developer",
    delay: 5,
  },
  {
    div1: "top-[480px]",
    div3: "left-16 md:left-16",
    div5: "-left-2 md:-left-2",
    date: "Oct 2021- present",
    heading1: "Self Employed",
    heading2: "Full Stack Developer",
    delay: 6,
  },
  {
    div1: "top-[592px]",
    div3: "left-16 md:right-16",
    div5: "-left-2 md:left-auto md:-right-2",
    date: "Oct 2021- present",
    heading1: "Self Employed",
    heading2: "Full Stack Developer",
    delay: 7,
  },
];
