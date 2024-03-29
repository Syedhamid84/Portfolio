import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import FlipcartProject from "../images/flipkartphp.png";
import ProjectImage from "../images/reactprojects.png";

const Work = () => {
  return (
    <section id="work" className=" bg-[#01042d] w-full  ">
      <div className="flex justify-center items-center gap-2 p-2">
        <div className=" flex justify-center items-center gap-2 my-4">
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
      </div>
      {/* portfolio section */}
      <div className="flex items-center h-full w-full p-2 ">
        <div className="flex justify-center items-center gap-6 mt-4 flex-wrap mx-16 ">
          {ProjectsData.map((Item, index) => {
            return (
              <div key={index} className="h-72 w-96 rounded-md bg-yellow-200">
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
