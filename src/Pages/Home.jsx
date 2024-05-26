import React, { useState } from "react";
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
// import Design from "../Components/design";

const Home = () => {
  const [hover, setHover] = useState(false);
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row justify-evenly items-center px-5 mt-0 py-8 md:py-16 gap-12 "
    >
      {/* <div className=" w-1/2 bg-orange-100 flex justify-center   "> */}
      <div className=" flex  items-start justify-center flex-col gap-2">
        <h2 className="text-3xl md:text-5xl font-bold text-[#002057] font-poppins ">
          Hi There, <br /> I'm Syed Hamid{" "}
          <span className="text-[#FF7B00] ">Ali</span>
        </h2>
        <div>
          {/* <h1 className="text-2xl">I'm into Frontend Web Developement</h1> */}
          <TypeWriter text="Frontend Web Developement|" />
          {/* <TypeWriter text="  Backend Web Developement|" /> */}
        </div>

        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="flex items-center gap-2 text-[#FFFFFF] text-base cursor-pointer "
        >
          <button className="rounded-3xl text-lg bg-[#2506ad] text-[#FFFFFF] px-6 py-2 flex gap-1">
            About Me
            <span>
              <FontAwesomeIcon icon={faCircleArrowDown} />
            </span>
          </button>
        </Link>

        <div className="flex gap-2 mt-4">
          {IconLinkData.map((item, index) => {
            return (
              <div
                key={index}
                // className="h-12 w-12 ´${hover:item.bghover} ´ flex items-center  justify-center rounded-full bg-black"
                className={`h-12 w-12 ${
                  hover ? item.bghover : ""
                } flex items-center justify-center rounded-full bg-black`}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                <item.icon className="text-[#05daff]" />
              </div>
            );
          })}
        </div>
      </div>

      <img src={hero} alt="" className=" h-80 w-80 rounded-full" />

      <div id="particles-js"></div>
    </section>
  );
};
export default Home;

export const IconLinkData = [
  {
    icon: InstagramIcon,
    link: "",
    bghover: "#007bb6",
  },
  {
    icon: TwitterIcon,
    link: "",
    bghover: "#00aced",
  },
  {
    icon: GitHubIcon,
    link: "",
    bghover: "#0e0e0e",
  },
  {
    icon: LinkedInIcon,
    link: "",
    bghover: "#ee00da",
  },
  {
    icon: LogoDevIcon,
    link: "",
    bghover: "#ffffff",
  },
];
