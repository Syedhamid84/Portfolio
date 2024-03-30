import React from "react";
import { Link } from "react-scroll";
import { TypeWriter } from "./TypeWriterComponent";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";
import hero from "../images/hero.png";

const Home = () => {
  return (
    <section id="home" className="py-16 flex gap-12 justify-evenly items-center bg-red-400  ">
      {/* <div className=" w-1/2 bg-orange-100 flex justify-center   "> */}
        <div className=" flex  items-center justify-center flex-col gap-2 bg-green-500">
            <h2 className="text-[50px] font-bold text-[#002057] ">
              Hi There, <br /> I'm Syed Hamid{" "}
              <span className="text-[#FF7B00] ">Ali</span>
            </h2>
          <div>
            {/* <h1 className="text-2xl">I'm into Frontend Web Developement</h1> */}
            <TypeWriter text="  Frontend Web Developement|" />
            {/* <TypeWriter text="  Backend Web Developement|" /> */}
          </div>
          <div className="">
            <button className="rounded-3xl text-lg bg-[#2506ad] text-[#FFFFFF] px-6 py-2 flex gap-1">
              About Me
              <div>
                <FontAwesomeIcon icon={faCircleArrowDown} />
              </div>
            </button>
          </div>
          <div className="flex gap-2 mt-4">
            {IconLinkData.map((Item, index) => {
              return (
                <Link
                  key={index}
                  className="h-12 w-12 flex items-center  justify-center rounded-full bg-black"
                >
                  <Item.icon className="text-[#05daff]" />
                </Link>
              );
            })}
          </div>
        </div>
      {/* </div> */}

      {/* <div className=" bg-yellow-200 flex justify-center  "> */}
        {/* <div className="h-72 w-72  bg-green-50 "> */}
          {/* <div className="h-72 w-72 rounded-full bg-green-400 "> */}
            <img src={hero} alt="" className=" h-72 w-72 rounded-full" />
          {/* </div> */}
        {/* </div> */}
        <div id="particles-js"></div>
      {/* </div> */}
    </section>
  );
};
export default Home;

export const IconLinkData = [
  {
    icon: InstagramIcon,
    link: "",
  },
  {
    icon: TwitterIcon,
    link: "",
  },
  {
    icon: GitHubIcon,
    link: "",
  },
  {
    icon: LinkedInIcon,
    link: "",
  },
  {
    icon: LogoDevIcon,
    link: "",
  },
];
