import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import FormImage from "../images/contact1.png";

const Contact = () => {
  const [formdata, setFormdata] = useState({
    username: "",
    useremail: "",
    userphone: "",
    usermessage: "",
  });
  const SubmitHandle = () => {
    console.log("values", formdata);

    console.log("pakistan");
    setFormdata({
      username: "",
      useremail: "",
      userphone: "",
      usermessage: "",
    });
  };
  const IsValidEmail = (value) => {
    const EmailRegix = /^[A-Z0-9. _%+-]+@[A-Z0-9. -]+\. [A-Z]{2,}$/i;
    return EmailRegix.test(value);
  };

  const IsValidPhone = (value) => {
    const phoneNumberRegix = /^(\+[1-9]{1}[0-9]{3,14})?([0-9]{9,14})$/;
    return phoneNumberRegix.test(value);
  };

  const IsFormdisabled = () => {
    return (
      !IsValidEmail(formdata.useremail) ||
      formdata.username === "" ||
      formdata.usermessage === "" ||
      !IsValidPhone(formdata.userphone)
    );
  };
  return (
    <>
      <div id="contact" className="w-full bg-[#e5ecfb] py-8">
        <div className="flex items-center justify-center gap-2 pt-2">
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
          <div className="flex justify-center gap-10 max-w-[996px]  bg-[#FFFFFF]  mt-12  px-4 py-6 rounded-2xl">
            <img src={FormImage} alt="" className="hidden md:block" />
            <div className="flex flex-col gap-4 w-96  bg-yellow-400">
              <div className="relative bg-red-400 ">
                <input
                  className="bg-[#e5ecfb] h-12 w-full placeholder-black rounded-md border border-black pl-12"
                  type="text"
                  placeholder="Name"
                  id="name"
                  name={formdata.username}
                  value={formdata.username}
                  onChange={(e) =>
                    setFormdata({ ...formdata, username: e.target.value })
                  }
                  required
                />

                <span className="flex justify-center items-center absolute top-0  h-12 w-12">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="text-lg text-[#333333]"
                  />{" "}
                </span>
              </div>

              {/* <div className="relative">
                <input
                  className="bg-[#e5ecfb] h-12 w-full md:w-96 placeholder-black rounded-md border border-black pl-12 "
                  type="phone"
                  placeholder="Phone"
                  id="phone"
                  name={formdata.userphone}
                  value={formdata.userphone}
                  onChange={(e) =>
                    setFormdata({ ...formdata, userphone: e.target.value })
                  }
                  required
                />
                <span className="flex justify-center items-center absolute top-0 h-12 w-12">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="text-lg text-[#333333]"
                  />
                </span>
              </div> */}

              {/* <div className="relative">
                <textarea
                  className="bg-[#e5ecfb] h-36 w-full md:w-96 placeholder-black rounded-md pl-12 border border-black pt-2 resize-none"
                  type="text"
                  placeholder="Message"
                  id="message"
                  name={formdata.usermessage}
                  value={formdata.usermessage}
                  onChange={(e) =>
                    setFormdata({ ...formdata, usermessage: e.target.value })
                  }
                  required
                />
                <span className="flex justify-center items-center absolute top-0 h-12 w-12">
                  <FontAwesomeIcon
                    icon={faCommentDots}
                    className="text-lg text-[#333333] "
                  />
                </span>
              </div> */}
              <div className="flex justify-end">
                <button
                  className="flex justify-center items-center gap-2 rounded-md  bg-[#2506ad] text-lg text-[#FFFFFF] w-32 h-12 cursor-pointer shadow-outline"
                  disabled={IsFormdisabled()}
                  onClick={() => SubmitHandle()}
                >
                  Submit
                  <span>
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </span>
                </button>
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
