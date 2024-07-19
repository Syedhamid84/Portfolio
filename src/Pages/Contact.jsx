import React, { useRef } from "react";
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
import { contactSchema } from "../Components/validationSchema/Schema";
import { useFormik } from "formik";

const Contact = () => {
  const formRef = useRef();

  const SERVICE_ID = "service_ss89klk";
  const TEMPLATE_ID = "template_gg19us5";
  const PUBLIC_KEY = "PszqCQfTPwx8fMR-r";

  const formik = useFormik({
    initialValues: {
      username: "",
      useremail: "",
      userphone: "",
      usermessage: "",
    },
    validationSchema: contactSchema,
    onSubmit: (_values, { resetForm }) => {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      resetForm();
    },
  });

  const { errors, touched, values, handleChange, handleBlur, handleSubmit } =
    formik;

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
          <form
            ref={formRef}
            className="flex flex-col gap-4 w-96"
            onSubmit={handleSubmit}
          >
            <div className="input-container">
              <input
                className="bg-[#e5ecfb] h-12 w-full placeholder-black rounded-md border border-black pl-12"
                type="text"
                placeholder="Name"
                id="username"
                name="username"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              <span className="flex justify-center items-center absolute top-0 h-12 w-12">
                <FontAwesomeIcon
                  icon={faUser}
                  className="text-lg text-[#333333] icon"
                />
              </span>
              {errors.username && touched.username && (
                <span className="text-red-500 text-sm p-1">
                  {errors.username}
                </span>
              )}
            </div>

            <div className="input-container">
              <input
                className="bg-[#e5ecfb] h-12 w-full placeholder-black rounded-md border border-black group pl-12"
                type="email"
                placeholder="Email"
                id="useremail"
                name="useremail"
                value={values.useremail}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              <span className="flex justify-center items-center absolute top-0 h-12 w-12">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-lg text-[#333333] icon"
                />
              </span>
              {errors.useremail && touched.useremail && (
                <span className="text-red-500 text-sm p-1">
                  {errors.useremail}
                </span>
              )}
            </div>

            <div className="input-container">
              <input
                className="bg-[#e5ecfb] h-12 w-full placeholder-black rounded-md border border-black pl-12"
                type="tel"
                placeholder="Phone"
                id="userphone"
                name="userphone"
                value={values.userphone}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              <span className="flex justify-center items-center absolute top-0 h-12 w-12">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-lg text-[#333333] icon"
                />
              </span>
              {errors.userphone && touched.userphone && (
                <span className="text-red-500 text-sm p-1">
                  {errors.userphone}
                </span>
              )}
            </div>

            <div className="input-container">
              <textarea
                className="bg-[#e5ecfb] h-36 w-full placeholder-black rounded-md pl-12 border border-black pt-2 resize-none"
                placeholder="Message"
                id="usermessage"
                name="usermessage"
                value={values.usermessage}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              <span className="flex justify-center items-center absolute top-0 h-12 w-12">
                <FontAwesomeIcon
                  icon={faCommentDots}
                  className="text-lg text-[#333333] icon"
                />
              </span>
              {errors.usermessage && touched.usermessage && (
                <span className="text-red-500 text-sm p-1">
                  {errors.usermessage}
                </span>
              )}
            </div>

            <div className="flex justify-end">
              <button
                className="flex justify-center items-center gap-2 rounded-md bg-[#2506ad] text-lg text-[#FFFFFF] w-32 h-12 cursor-pointer shadow-outline"
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
