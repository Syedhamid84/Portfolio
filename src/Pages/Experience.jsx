import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import ViewButton from "../Components/Button";

const Experience = () => {
  return (
    <div id="experience" className="bg-[#f7f7f7] w-full pt-4 ">
      <div className="flex justify-center items-center bg-red-400 gap-2">
        <span className="items-center">
          <FontAwesomeIcon
            icon={faBriefcase}
            className="h-10 w-10 text-[#202020]"
          />{" "}
        </span>
        <h1 className="text-4xl font-bold text-[#202020]">Experience</h1>
      </div>
      {/* <div className="relative bg-green-400">
          <div className="flex justify-center item-center mt-4">
            <div className="relative h-screen w-2 bg-[#00002c]">
              <div
                className=" flex justify-center items-center h-9 w-9 rounded-full 
              border-4 bg-[#f7f7f7] border-[#ff8600] absolute top-[5%]  -right-3.5 "
              >
                <span>
                  <FontAwesomeIcon
                    icon={faBriefcase}
                    className="h-5 w-5 text-[#202020]"
                  />
                </span>
              </div>

              <div
                className=" flex justify-center items-center h-9 w-9 rounded-full 
              border-4 bg-[#f7f7f7] border-[#ff8600] absolute top-[25%] -right-3.5 "
              >
                <span>
                  <FontAwesomeIcon
                    icon={faBriefcase}
                    className="h-5 w-5 text-[#202020]"
                  />
                </span>
              </div>

              <div
                className=" flex justify-center items-center h-9 w-9 rounded-full 
              border-4 bg-[#f7f7f7] border-[#ff8600] absolute top-[45%]  -right-3.5 "
              >
                <span>
                  <FontAwesomeIcon
                    icon={faBriefcase}
                    className="h-5 w-5 text-[#202020]"
                  />
                </span>
              </div>

              <div
                className=" flex justify-center items-center h-9 w-9 rounded-full 
              border-4 bg-[#f7f7f7] border-[#ff8600] absolute top-[65%]  -right-3.5 "
              >
                <span>
                  <FontAwesomeIcon
                    icon={faBriefcase}
                    className="h-5 w-5 text-[#202020]"
                  />
                </span>
              </div>

              <div
                className=" flex justify-center items-center h-9 w-9 rounded-full 
              border-4 bg-[#f7f7f7] border-[#ff8600] absolute top-[85%] -right-3.5 "
              >
                <span>
                  <FontAwesomeIcon
                    icon={faBriefcase}
                    className="h-5 w-5 text-[#202020]"
                  />
                </span>
              </div>

              <div
                className=" flex justify-center items-center h-9 w-9 rounded-full 
                border-4 bg-[#f7f7f7] border-[#ff8600] absolute top-[100%] -right-3.5 "
              >
                <span>
                  <FontAwesomeIcon
                    icon={faBriefcase}
                    className="h-5 w-5 text-[#202020]"
                  />
                </span>
              </div>
            </div>
          </div>

          <div className="h-12 w-12 relative clip-path: polygon(0 46%, 54% 100%, 55% 0)"></div>
          <div className="flex flex-col h-24 justify-center w-96 bg-red-400 absolute top-10 right-72  rounded-md">
            <div>
              <h1>Self employed</h1>
            </div>
            <div>
              <p>Full Stack Developer</p>
            </div>
            <div>
              <small>Oct 2021 - present</small>
            </div>
          </div>

          <div className="flex flex-col h-24 justify-center w-96 bg-red-400 absolute top-36 left-72  rounded-md">
            <div>
              <h1>Map Streak Flyseas</h1>
            </div>
            <div>
              <p>Web Developer Internship </p>
            </div>
            <div>
              <small>June 2021 - Dec 2021</small>
            </div>
          </div>

          <div className="flex flex-col h-24 justify-center w-96 bg-red-400 absolute top-64 right-72  rounded-md">
            <div>
              <h1>The Spark Foundation</h1>
            </div>
            <div>
              <p>Website Developer Internship</p>
            </div>
            <div>
              <small>May 2021 - june 2021</small>
            </div>
          </div>

          <div className="flex flex-col h-24 justify-center w-96 bg-red-400 absolute top-96 left-72  rounded-md">
            <div>
              <h1>The Spark Foundation</h1>
            </div>
            <div>
              <p>Mobile Application Developer Internship</p>
            </div>
            <div>
              <small>Apr 2021 - May 2021</small>
            </div>
          </div>

          <div className="flex flex-col h-24 justify-center w-96 bg-red-400 absolute bottom-24 right-72  rounded-md">
            <div>
              <h1>Fresher technologies</h1>
            </div>
            <div>
              <p>Wordpress DEveloper internship</p>
            </div>
            <div>
              <small>Apr 2021 - Apr 2021</small>
            </div>
          </div>
          <div className="flex flex-col h-24 justify-center w-96 bg-red-400 absolute bottom-12 left-72  rounded-md">
            <div>
              <h1>Wondering Blog</h1>
            </div>
            <div>
              <p>Web Developer & SEO internship</p>
            </div>
            <div>
              <small>March 2021 - Apr 2021</small>
            </div>
          </div>
        </div> */}
      <div className="w-12 h-[750px] bg-transparent relative mx-auto">
        <div className="w-4 h-[650px] absolute bg-black mx-auto top-0 left-0 right-0"></div>
        {/* 1st experience */}
        {/* <div className=" h-6 w-6 bg-yellow-300 absolute top-10 left-0 right-0 mx-auto">
          <div className=" relative">
            <div className=" w-[300px] absolute bg-red-300 -top-2 left-16 mx-auto rounded-md">
              <div className="relative w-full">
                <div className="absolute bg-red-300 h-6 w-6 -left-2 top-4 rotate-45 "></div>
                <div className="flex flex-col  px-8 py-2">
                  <h1 className="font-bold">Self Employed</h1>
                  <h1 className="font-bold">Full Stack Developer</h1>
                  <span>Oct 2021- present</span>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* {ExperiencedData.map((item, index)=>{
          return(
                <div key={index} className={´h-6 w-6 bg-yellow-300 absolute top-${item.iconPosition} left-0 right-0 mx-auto´}>
                  
                  
          <div className=" relative">
            <div className=" w-[300px] absolute bg-red-300 -top-2 left-16 mx-auto rounded-md">
              <div className="relative w-full">
                <div className="absolute bg-red-300 h-6 w-6 -left-2 top-4 rotate-45 "></div>
                <div className="flex flex-col  px-8 py-2">
                  <h1 className="font-bold">Self Employed</h1>
                  <h1 className="font-bold">Full Stack Developer</h1>
                  <span>Oct 2021- present</span>
                </div>
              </div>
            </div>
          </div>
        </div> 
          );
        })}; */}

        {ExperiencedData.map((item, index) => (
          <div
            key={index}
            className={` flex justify-center items-center h-8 w-8 border-4  border-yellow-300 bg-white rounded-full absolute mx-auto top-${item.iconPosition.top} right-${item.iconPosition.right} left-${item.iconPosition.left}`}
          >
            <span className="">
              <FontAwesomeIcon
                icon={faBriefcase}
                className="h-4 w-4 text-[#202020]"
              />{" "}
            </span>
            <div className="relative">
              <div
                className={`w-[300px] absolute bg-red-300 mx-auto rounded-md top-${
                  item.SideBoxDiv.top
                } ${
                  item.SideBoxDiv.right !== undefined
                    ? `right-${item.SideBoxDiv.right} left-${item.SideBoxDiv.left} left-${item.SideBoxDiv.left}`
                    : `left-${item.SideBoxDiv.left}`
                }`}
              >
                <div className="relative w-full">
                  <div
                    className={`absolute bg-red-300 h-6 w-6 rotate-45 top-${
                      item.RotateDiv.top
                    } ${
                      item.RotateDiv.right !== undefined
                        ? `right-${item.RotateDiv.left}`
                        : `left-${item.RotateDiv.right}`
                    }`}
                  ></div>
                  <div className="flex flex-col px-8 py-2">
                    <h1 className="font-bold">{item.title}</h1>
                    <h1 className="font-bold">{item.heading}</h1>
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* 2nd Experience */}
        {/* <div className=" h-6 w-6 bg-yellow-300 absolute top-36 left-0 right-0 mx-auto">
          <div className=" relative">
            <div className=" w-[300px] absolute bg-red-300 -top-2 right-16 mx-auto rounded-md">
              <div className="relative w-full  ">
                <div className="absolute bg-red-300 h-6 w-6 -right-2 top-4 rotate-45 "></div>
                <div className="flex flex-col  px-8 py-2">
                  <h1 className="font-bold">Self Employed</h1>
                  <h1 className="font-bold">Full Stack Developer</h1>
                  <span>Oct 2021- present</span>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* 3rd experirence */}
        <div className=" h-6 w-6 bg-yellow-300 absolute top-64 left-0 right-0 mx-auto">
          <div className=" relative">
            <div className=" w-[300px] absolute bg-red-300 -top-2 left-16 mx-auto rounded-md">
              <div className="relative w-full">
                <div className="absolute bg-red-300 h-6 w-6 -left-2 top-4 rotate-45 "></div>
                <div className="flex flex-col  px-8 py-2">
                  <h1 className="font-bold">Self Employed</h1>
                  <h1 className="font-bold">Full Stack Developer</h1>
                  <span>Oct 2021- present</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4th experirence */}
        <div className=" h-6 w-6 bg-yellow-300 absolute top-[368px] left-0 right-0 mx-auto">
          <div className=" relative">
            <div className=" w-[300px] absolute bg-red-300 -top-2 right-16 mx-auto rounded-md">
              <div className="relative w-full  ">
                <div className="absolute bg-red-300 h-6 w-6 -right-2 top-4 rotate-45 "></div>
                <div className="flex flex-col  px-8 py-2 ">
                  <h1 className="font-bold">Self Employed</h1>
                  <h1 className="font-bold">Full Stack Developer</h1>
                  <span>Oct 2021- present</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5th experirence */}
        <div className=" h-6 w-6 bg-yellow-300 absolute top-[480px] left-0 right-0 mx-auto">
          <div className=" relative">
            <div className=" w-[300px] absolute bg-red-300 -top-2 left-16 mx-auto rounded-md">
              <div className="relative w-full">
                <div className="absolute bg-red-300 h-6 w-6 -left-2 top-4 rotate-45 "></div>
                <div className="flex flex-col  px-8 py-2">
                  <h1 className="font-bold">Self Employed</h1>
                  <h1 className="font-bold">Full Stack Developer</h1>
                  <span>Oct 2021- present</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 6th experirence */}
        <div className=" h-6 w-6 bg-yellow-300 absolute top-[592px] left-0 right-0 mx-auto">
          <div className=" relative">
            <div className=" w-[300px] absolute bg-red-300 -top-2 right-16 mx-auto rounded-md">
              <div className="relative w-full  ">
                <div className="absolute bg-red-300 h-6 w-6 -right-2 top-4 rotate-45 "></div>
                <div className="flex flex-col  px-8 py-2 ">
                  <h1 className="font-bold">Self Employed</h1>
                  <h1 className="font-bold">Full Stack Developer</h1>
                  <span>Oct 2021- present</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex justify-center mt-4 ">
        <button className="border-2 rounded-md text-[#FFFFFF] border-white bg-[#01042d] px-8 py-3 flex gap-1 mb-4">
          View All
          <div>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </button>
      </div> */}

      <ViewButton buttonValue={"View All"} />
    </div>
  );
};
export default Experience;
{
  /*     <div className=" h-6 w-6 bg-yellow-300 absolute top-36 left-0 right-0 mx-auto">
          <div className=" relative">
            <div className=" w-[300px] absolute bg-red-300 -top-2 right-16 mx-auto rounded-md">
              <div className="relative w-full  ">
                <div className="absolute bg-red-300 h-6 w-6 -right-2 top-4 rotate-45 "></div>
                <div className="flex flex-col  px-8 py-2">
                  <h1 className="font-bold">Self Employed</h1>
                  <h1 className="font-bold">Full Stack Developer</h1>
                  <span>Oct 2021- present</span>
                </div>
              </div>
            </div>
          </div>
        </div>*/
}

export const ExperiencedData = [
  {
    icon: "faBriefcase",
    iconPosition: {
      top: 10,
      right: 0,
      left: 0,
    },
    SideBoxDiv: {
      top: -2, //minus 2
      left: 16,
      right: 0,
    },
    RotateDiv: {
      top: 4,
      left: 2, //minus 2
    },

    title: "Self Employed",
    heading: "Full Stack Developer",
    date: "Oct 2021- present",
  },

  {
    icon: "faBriefcase",
    iconPosition: {
      top: 36,
      right: 0,
      left: 0,
    },
    SideBoxDiv: {
      top: -2, //minus 2
      right: 16,
    },
    RotateDiv: {
      top: 4,
      right: -2,
    },

    title: "Self Employed",
    heading: "Full Stack Developer",
    date: "Oct 2021- present",
  },
];
