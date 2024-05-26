import React from "react";
import { useState } from "react";
import { Link } from "react-scroll";
import { TopbarData } from "../data";
import MobileNavbar from "./Mobilenavbar";
import { Spin as Hamburger } from "hamburger-react";
import NameLogo from "../Components/Logo/logo";

const Topbar = () => {
  const [open, setOpen] = useState(false);

  const IconHandle = () => {
    setOpen(!open);
    console.log("testing", open);
  };
  return (
    <div className="flex-col">
      <div className="bg-white py-5 w-full flex items-center justify-end gap-6 px-5 md:px-16 static z-40 ">
        <div className="flex justify-start bg bg-red-400 items-start">
          <NameLogo />
        </div>
        {TopbarData.map((item, index) => {
          return (
            <div key={index} className="hidden md:flex">
              <Link
                activeClass="active"
                to={item.link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="hover:border-b-2 border-[#2506ad] font-semibold hover:text-[#2506ad] pb-1.5 cursor-pointer font-poppins shadow-2xl"
              >
                {item.name}
              </Link>
            </div>
          );
        })}

        <div className="block md:hidden">
          <Hamburger toggled={open} toggle={setOpen} />
        </div>
      </div>
      <hr />
      {open && <MobileNavbar />}
    </div>
  );
};

export default Topbar;
