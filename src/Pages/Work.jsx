import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faEye,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";
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
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mt-4 px-12">
          {ProjectsData.map((Item, index) => {
            return (
              <div
                key={index}
                className=" max-w-80 rounded-md bg-yellow-200 relative"
              >
                <img src={Item.img} alt={Item.alt} className="h-72 w-full" />
                <div className="flex flex-col gap-3 absolute opacity-0 hover:opacity-100 bg-white bottom-0 right-0">
                  <h3 className="text-xl bg-yellow-300 px-2 py-4 font-bold">
                    {Item.projectname}{" "}
                  </h3>
                  <h1 className="px-5 text-base">{Item.projectdescription} </h1>
                  <div className="flex justify-between px-5 py-3">
                    <button className="flex gap-1 justify-center items-center py-3 px-5 rounded-md text-white bg-black text-base">
                      <FontAwesomeIcon icon={faEye} className="h-4 w-4 text-center mt-1" />
                      View
                    </button>
                    <button className="flex gap-1 justify-center items-center py-3 px-5 rounded-md text-white bg-black text-base">
                      
                      Code
                    <FontAwesomeIcon icon={faCode} className="h-4 w-4 text-center mt-1"/>
                    </button>
                  </div>
                </div>
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
    projectname: "Flipkart MERN",
    projectdescription:
      "Full-Stack Flipkart With Admin Dashboard And Paytm Payment Gateway. MERN Stack WebApp, Ready To Use For Business.",
  },
  {
    img: ProjectImage,
    alt: "projectimage",
    projectname: "Instagram MERN",
    projectdescription:
      "Full-Stack Instagram Clone Built Using MERN Stack And Realtime Chat With The Help Of Socket.IO",
  },
  {
    img: FlipcartProject,
    alt: "projectimage",
    projectname: "ResumeGen",
    projectdescription:
      "ReactJS Basic Resume Generator Which Will Generate Customized Resume In Few Minutes On Your Requirements.",
  },
  {
    img: ProjectImage,
    alt: "projectimage",
    projectname: "Instagram MERN",
    projectdescription:
      "Full-Stack Instagram Clone Built Using MERN Stack And Realtime Chat With The Help Of Socket.IO",
  },
  {
    img: FlipcartProject,
    alt: "projectimage",
    projectname: "ResumeGen",
    projectdescription:
      "ReactJS Basic Resume Generator Which Will Generate Customized Resume In Few Minutes On Your Requirements.",
  },
  {
    img: ProjectImage,
    alt: "projectimage",
    projectname: "Flipkart MERN",
    projectdescription:
      "Full-Stack Flipkart With Admin Dashboard And Paytm Payment Gateway. MERN Stack WebApp, Ready To Use For Business.",
  },
];
