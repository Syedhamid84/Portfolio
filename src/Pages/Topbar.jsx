import React from "react";
import { useState } from "react";
import { Link } from "react-scroll";
import { TopbarData } from "../data";
import MobileNavbar from "./Mobilenavbar";
import { Spin as Hamburger } from "hamburger-react";
import NameLogo from "../Components/Logo/logo";

const Topbar = () => {
  const [open, setOpen] = useState(false);

  return (
    // fixed and static issues
    <div name="test1" className=" ">
      <div className="bg-white py-3 w-full flex items-center justify-end gap-6 px-5 static md:px-16  z-40 border-b">
        <div className=" flex-1 ml-5 md:ml-10  ">
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
                className="hover:border-b-2 border-[#011aff] font-semibold hover:text-[#011aff] pb-1.5 cursor-pointer font-poppins shadow-2xl space-links"
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
      {/* <hr /> */}
      {open && <MobileNavbar />}
    </div>
  );
};

export default Topbar;
