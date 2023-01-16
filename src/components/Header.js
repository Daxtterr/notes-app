import React from "react";
import avi from "../images/medium-shot-happy-man-smiling.jpg";

const Header = () => {
  return (
    <div className="bg-fashion h-24 md:h-32 px-4 md:px-16 flex justify-between items-center ">
      <h3 className="md:text-2xl font-bold text-white">Notify by Daxter</h3>
      <div className="flex items-center  space-x-2 bg-white p-2 rounded-lg">
        <img src={avi} className="h-5 md:h-8 rounded-md"></img>
        <span className="text-sm font-bold text-green-700">
          Mr. Daxter <br />{" "}
        </span>
      </div>
    </div>
  );
};

export default Header;
