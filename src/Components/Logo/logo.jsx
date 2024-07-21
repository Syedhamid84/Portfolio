import React from "react";
import { ReactComponent as LogoIcon } from "./logo.svg";
import { Link } from "react-scroll";

const NameLogo = () => {
  return (
    <Link
      activeClass="active"
      to="test2"
      spy={true}
      smooth={true}
      duration={500}
    >
      <div className="flex items-center ">
        <LogoIcon className="h-9 w-9 " />
        <span className="font-semibold text-2xl ml-2 hover:text-orange ">
          Ali
        </span>
      </div>
    </Link>
  );
};
export default NameLogo;
