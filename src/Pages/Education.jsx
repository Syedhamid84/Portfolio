import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import SchoolImage from "../images/school.jpg";
import CollegeImage from "../images/college.jpg";
const Education = () => {
  return (
    <div id="education" className="w-full bg-[#e5ecfb] py-8 ">
      <div className="flex flex-col gap-2 items-center ">
        <div className="flex items-center gap-2">
          <span>
            <FontAwesomeIcon icon={faGraduationCap} className="h-9 w-9" />
          </span>
          <h1>
            <span className="text-4xl font-bold">My </span>
            <span className="text-4xl font-bold text-[#7403a7]">Education</span>
          </h1>
        </div>

        <p className="text-2xl text-[#000000]">
          Education Is Not The Learning Of Facts, But The Training Of The Mind
          To Think.
        </p>
      </div>
      <div className="flex flex-col gap-4 items-center mt-4 ">
        {EducationData.map((item, index) => {
          return (
            <div
              key={index}
              className="flex gap-4 h-36 w-8/12 bg-[#fcfcfc]"
            >
              <div className="h-36 w-3/12 bg-yellow-500">
                <img src={item.img} alt={item.alt} className="h-36" />
              </div>
              <div className="flex flex-col justify-center gap-1  w-full ">
                <span className="text-2xl text-[#012a70]">{item.degree}</span>
                <span className="text-base text-[#070707]">{item.school}</span>
                <span className="text-lg font-bold   text-[#226d01] ">
                  {item.date}
                </span>
              </div>
            </div>
          );
        })}
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
