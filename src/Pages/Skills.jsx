import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { SkillsData } from "../data";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Skills = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: false });

  const animationVariants = {
    hidden: { y: "-20vh", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };
  return (
    <section id="skills" className="w-full bg-lightpurple">
      <div className="flex justify-center items-center gap-2 p-2">
        <div className=" flex justify-center items-center gap-2 my-2">
          <span className="items-center ">
            <FontAwesomeIcon
              icon={faLaptopCode}
              className="h-14 w-14 text-white"
            />
          </span>
          <h1 className="">
            <span className="text-3xl md:text-4xl font-bold text-white">
              Skills &
            </span>
            <span className="text-3xl md:text-4xl font-bold text-yellow">
              {" "}
              Abilities
            </span>
          </h1>
        </div>
      </div>

      <div className="flex justify-center items-center ">
        <div
          className="flex justify-center pb-4 gap-3 bg-bluegradient flex-wrap rounded-lg mx-5 md:mx-24 lg:mx-48 pt-4 mb-4"
          ref={ref}
        >
          {SkillsData.map((item, index) => {
            return (
              <motion.div
                ref={ref}
                key={index}
                variants={animationVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="flex flex-col justify-center items-center h-32 md:h-32 w-32 md:w-40 bg-darknavyblue rounded-lg"
              >
                <img
                  src={item.image}
                  alt=""
                  className="h-10 md:h-12 w-10 md:w-12 bg-darknavyblue"
                />
                <span className="text-lg md:text-2xl text-white mt-2">
                  {item.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Skills;
