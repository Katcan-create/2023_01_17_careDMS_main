import React from "react";
import { FiEdit3 } from "react-icons/fi";

const Sidebar = () => {
  return (
    <>
      <div className="w-36">
        <div className="w-36 h-screen fixed divide-x-reverse pt-7 pb-7 flex flex-col items-center pr-10 shadow-lg bg-indigo-100 justify-between">
          {/* Profile */}
          <div className="profile flex flex-col items-center">
            <div className="bg-indigo-400 w-11 h-11 rounded-full"></div>
            <h1 className="mt-2 font-bold text-md">CDMS</h1>
            <h3 className="text-xs text-black">Administrator</h3>
          </div>

          {/* Functions */}
          <FiEdit3 className="bg-white rounded-full p-2 duration-700 hover:shadow-lg hover:-translate-y-1 cursor-pointer hover:text-indigo-600" size={32} />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
