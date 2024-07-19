import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faEye, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import FlipcartProject from "../images/flipkartphp.png";
import ProjectImage from "../images/reactprojects.png";
import ViewButton from "../Components/Button";

const Work = () => {
  const [allproject, setAllproject] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("webdevelopment");

  const handleViewProject = () => {
    setAllproject(!allproject);
    console.log("allproject", allproject);
  };

  const filteredProjects = ProjectsData.filter(
    (project) => project.category === selectedCategory
  );

  return (
    <section id="work" className="bg-[#01042d] w-full">
      <div className="flex justify-center items-center gap-2 py-4">
        <span className="items-center">
          <FontAwesomeIcon
            icon={faLaptopCode}
            className="h-14 w-14 text-[#FFFFFF]"
          />
        </span>
        <h1>
          <span className="text-3xl md:text-4xl font-bold text-[#FFFFFF]">
            Projects
          </span>
          <span className="text-3xl md:text-4xl font-bold text-[#ffe603]">
            {" "}
            Made
          </span>
        </h1>
      </div>

      {/* Tabs Button */}
      <div className="flex gap-2 px-0 md:px-32 justify-center">
        <button
          onClick={() => setSelectedCategory("webdevelopment")}
          className={` text-sm md:text-2xl p-2 ${
            selectedCategory === "webdevelopment"
              ? "text-white border-b-2 border-[#ffe603]"
              : "text-[#8C8C8C]"
          }`}
        >
          Web Development
        </button>
        <button
          onClick={() => setSelectedCategory("mobiledevelopment")}
          className={` text-lg md:text-2xl p-2 ${
            selectedCategory === "mobiledevelopment"
              ? "text-white border-b-2 border-[#ffe603]"
              : "text-[#8C8C8C]"
          }`}
        >
          Mobile Development
        </button>
        <button
          onClick={() => setSelectedCategory("backenddevelopment")}
          className={` text-lg md:text-2xl p-2 ${
            selectedCategory === "backenddevelopment"
              ? "text-white border-b-2 border-[#ffe603]"
              : "text-[#8C8C8C]"
          }`}
        >
          Backend Development
        </button>
      </div>

      {/* Portfolio Section */}
      <div className="flex justify-center">
        <div className="flex justify-center items-center flex-wrap gap-8 md:gap-8 mt-4 px-4 md:px-12">
          {filteredProjects.map((Item, index) => (
            <div key={index} className="w-full md:w-80 h-80 relative">
              <img
                src={Item.img}
                alt={Item.alt}
                className="object-cover object-center w-full h-full rounded-md"
              />
              <div className="absolute bottom-0 w-full">
                <div className="bg-yellow-300 rounded-b-md px-2 py-4 text-xl font-bold">
                  {Item.projectname}
                </div>
              </div>
              <div className="flex flex-col gap-3 absolute opacity-0 hover:opacity-100 bg-white bottom-0 right-0">
                <h3 className="text-xl bg-yellow-300 px-2 py-4 font-bold">
                  {Item.projectname}
                </h3>
                <h1 className="px-5 text-base">{Item.projectdescription}</h1>
                <div className="flex justify-between px-5 py-3">
                  <button className="flex gap-1 justify-center items-center py-3 px-5 rounded-md text-white bg-black text-base">
                    <FontAwesomeIcon
                      icon={faEye}
                      className="h-4 w-4 text-center mt-1"
                    />
                    View
                  </button>
                  <button className="flex gap-1 justify-center items-center py-3 px-5 rounded-md text-white bg-black text-base">
                    Code
                    <FontAwesomeIcon
                      icon={faCode}
                      className="h-4 w-4 text-center mt-1"
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {allproject &&
            filteredProjects.map((Item, index) => (
              <div key={index} className="w-full md:w-80 h-80 relative">
                <img
                  src={Item.img}
                  alt={Item.alt}
                  className="object-cover object-center w-full h-full rounded-md"
                />
                <div className="absolute bottom-0 w-full">
                  <div className="bg-yellow-300 rounded-b-md px-2 py-4 text-xl font-bold">
                    {Item.projectname}
                  </div>
                </div>
                <div className="flex flex-col gap-3 absolute opacity-0 hover:opacity-100 bg-white bottom-0 right-0">
                  <h3 className="text-xl bg-yellow-300 px-2 py-4 font-bold">
                    {Item.projectname}
                  </h3>
                  <h1 className="px-5 text-base">{Item.projectdescription}</h1>
                  <div className="flex justify-between px-5 py-3">
                    <button className="flex gap-1 justify-center items-center py-3 px-5 rounded-md text-white bg-black text-base">
                      <FontAwesomeIcon
                        icon={faEye}
                        className="h-4 w-4 text-center mt-1"
                      />
                      View
                    </button>
                    <button className="flex gap-1 justify-center items-center py-3 px-5 rounded-md text-white bg-black text-base">
                      Code
                      <FontAwesomeIcon
                        icon={faCode}
                        className="h-4 w-4 text-center mt-1"
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      {!allproject ? (
        <div className="" onClick={() => handleViewProject()}>
          <ViewButton buttonValue={"View More"} work={true} />
        </div>
      ) : (
        <div className="" onClick={() => handleViewProject()}>
          <ViewButton buttonValue={"View Less"} work={true} />
        </div>
      )}
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
    category: "webdevelopment",
  },
  {
    img: ProjectImage,
    alt: "projectimage",
    projectname: "Instagram MERN",
    projectdescription:
      "Full-Stack Instagram Clone Built Using MERN Stack And Realtime Chat With The Help Of Socket.IO",
    category: "webdevelopment",
  },
  {
    img: FlipcartProject,
    alt: "projectimage",
    projectname: "ResumeGen",
    projectdescription:
      "ReactJS Basic Resume Generator Which Will Generate Customized Resume In Few Minutes On Your Requirements.",
    category: "mobiledevelopment",
  },
  {
    img: ProjectImage,
    alt: "projectimage",
    projectname: "Instagram MERN",
    projectdescription:
      "Full-Stack Instagram Clone Built Using MERN Stack And Realtime Chat With The Help Of Socket.IO",
    category: "mobiledevelopment",
  },
  {
    img: FlipcartProject,
    alt: "projectimage",
    projectname: "ResumeGen",
    projectdescription:
      "ReactJS Basic Resume Generator Which Will Generate Customized Resume In Few Minutes On Your Requirements.",
    category: "backenddevelopment",
  },
  {
    img: ProjectImage,
    alt: "projectimage",
    projectname: "Flipkart MERN",
    projectdescription:
      "Full-Stack Flipkart With Admin Dashboard And Paytm Payment Gateway. MERN Stack WebApp, Ready To Use For Business.",
    category: "backenddevelopment",
  },

  {
    img: FlipcartProject,
    alt: "projectimage",
    projectname: "Flipkart MERN",
    projectdescription:
      "Full-Stack Flipkart With Admin Dashboard And Paytm Payment Gateway. MERN Stack WebApp, Ready To Use For Business.",
    category: "webdevelopment",
  },
  {
    img: ProjectImage,
    alt: "projectimage",
    projectname: "Instagram MERN",
    projectdescription:
      "Full-Stack Instagram Clone Built Using MERN Stack And Realtime Chat With The Help Of Socket.IO",
    category: "webdevelopment",
  },
  {
    img: FlipcartProject,
    alt: "projectimage",
    projectname: "ResumeGen",
    projectdescription:
      "ReactJS Basic Resume Generator Which Will Generate Customized Resume In Few Minutes On Your Requirements.",
    category: "mobiledevelopment",
  },
  {
    img: ProjectImage,
    alt: "projectimage",
    projectname: "Instagram MERN",
    projectdescription:
      "Full-Stack Instagram Clone Built Using MERN Stack And Realtime Chat With The Help Of Socket.IO",
    category: "mobiledevelopment",
  },
  {
    img: FlipcartProject,
    alt: "projectimage",
    projectname: "ResumeGen",
    projectdescription:
      "ReactJS Basic Resume Generator Which Will Generate Customized Resume In Few Minutes On Your Requirements.",
    category: "backenddevelopment",
  },
  {
    img: ProjectImage,
    alt: "projectimage",
    projectname: "Flipkart MERN",
    projectdescription:
      "Full-Stack Flipkart With Admin Dashboard And Paytm Payment Gateway. MERN Stack WebApp, Ready To Use For Business.",
    category: "backenddevelopment",
  },
];
