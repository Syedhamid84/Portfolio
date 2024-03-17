import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
const Experience = () => {
  return (
    <>
      <div
        id="experience"
        className=" bg-[#f7f7f7] w-full mt-4">
        <div className="flex justify-center items-center bg-red-400 gap-2">
          <span className="items-center">
            <FontAwesomeIcon
              icon={faBriefcase}
              className="h-10 w-10 text-[#202020]"
            />{" "}
          </span>
          <h1 className="text-4xl font-bold text-[#202020]">Experience</h1>
        </div>
        <div className="relative bg-green-400">
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
        </div>
      </div>
    </>
  );
};
export default Experience;
