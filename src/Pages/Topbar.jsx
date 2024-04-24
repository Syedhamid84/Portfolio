import React from "react";
import { Link } from "react-scroll";
import { TopbarData } from "../data";
const Topbar = () => {
  return (
        <div className="bg-white py-5 w-full flex items-center justify-end gap-10 px-24 fixed  z-40">
            {TopbarData.map((item, index) => {
              return (
                <div
                  key={index}
                >
                  <Link
                    activeClass="active"
                    to={item.link}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="hover:border-b-2 border-[#2506ad] font-bold hover:text-[#2506ad] pb-1.5 cursor-pointer"
                  >
                    {item.name}

                  </Link>
                </div>
              );
            })}
        </div>
  );
};

export default Topbar;
