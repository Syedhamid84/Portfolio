import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeadset,
  faPaperPlane,
  faUser,
  faEnvelope,
  faPhone,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";
import FormImage from "../images/contact1.png";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formdata, setFormdata] = useState({
    username: "",
    useremail: "",
    userphone: "",
    usermessage: "",
  });

  const SERVICE_ID = "service_8yab15t";
  const TEMPLATE_ID = "template_gg19us5";
  const PUBLIC_KEY = "mQcJ1ckTXr8rdYbAo";

  const submitHandle = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        alert("Message Sent Successfully");
      },
      (error) => {
        console.log(error.text);
        alert("Something went wrong!");
      }
    );

    setFormdata({
      username: "",
      useremail: "",
      userphone: "",
      usermessage: "",
    });
  };

  const IsValidEmail = (value) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(value);
  };

  const IsValidPhone = (value) => {
    const phoneNumberRegex = /^(\+[1-9]{1}[0-9]{3,14})?([0-9]{9,14})$/;
    return phoneNumberRegex.test(value);
  };

  const IsFormDisabled = () => {
    return (
      !IsValidEmail(formdata.useremail) ||
      formdata.username === "" ||
      formdata.usermessage === "" ||
      !IsValidPhone(formdata.userphone)
    );
  };

  return (
    <div id="contact" className="w-full bg-[#e5ecfb] py-8">
      <div className="flex items-center justify-center gap-2 pt-2">
        <span>
          <FontAwesomeIcon icon={faHeadset} className="h-9 w-9" />
        </span>
        <h1>
          <span className="text-4xl font-bold">Get In </span>
          <span className="text-4xl font-bold text-[#7403a7]">Touch</span>
        </h1>
      </div>

      <div className="flex justify-center items-center">
        <div className="flex justify-center gap-10 w-[330px] md:w-[996px] bg-[#FFFFFF] mt-12 px-4 py-6 rounded-2xl">
          <img src={FormImage} alt="" className="hidden md:block" />
          <form className="flex flex-col gap-4 w-96" onSubmit={submitHandle}>
            <div className="relative">
              <input
                className="bg-[#e5ecfb] h-12 w-full placeholder-black rounded-md border border-black focus:outline-[#7e19af] pl-12"
                type="text"
                placeholder="Name"
                id="name"
                name="name"
                value={formdata.username}
                onChange={(e) =>
                  setFormdata({ ...formdata, username: e.target.value })
                }
                required
              />
              <span className="flex justify-center items-center absolute top-0 h-12 w-12">
                <FontAwesomeIcon
                  icon={faUser}
                  className="text-lg text-[#333333] focus:text-[#7e19af]"
                />
              </span>
            </div>

            <div className="relative">
              <input
                className="bg-[#e5ecfb] h-12 w-full placeholder-black rounded-md border border-black focus:outline-[#7e19af] pl-12"
                type="email"
                placeholder="Email"
                id="email"
                name="email"
                value={formdata.useremail}
                onChange={(e) =>
                  setFormdata({ ...formdata, useremail: e.target.value })
                }
                required
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
                className="bg-[#e5ecfb] h-12 w-full placeholder-black rounded-md border border-black pl-12 focus:outline-[#7e19af]"
                type="tel"
                placeholder="Phone"
                id="phone"
                name="userphone"
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
            </div>

            <div className="relative">
              <textarea
                className="bg-[#e5ecfb] h-36 w-full placeholder-black rounded-md pl-12 border border-black focus:outline-[#7e19af] pt-2 resize-none"
                placeholder="Message"
                id="message"
                name="message"
                value={formdata.usermessage}
                onChange={(e) =>
                  setFormdata({ ...formdata, usermessage: e.target.value })
                }
                required
              />
              <span className="flex justify-center items-center absolute top-0 h-12 w-12">
                <FontAwesomeIcon
                  icon={faCommentDots}
                  className="text-lg text-[#333333]"
                />
              </span>
            </div>

            <div className="flex justify-end">
              <button
                className="flex justify-center items-center gap-2 rounded-md bg-[#2506ad] text-lg text-[#FFFFFF] w-32 h-12 cursor-pointer shadow-outline"
                disabled={IsFormDisabled()}
                type="submit"
              >
                Submit
                <span>
                  <FontAwesomeIcon icon={faPaperPlane} />
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
