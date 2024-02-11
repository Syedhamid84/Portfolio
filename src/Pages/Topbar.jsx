import React from "react";
import { useState } from "react";
import Home from "../Pages/Home";

import About from "../Pages/About";
import Skills from "../Pages/Skills";
import Education from "../Pages/Education";
import Work from "../Pages/Work";
import Experience from "../Pages/Experience";
import Contact from "../Pages/Contact";

import { TopbarData } from "../data";

const Topbar = () => {

  return (
    <navbar className="bg-red-300">
      <div>
        <div className="bg-yellow-200 h-16  flex items-center justify-end px-24">
          <nav className="flex gap-10  list-none ">
            {TopbarData.map((item, index) => {
              return (
                <div key={index} >
                  {item.name}
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
