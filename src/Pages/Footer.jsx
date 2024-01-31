import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faMapMarkedAlt} from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <>
    <div className="min-h-fit bg-[#05011f]">
      <div className="flex gap-8 py-2">
        <div className="flex  gap-4 w-1/2">
          <div className="flex items-center flex-col gap-2 ">
            <div className="text-[#FFFFFF]  text-2xl">hamid's Portfolio</div>
            <div className="text-[#FFFFFF]  text-base">
              Thank you for visiting my personal portfolio website.
              Connect with me over socials.
            </div>
            <div className="text-[#FFFFFF] text-center text-base">
              Keep Rising 🚀. Connect with me over live chat!
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="text-[#FFFFFF] text-2xl ">
           
              Quick links</div>
            <div className="flex gap-2 text-[#FFFFFF] text-base">
            <span> <FontAwesomeIcon icon={faChevronCircleRight}  /></span>
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
        <div className="flex justify-center w-1/2">
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
              <div className="h-12 w-12 flex items-center  justify-center rounded-full bg-[#e6e6e6]">
                {<LinkedInIcon className="text-black" />}
              </div>
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-[#e6e6e6]">
                <GitHubIcon className="text-black" />
              </div>
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-[#e6e6e6]">
                <TwitterIcon className="text-black" />
              </div>
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-[#e6e6e6]">
                <InstagramIcon className="text-black" />
              </div>
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-[#e6e6e6]">
                <LogoDevIcon className="text-black" />
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

      </div>
    
    </>
  );
};
export default Footer;
