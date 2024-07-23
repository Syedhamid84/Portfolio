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

const Home = () => {
  const [hover, setHover] = useState(false);
  return (
    <section
      id="home"
      //using mt-20 to expand particles js
      className="flex flex-col md:flex-row justify-between items-center px-4 md:px-24 py-8 md:py-28 gap-12 mt-[60px]"
    >
      {/* <ParticlesComponent id="particles" /> */}
      <div className=" flex  items-start justify-center flex-col gap-4 w-full  ml-2 md:ml-0">
        <h2 className="text-3xl md:text-5xl font-bold text-mudblue font-poppins ">
          Hi There, <br /> I'm Syed Hamid{" "}
          <span className="text-orange ">Ali</span>
        </h2>
        <div className="">
          <TypeWriter
            className="md:"
            texts={[
              "Frontend Web Development|",
              "Backend Web Development|",
              "Full Stack Development|",
              "UI/UX Design|",
            ]}
            speed={80}
          />
        </div>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="flex items-center gap-2 text-base cursor-pointer "
        >
          <button className="rounded-3xl text-lg bg-royalblue text-white px-6 py-2 flex gap-1 shadow-xl hover:shadow-2xl transition-shadow duration-300 ">
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
                className={`h-12 w-12 ${
                  hover ? "" : ""
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
