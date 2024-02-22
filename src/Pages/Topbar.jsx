import React from "react";
// import { useState } from "react";
// import Home from "../Pages/Home";

// import About from "../Pages/About";
// import Skills from "../Pages/Skills";
// import Education from "../Pages/Education";
// import Work from "../Pages/Work";
// import Experience from "../Pages/Experience";
// import Contact from "../Pages/Contact";

import { TopbarData } from "../data";
import { Link } from "react-router-dom";

// const navigation = [{
//   { name: "Home", href: "", current: "", },
// { name: "", href: "", current: "", },
// { name: "", href: "", current: "", },
// { name: "", href: "", current: "", },
// { name: "", href: "", current: "", },

// }]

const Topbar = () => {

  return (
    <navbar className="bg-red-300">
      <div>
        <div className="bg-yellow-200 h-16  flex items-center justify-end px-24">
          <nav className="flex gap-10  list-none ">
            {TopbarData.map((item, index) => {
              return (
                <div
                  key={item.name}
                // href={item.href} 
                >
                  {item.name}
                </div>
                // <Link
                //   key={item.name}
                //   href={item.href}
                //   className={(
                //     item.current ? " text-purple" : "hover:text-purple",
                //     "px-3 py-4 text-15px font-medium space-links"
                //   )}
                //   aria-current={item.href ? "page" : undefined}
                // >
                //   {item.name}
                // </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </navbar>
  );
};

export default Topbar;
