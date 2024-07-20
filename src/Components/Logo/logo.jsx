import React from "react";
import { ReactComponent as LogoIcon } from "./logo.svg";

const NameLogo = () => {
  return (
    <div className="flex items-center ">
      <LogoIcon className="h-9 w-9 " />
      <span className="font-semibold text-2xl ml-2 hover:text-orange ">
        Ali
      </span>
    </div>
  );
};
export default NameLogo;
