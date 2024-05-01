import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import FlipcartProject from "../images/flipkartphp.png";
import ProjectImage from "../images/reactprojects.png";

const Work = () => {
  return (
    <section id="work" className=" bg-[#01042d] w-full  ">
        <div className=" flex justify-center items-center gap-2 py-12">
          <span className="items-center ">
            <FontAwesomeIcon
              icon={faLaptopCode}
              className="h-14 w-14 text-[#FFFFFF]"
            />
          </span>
          <h1 className="">
            <span className="text-4xl font-bold text-[#FFFFFF]">Projects</span>
            <span className="text-4xl font-bold text-[#ffe603]"> Made</span>
          </h1>
        </div>
      {/* </div> */}
      {/* portfolio section */}
      <div className="flex justify-center">

        <div className="grid grid-cols-3 gap-5 mt-4 ">
          {ProjectsData.map((Item, index) => {
            return (
              <div key={index} className=" max-w-80 rounded-md bg-yellow-200">
                <img src={Item.img} alt={Item.alt} className="h-72" />
              </div>
            );
          })} 
        </div>
      </div>
      <div className="flex justify-center mt-4 ">
        <div>
          <button className="border-2 rounded-md text-[#FFFFFF] border-white bg-[#01042d] px-8 py-3 flex gap-1 mb-4">
            View All
            <div>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
export default Work;

export const ProjectsData = [
  {
    img: FlipcartProject,
    alt: "projectimage",
  },
  {
    img: ProjectImage,
    alt: "projectimage",
  },
  {
    img: FlipcartProject,
    alt: "projectimage",
  },
  {
    img: ProjectImage,
    alt: "projectimage",
  },
  {
    img: FlipcartProject,
    alt: "projectimage",
  },
  {
    img: ProjectImage,
    alt: "projectimage",
  },
];
