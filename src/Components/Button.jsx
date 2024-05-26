import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ViewButton = ({ buttonValue }) => {
  console.log("button value", buttonValue);
  return (
    <div className="flex justify-center mt-4 ">
      <button className="border-2 rounded-md text-[#FFFFFF] border-white bg-[#01042d] px-8 py-3 flex gap-1 mb-4">
        {/* View All */}
        {buttonValue}
        <div>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </button>
    </div>
  );
};
export default ViewButton;
