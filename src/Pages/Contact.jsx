import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";

// <i class="fa fa-phone" aria-hidden="true"></i>

import FormImage from "../images/contact1.png";
const Contact = () => {
  return (
    <>
      <div className="min-h-screen w-full bg-[#e5ecfb]">
        <div className="flex items-center justify-center gap-2 pt-8">
          <span>
            {" "}
            <FontAwesomeIcon icon={faHeadset} className="h-9 w-9" />
          </span>
          <h1>
            <span className="text-4xl font-bold">Get In </span>
            <span className="text-4xl font-bold text-[#7403a7]">Touch</span>
          </h1>
        </div>

        <div className="flex justify-center">
          <div className="flex justify-center gap-10 h-[450px] w-5/6  bg-[#FFFFFF]  mt-12  px-4 py-6 rounded-2xl">
            <div className="md:flex justify-center bg-red-100 h-full w-1/2 hidden">
              <img src={FormImage} alt="" className="" />
            </div>
            <form className="flex flex-col gap-4 w-96 ">
              <div className="relative ">
                <input
                  className="bg-[#e5ecfb] h-12 w-72 md:w-96 placeholder-black rounded-md border border-black pl-12"
                  type="text"
                  placeholder="Name"
                  id="name "
                />

                <span className="flex justify-center items-center absolute top-0  h-12 w-12">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="text-lg text-[#333333]"
                  />{" "}
                </span>
              </div>

              <div className="relative">
                <input
                  className="bg-[#e5ecfb] h-12 w-72 md:w-96 placeholder-black rounded-md border border-black pl-12 "
                  type="email"
                  placeholder="Email"
                  id="email"
                />
                <span className="flex justify-center items-center absolute top-0 h-12 w-12">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-lg text-[#333333]"
                  />
                </span>
              </div>

              <div className="relative">
                <input
                  className="bg-[#e5ecfb] h-12 w-72 md:w-96 placeholder-black rounded-md border border-black pl-12 "
                  type="number"
                  placeholder="Phone"
                  id="phone"
                />
                <span className="flex justify-center items-center absolute top-0 h-12 w-12">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="text-lg text-[#333333]"
                  />
                </span>
              </div>

              <div className="relative">
                <textarea
                  className="bg-[#e5ecfb] h-36 w-96 placeholder-black rounded-md pl-12 border border-black pt-2 "
                  type="text"
                  placeholder="Message"
                  id="message"
                />
                <span className="flex justify-center items-center absolute top-0 h-12 w-12">
                  <FontAwesomeIcon
                    icon={faCommentDots}
                    className="text-lg text-[#333333] "
                  />
                </span>
              </div>
              <div className="flex justify-end">
                <button className="flex justify-center items-center gap-2 rounded-md  bg-[#2506ad] text-lg text-[#FFFFFF] w-32 h-12 ">
                  Submit
                  <span>
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </span>
                </button>
              </div>
            </form>
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
