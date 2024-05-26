import React from "react";
import { ReactComponent as LogoIcon } from "./logo.svg";

const NameLogo = () => {
  return (
    <div className="flex items-center text-[#1d2a38]">
      <LogoIcon className="h-10 w-10 " />
      <span className="font-semi text-2xl ml-2">Ali</span>
    </div>
  );
};
export default NameLogo;
