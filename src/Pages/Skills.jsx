import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { SkillsData } from "../data";
const Skills = () => {
  return (
    <section id="skills" className="w-full bg-[#5304b5]">
      <div className="flex justify-center items-center gap-2 p-2">
        <div className=" flex justify-center items-center gap-2 my-2">
          <span className="items-center ">
            <FontAwesomeIcon
              icon={faLaptopCode}
              className="h-14 w-14 text-[#FFFFFF]"
            />
          </span>
          <h1 className="">
            <span className="text-3xl md:text-4xl font-bold text-[#FFFFFF]">
              Skills &
            </span>
            <span className="text-3xl md:text-4xl font-bold text-[#ffe603]">
              {" "}
              Abilities
            </span>
          </h1>
        </div>
      </div>

      <div className="flex justify-center items-center ">
        <div className="flex justify-center pb-4 gap-3 bg-[#330572] flex-wrap rounded-lg mx-5 md:mx-24 lg:mx-48 pt-4 mb-4">
          {SkillsData.map((item, index) => {
            return (
              <div
                className="flex flex-col justify-center items-center h-32 md:h-32 w-32 md:w-40 bg-[#05011f] rounded-lg"
                key={index}
              >
                <img
                  src={item.image}
                  alt=""
                  className="h-10 md:h-12 w-10 md:w-12 bg-[#05011f] "
                />
                <span className="text-lg md:text-2xl text-[#FFFFFF] mt-2">
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Skills;
