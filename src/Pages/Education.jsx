import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import SchoolImage from "../images/school.jpg";
import CollegeImage from "../images/college.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Education = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: false });

  const animationVariants = {
    hidden: { y: "-30vh", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };
  return (
    <div id="education" className="w-full bg-[#e5ecfb] py-8 ">
      <div className="flex flex-col gap-6 items-center">
        <div className="flex items-center gap-2">
          <span>
            <FontAwesomeIcon icon={faGraduationCap} className="h-9 w-9" />
          </span>
          <h1 className="">
            <span className="text-3xl md:text-4xl font-bold">My </span>
            <span className="text-3xl md:text-4xl font-bold text-[#7403a7]">
              Education
            </span>
          </h1>
        </div>

        <p className="text-lg  text-[#000000] text-center px-2 ">
          Education Is Not The Learning Of Facts, But The Training Of The Mind
          To Think.
        </p>
      </div>
      <div className="flex justify-center items-center mt-4 ">
        <div ref={ref}>
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={animationVariants}
            className="flex flex-col gap-4 mt-4 px-4 max-w-[850px]"
          >
            {EducationData.map((item, index) => {
              return (
                <div
                  // ref={ref}
                  key={index}
                  className="flex flex-col md:flex-row gap-0 md:gap-4 w-full bg-[#fcfcfc] rounded-md shadow-xl hover:shadow-2xl transition-shadow duration-300 "
                >
                  {" "}
                  <div className="w-full md:w-56">
                    <img
                      src={item.img}
                      alt={item.alt}
                      className="w-full h-full object-cover object-center rounded-s-md"
                    />
                  </div>
                  <div className="flex flex-col justify-center gap-2 w-full mt-2 p-4">
                    <span className="text-2xl font-semibold text-[#012a70]">
                      {item.degree}
                    </span>
                    <span className="text-base text-[#070707]">
                      {item.school}
                    </span>
                    <span className="text-lg font-semibold   text-[#226d01] ">
                      {item.date}
                    </span>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Education;

export const EducationData = [
  {
    img: SchoolImage,
    alt: "institute Image",
    degree: "Bachelors Of Computer Science Technology",
    school: "University Of The Punjab",
    date: "2014-2019 | Completed",
  },
  {
    img: CollegeImage,
    alt: "institute Image",
    degree: "Intermediate Of Computer Science",
    school: "Govt Islamia College Civil lines",
    date: "2012-2014 | Completed",
  },
  {
    img: SchoolImage,
    alt: "institute Image",
    degree: "Matric",
    school: "Bright Way Foundation School",
    date: "2010-2012 | Completed",
  },
];
