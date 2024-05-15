import React from "react";
import { Link } from "react-scroll";
import { TopbarData } from "../data";

const MobileNavbar = () => {
  return (
    <div className="flex justify-end bg-[#01042d] w-[50%] absolute top-[70px] right-0 border shadow-md h-full">
      <div className="flex flex-col w-full gap-4 px-8 py-6">
        {TopbarData.map((item, index) => {
          return (
            <div key={index} className="">
              <Link
                activeClass="active"
                to={item.link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="hover:border-b-2 text-white border-[#2506ad] font-semibold hover:text-[#2506ad] pb-1.5 cursor-pointer font-poppins shadow-2xl"
              >
                {item.name}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default MobileNavbar;
