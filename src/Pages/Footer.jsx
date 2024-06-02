import React from "react";
import { Link } from "react-scroll";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <div className="flex flex-col gap-8 bg-[#05011f] px-4 md:px-20 relative">
      <div className="flex flex-col md:flex-row gap-8 pt-6">
        <div className="flex flex-col gap-2 w-full ">
          <h1 className="text-[#FFFFFF]  text-2xl">hamid's Portfolio</h1>
          <p className="text-[#FFFFFF]  text-base">
            Thank you for visiting my personal portfolio website. Connect with
            me over socials.
          </p>
          <p className="text-[#FFFFFF] text-base">
            Keep Rising 🚀. Connect with me over live chat!
          </p>
        </div>

        <Link
          activeClass="active"
          to="test1"
          spy={true}
          smooth={true}
          duration={500}
        >
          <div className="flex justify-center items-center h-9 w-9 bg-yellow-400 rounded-full absolute bottom-4 right-4">
            <span>
              <FontAwesomeIcon icon={faAngleUp} className="text-black" />
            </span>
          </div>
        </Link>

        <div className="flex flex-col gap-2 w-full">
          <h1 className="text-[#FFFFFF] text-2xl ">Quick links</h1>
          {QuickLinksData.map((Item, index) => {
            return (
              <Link
                key={index}
                activeClass="active"
                to={Item.link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="flex items-center gap-2 text-[#FFFFFF] text-base cursor-pointer "
              >
                <span>
                  {" "}
                  <FontAwesomeIcon icon={Item.icon} />
                </span>
                {Item.text}{" "}
              </Link>
            );
          })}
        </div>
        <div className="flex items-start w-full">
          <div className="flex flex-col gap-2 ">
            <h1 className="text-[#FFFFFF] text-2xl">Contact Info</h1>
            {ContactinfoData.map((Item, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center gap-2 text-[#FFFFFF] text-base"
                >
                  <FontAwesomeIcon
                    icon={Item.icon}
                    className="text-[#ffae02]"
                  />
                  <span>{Item.text}</span>
                </div>
              );
            })}
            <div className="flex gap-2 mt-4">
              {IconLinkData.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="h-12 w-12 flex items-center  justify-center rounded-full  bg-[#e6e6e6] group hover:bg-[#05011f] 
                  border border-[#FFFFFF] "
                  >
                    <item.icon className="text-[#02094b] group-hover:text-[#ffae02] " />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <hr className="h-1 w-full" />

      <div className=" bg-[#05011f]  flex justify-center mb-4">
        <div className="text-[#e6e6e6] bg-[#05011f] ">
          Designed With{" "}
          <span>
            <FontAwesomeIcon icon={faHeart} className="text-[#ea0607]" />
          </span>{" "}
          By Syed Hamid Ali
        </div>
      </div>
    </div>
  );
};
export default Footer;

export const QuickLinksData = [
  {
    icon: faChevronCircleRight,
    text: "Home",
    link: "home",
  },
  {
    icon: faChevronCircleRight,
    text: "About",
    link: "about",
  },
  {
    icon: faChevronCircleRight,
    text: "Skills",
    link: "skills",
  },
  {
    icon: faChevronCircleRight,
    text: "Education",
    link: "education",
  },
  {
    icon: faChevronCircleRight,
    text: "Work",
    link: "work",
  },
  {
    icon: faChevronCircleRight,
    text: "Experience",
    link: "experience",
  },
];

export const ContactinfoData = [
  {
    icon: faPhone,
    text: "+92 XXX-XXX-XXXX",
  },
  {
    icon: faEnvelope,
    text: "syedhamidali84@gmail.com",
  },
  {
    icon: faMapMarkedAlt,
    text: "Lahore, Pakistan-540000",
  },
];

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
