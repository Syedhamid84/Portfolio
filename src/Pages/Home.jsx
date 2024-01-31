import React from "react";
import  InstagramIcon  from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons'
import hero from "../images/hero.png";


const Home = () => {
  return (
    <>
      <section className="min-h-screen w-full  flex gap-12 bg-black items-center  ">
        <div className="h-full w-1/2 bg-orange-100 flex justify-center   ">
          <div className=" flex  items-start flex-col gap-2">
            <div className=" ">
              <h1 className="text-3xl">Hi There,</h1>
            </div>
            <div>
              <h1 className="text-3xl">I'm Syed Hamid Ali</h1>
            </div>
            <div>
              <h1>I'm into Frontend Web Developement</h1>
            </div>
            <div className="">
              <button className="rounded-3xl bg-[#2506ad] text-[#FFFFFF] px-6 py-2 flex gap-1">
                About Me
                <div>
                <FontAwesomeIcon icon={faCircleArrowDown} />
                </div>
              </button>
            </div>
            <div className="flex gap-2 mt-4">
              <div className="h-12 w-12 flex items-center  justify-center rounded-full bg-black">
                {<LinkedInIcon className="text-[#05daff]"/>}
              </div>
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-black">
                <GitHubIcon className="text-[#05daff]"/>
              </div>
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-black">
                <TwitterIcon className="text-[#05daff]"/>
              </div>
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-black">
                <InstagramIcon className="text-[#05daff]"/>
              </div>
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-black">
                <LogoDevIcon className="text-[#05daff]"/>
              </div>
            </div>
          </div>
        </div>

        <div className="h-full w-1/2 bg-yellow-200 flex justify-center  ">
          <div className="h-72 w-72  bg-green-50 ">
            <div className="h-72 w-72 rounded-full bg-green-400 ">
            {/* <FontAwesomeIcon icon="fa-solid fa-box-archive" /> */}
            <img src={hero} alt="" className=" h-72 w-72 rounded-full" />
           
            

            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
