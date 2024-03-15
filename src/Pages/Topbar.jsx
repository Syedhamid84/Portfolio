import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { TopbarData } from "../data";
const Topbar = () => {
  return (
    <navbar className="bg-red-300">
      <div>
        <div className="bg-yellow-200 h-16  flex items-center justify-end px-24">
          <nav className="flex gap-10  list-none ">
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
                    className="hover:border-b-2 border-[#2506ad] font-bold hover:text-[#2506ad] pb-1.5"
                  >
                    {item.name}

                  </Link>
                </div>
              );
            })}
          </nav>
        </div>
      </div>
    </navbar>
  );
};

export default Topbar;
