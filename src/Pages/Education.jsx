import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import SchoolImage from "../images/school.jpg";
import CollegeImage from "../images/college.jpg";
const Education = () => {
  return (
    <>
      <div
        id="education"
        className="w-full bg-[#e5ecfb] py-8 ">
        <div className="flex justify-center gap-2 items-centerm ">
          <span>
            <FontAwesomeIcon icon={faGraduationCap} className="h-9 w-9" />
          </span>
          <h1>
            <span className="text-4xl font-bold">My </span>
            <span className="text-4xl font-bold text-[#7403a7]">Education</span>
          </h1>
        </div>
        <div className="flex justify-center text-center mt-2">
          <p className="text-2xl text-[#000000]">
            Education Is Not The Learning Of Facts, But The Training Of The Mind
            To Think.
          </p>
        </div>
        <div className="flex justify-center mt-4">
          <div className="flex gap-2 h-36 w-8/12 bg-[#fcfcfc] mt-4">
            <div className="h-36 w-3/12 bg-yellow-500">
              <img src={SchoolImage} alt="" className="h-36" />

            </div>
            <div className="flex flex-col justify-center m-3 w-full ">
              <div className="py-1">
                <span className="text-2xl text-[#012a70]">
                  Bachelors Of Computer Science Technology
                </span>
              </div>
              <div className="py-1">
                <span className="text-base text-[#070707]">
                  University Of The Punjab
                </span>
              </div>
              <div className="py-1">
                <span className="text-lg font-bold   text-[#226d01] ">
                  2014-2019 | Completed
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-2">
          <div className="flex gap-2 h-36 w-8/12 bg-[#fcfcfc] mt-4">
            <div className="h-36 w-3/12 bg-yellow-500">
              <img src={CollegeImage} alt="" className="h-36" />

            </div>
            <div className="flex flex-col justify-center m-3 w-full ">
              <div className="py-1">
                <span className="text-2xl text-[#012a70]">
                  Intermediate Of Computer Science
                </span>
              </div>
              <div className="py-1">
                <span className="text-base text-[#070707]">
                  Govt Islamia College Civil lines
                </span>
              </div>
              <div className="py-1">
                <span className="text-lg font-bold  text-[#226d01] ">
                  2012-2014 | Completed
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-2">
          <div className="flex gap-2 h-36 w-8/12 bg-[#fcfcfc] mt-4">
            <div className="h-36 w-3/12 bg-yellow-500">
              <img src={SchoolImage} alt="" className="h-36" />

            </div>
            <div className="flex flex-col justify-center m-3 w-full ">
              <div className="py-1">
                <span className="text-2xl text-[#012a70]">
                  Matric
                </span>
              </div>
              <div className="py-1">
                <span className="text-base text-[#070707]">
                  Bright Way Foundation School
                </span>
              </div>
              <div className="py-1">
                <span className="text-lg font-bold  text-[#226d01] ">
                  2010-2012 | Completed
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Education;
