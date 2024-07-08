import React from "react";
import ProfileImage from "../images/hamid.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import resume from "../images/Resume.pdf";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: false });

  // const animationVariants = {
  //   hidden: { y: "-30vh", opacity: 0 },
  //   visible: {
  //     y: 0,
  //     opacity: 1,
  //     transition: { duration: 1, ease: "easeInOut" },
  //   },
  // };

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: "-30vh", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  return (
    <section id="about" className="bg-[#efefef] w-full py-12">
      <div>
        <div className="flex justify-center gap-2 ">
          <span>
            <FontAwesomeIcon icon={faUserAlt} className="h-9 w-9 " />
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
            className="rounded-2xl w-80 border bg-cover"
            src={ProfileImage}
            alt="Profile"
          />
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {AboutData.map((item, index) => (
              <div
                ref={ref}
                key={index}
                className="flex items-start gap-2 flex-col py-4 px-5 max-w-[480px]"
              >
                <motion.div
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={itemVariants}
                >
                  <h1 className="text-2xl font-bold">{item.name}</h1>
                </motion.div>

                <motion.div
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={itemVariants}
                >
                  <h1 className="text-sm font-semibold">{item.designation}</h1>
                </motion.div>

                <motion.div
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={itemVariants}
                >
                  <p className="text-base mt-4">{item.description}</p>
                </motion.div>

                <motion.div
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={itemVariants}
                >
                  <span className="flex gap-1 text-base font-poppins">
                    <p className="text-[#1522ff]">Email :</p>{" "}
                    <p>{item.email}</p>
                  </span>
                </motion.div>

                <motion.div
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={itemVariants}
                >
                  <span className="flex gap-1 text-base font-poppins">
                    <p className="text-[#1522ff]">Place :</p>{" "}
                    <p>{item.place}</p>
                  </span>
                </motion.div>

                <a href={resume} download="Resume">
                  <button
                    className="flex justify-center items-center font-sans font-medium rounded-md bg-[#2506ad] 
                  text-[#FFFFFF] text-lg w-32 py-2 gap-2 mt-8 shadow-xl hover:shadow-2xl transition-shadow duration-300"
                  >
                    {item.button}
                    <FontAwesomeIcon icon={item.icon} className="w-2 mt-1" />
                  </button>
                </a>
              </div>
            ))}
          </motion.div>
        </div>
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
