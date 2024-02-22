import React from "react";
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
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <>
      <div className="min-h-fit bg-[#05011f] container px-20 relative">
        <div className="flex gap-8 py-2">
          <div className="flex  gap-4 w-1/2">
            <div className="flex flex-1 items-left flex-col gap-2 m-6 ">
              <div className="text-[#FFFFFF]  text-2xl">hamid's Portfolio</div>
              <h1 className="text-[#FFFFFF]  text-base">
                Thank you for visiting my personal portfolio website.
                Connect with me over socials.
              </h1>
              <p className="text-[#FFFFFF] text-base">
                Keep Rising 🚀. Connect with me over live chat!
              </p>
            </div>

            <div className="flex flex-col gap-2 mt-6">
              <div className="text-[#FFFFFF] text-2xl ">

                Quick links</div>
              <div className="flex gap-2 text-[#FFFFFF] text-base">
                <span> <FontAwesomeIcon icon={faChevronCircleRight} /></span>
                Home</div>
              <div className="flex gap-2 text-[#FFFFFF] text-base">
                <span> <FontAwesomeIcon icon={faChevronCircleRight} /></span>
                About</div>
              <div className="flex gap-2 text-[#FFFFFF] text-base">
                <span> <FontAwesomeIcon icon={faChevronCircleRight} /></span>
                Skills</div>
              <div className="flex gap-2 text-[#FFFFFF] text-base">
                <span> <FontAwesomeIcon icon={faChevronCircleRight} /></span>
                Education</div>

              <div className="flex gap-2 text-[#FFFFFF] text-base">
                <span> <FontAwesomeIcon icon={faChevronCircleRight} /></span>
                Work</div>

              <div className="flex gap-2 text-[#FFFFFF] text-base">
                <span> <FontAwesomeIcon icon={faChevronCircleRight} /></span>
                Experience</div>
            </div>
          </div>
          <div className="flex justify-center w-1/2 mt-6">
            <div className="flex flex-col gap-2 ">
              <div className="text-[#FFFFFF] text-2xl">Contact Info</div>
              <div className="flex gap-2 text-[#FFFFFF] text-base">
                <span><FontAwesomeIcon icon={faPhone} className="text-[#ffae02]" /></span>
                +92 XXX-XXX-XXXX</div>
              <div className="flex gap-2 text-[#FFFFFF] text-base">
                <span><FontAwesomeIcon icon={faEnvelope} className="text-[#ffae02]" /></span>
                syedhamidali84@gmail.com</div>
              <div className="flex gap-2 text-[#FFFFFF] text-base">
                <span><FontAwesomeIcon icon={faMapMarkedAlt} className="text-[#ffae02]" /></span>
                Lahore, Pakistan-540000</div>

              <div className="flex gap-2 mt-4">
                <div className="h-12 w-12 flex items-center  justify-center rounded-full  bg-[#e6e6e6] hover:bg-[#05011f] 
              border border-[#FFFFFF] ">
                  {<LinkedInIcon className="text-[#02094b] hover:text-[#ffae02]  " />}
                </div>
                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-[#e6e6e6]  hover:bg-[#05011f] 
              border border-[#FFFFFF]">
                  <GitHubIcon className="text-[#02094b] hover:text-[#ffae02] " />
                </div>
                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-[#e6e6e6]  hover:bg-[#05011f] 
              border border-[#FFFFFF]">
                  <TwitterIcon className="text-[#02094b] hover:text-[#ffae02] " />
                </div>
                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-[#e6e6e6]  hover:bg-[#05011f] 
              border border-[#FFFFFF]">
                  <InstagramIcon className="text-[#02094b] hover:text-[#ffae02] " />
                </div>
                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-[#e6e6e6]  hover:bg-[#05011f] 
              border border-[#FFFFFF]">
                  <LogoDevIcon className="text-[#02094b] hover:text-[#ffae02] " />
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className=" bg-[#05011f]  flex mt-4 justify-center ">
          <div className="text-[#e6e6e6] bg-[#05011f] mt-4 mb-4">
            Designed With <span><FontAwesomeIcon icon={faHeart} className="text-[#ea0607]" /></span> By Syed Hamid
          </div>
        </div>

        <div className="h-14 w-14 flex justify-center border border-white items-center absolute bottom-4 right-4 rounded-full bg-purple animate-bounce	">
          <a href="https://wa.link/yp6v57">
            <FontAwesomeIcon
              icon={faCommentDots}
              className="text-lg text-[#FFFFFF] h-6 w-6 "
            />


          </a>

        </div>

      </div>

    </>
  );
};
export default Footer;
