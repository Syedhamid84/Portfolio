import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import FormImage from "../images/contact1.png";
const Contact = () => {
  return (
    <>
      <div className="min-h-screen w-full bg-[#e5ecfb]">
        <div className="flex items-center justify-center gap-2 mt-4">
         
       
          <span> <FontAwesomeIcon icon={faHeadset} className="h-9 w-9" /></span>
            <h1>
              <span className="text-4xl font-bold">Get In </span>
              <span className="text-4xl font-bold text-[#7403a7]">Touch</span>
            </h1>
       
        </div>

        <div className="flex justify-center">
          <div className="flex justify-center gap-4 h-96 w-5/6  bg-green-100  mt-12  px-8 py-6">
            <div className="flex justify-center bg-red-100 h-full w-1/2"> 
            <img src={FormImage} alt="" className="" />
            </div>
            <div className=" bg-yellow-100  h-full w-1/2 ">
              <form className="flex justify-center items-center flex-col gap-4 mt-8 ">
                <input
                  className="bg-[#e5ecfb] h-12 w-96 placeholder-black rounded-md border border-black p-2  "
                  type="text"
                  placeholder="Name"
                  id="name "
                ></input>
                <input
                  className="bg-[#e5ecfb] h-12 w-96 placeholder-black rounded-md border border-black p-2 "
                  type="email"
                  placeholder="Email"
                  id="email"
                ></input>

                <input
                  className="bg-[#e5ecfb] h-12 w-96 placeholder-black rounded-md border border-black p-2 "
                  type="number"
                  placeholder="Phone"
                  id="phone"
                ></input>
                <textarea
                  className="bg-[#e5ecfb] h-36 w-96 placeholder-black rounded-md	 p-2 border border-black"
                  type="text"
                  placeholder="Message"
                  id="message"
                ></textarea>
               <button className="flex flex-end gap-2 rounded-md  bg-[#2506ad] text-lg text-[#FFFFFF] px-6 py-3 ">
                Submit
                <span><FontAwesomeIcon icon={faPaperPlane} /></span>
              </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
